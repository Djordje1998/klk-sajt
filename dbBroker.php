<?php

$host = "localhost";
$db = "kolokvijumi";
$user = "root";
$pass = "";

$conn = new mysqli($host,$user,$pass,$db);

if($conn->connect_errno){
    exit("Neuspesna konekcija: Greska> ". $conn->connect_error. "</br>".
            "error kod>". $conn->connect_errno);
}

?>