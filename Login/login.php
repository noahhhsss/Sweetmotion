<?php
session_start();

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "sweetmotion";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['email']) && isset($_POST['password'])) {

    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query correct table!
    $stmt = $conn->prepare("SELECT * FROM users WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user["Password"])) {

            $_SESSION["email"] = $user["Email"];  
            header("Location: ../Front_page/Front_page.html");
            exit();

        } else {
            echo "<script>alert('Incorrect password!'); window.history.back();</script>";
            exit();
        }
    } else {
        echo "<script>alert('Email not found!'); window.history.back();</script>";
        exit();
    }
}
?>
