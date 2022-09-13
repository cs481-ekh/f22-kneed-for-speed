<?php

class Dao {
    
    //local
    private $host = "127.0.0.1";
    private $db = "cs481";
    private $user = "root";
    private $pw = "";

    //online
    /*
    private $host = ;
    private $db = ;
    private $user = ;
    private $pw = ;
    */

    public function getConnection () {
        try{
            $conn = new PDO("mysql:dbname={$this->db};host={$this->host}", $this->user, $this->pw);
            return $conn;
        } catch (Exception $e){
            echo print_r($e, 1);
            exit;
        }
    }

    //Example DB function:
    /*
    public function createUser($userName, $password){
        $conn = $this->getConnection(); //get a connection to DB
        $query = "insert into users(username, password) values(:username, :password)"; //write a DB query
        $q = $conn->prepare($query); // use prepared statement for security
        $q->bindParam(":username", $userName); //bind parameter values
        $q->bindParam(":password", $password);
        $q->execute(); //execute query in DB
    }
    */
}

?>