<?php 
    include './conn.php';

    connect();

    $usermail = $_POST['mail']
    $userpass= $_POST['password']

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $loginQuery = "SELECT id, mail, password FROM users WHERE mail = ?";
        $loginStatement = $conn->prepare($loginQuery);
        $loginStatement->bind_param("s", $mail);
        $loginStatement->execute();
        $loginResult = $loginStatement->get_result();

        if ($loginResult->num_rows == 1) {
            $row = $loginResult->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                echo "Login successful!";
            } else {
                echo "Mail or Password is Incorrect";
            }
        }
    }
?>