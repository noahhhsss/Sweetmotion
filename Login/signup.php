<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "sweetmotion";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['signup'])) {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phonenum = $_POST['phonenum'];
    $address = $_POST['address'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);


    $stmt = $conn->prepare("SELECT * FROM users WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
    // Email already registered
    header("Location: ../Login/login.html?error=emailexists");
    exit();
    }
    
    $stmt = $conn->prepare("INSERT INTO users (Fullname, Email, phonenum, Address, `Password`) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $fullname, $email, $phonenum, $address, $password);


    if ($stmt->execute()) {
    // Signup success
    header("Location: ../Front_page/Front_page.html?success=signup");
    exit();
    } else {
    // Signup failed
    header("Location: ../Front_page/Front_page.html?error=stmtfailed");
    exit();
}
}
?>
