<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  

require("./conexion.php");
    $data = json_decode(file_get_contents('php://input'), true);  
       $id = $data['IdInmueble'];
       $conexion = new Conexion();
       $db = $conexion->getConexion();
       $query = "DELETE FROM productos WHERE IdInmueble=:id";
       $statement = $db->prepare($query);
       $statement->bindParam(':id', $id);
       $result = $statement->execute();
       if($result){
         return "removed";
       }
       return "error!"; 
?>