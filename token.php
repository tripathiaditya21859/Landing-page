<?php
// Configuration
$db_host = 'localhost';
$db_username = 'agriss';
$db_password = '@123456';
$db_name = 'agriss';

// Create connection
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $date = $_POST["date"];

    // Insert data into database
    $sql = "INSERT INTO appointments (name, email, date) VALUES ('$name', '$email', '$date')";
    if ($conn->query($sql) === TRUE) {
        echo "New appointment created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>