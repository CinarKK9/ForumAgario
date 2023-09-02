<?php
include_once './conn.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["usermail"];
    $password = $_POST["userpass"];

    $uname_query = "SELECT id FROM users WHERE mail = ?";
    $uname_stmt = $conn->prepare($uname_query);
    $uname_stmt->bind_param("s", $username);
    $uname_stmt->execute();
    $check_result = $uname_stmt->get_result();

    if ($check_result->num_rows > 0) {
        echo "This email is already in use. Please login.";
    } else {

        if(filter_var("some@address.com", FILTER_VALIDATE_EMAIL)) {
            $signup_query = "INSERT INTO users (usermail, userpass) VALUES (?, ?)"; 
            $signup_stmt = $conn->prepare($signup_query);
            $signup_stmt->bind_param("ss", $username, $password);
    
            if ($signup_stmt->execute()) {
                echo "You successfully signed up.";
            } else {
                echo "Something went wrong.";
            }
        }
        else {
            echo "Please Enter a valid email address";
        }

    }

    $uname_stmt->close();
    $signup_stmt->close();
    $conn->close();
}
?>