<?php 
    include './conn.php';

    connect();

    $usermail = $_POST['mail']
    $userpass= $_POST['password']

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        echo base64_decode($usermail)
    }
?>