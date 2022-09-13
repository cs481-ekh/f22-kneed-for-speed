<?php

class Dao {
    
    private $host = "127.0.0.1";
    private $db = "cs481";
    private $user = "root";
    private $pw = "";

    public function getConnection () {
        try{
            $conn = new PDO("mysql:dbname={$this->db};host={$this->host}", $this->user, $this->pw);
            return $conn;
        } catch (Exception $e){
            echo print_r($e, 1);
            exit;
        }
    }
}

?>