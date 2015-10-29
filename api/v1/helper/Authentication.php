<?php

/**
 * Adding Middle Layer to authenticate every request
 * Checking if the request has valid api key in the 'Api-Key' header
 */

function mw_auth() {
    
   // Master DB
	 include_once SessionData::getInstance()->getRootDir() .'/config/database.php';
	
   ORM::configure('mysql:host='.DB_HOST.';dbname='.DB_NAME.'');
	 ORM::configure('username', DB_USERNAME);
	 ORM::configure('password', DB_PASSWORD);
	 ORM::configure('logging', true);
	 ORM::configure('driver_options', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
 	 ORM::reset_db();
	
	 // Datum setzen
	 date_default_timezone_set('Europe/Berlin');    
    
   
   // Getting request headers
   $headers = apache_request_headers();
   $response = array();
   $app = \Slim\Slim::getInstance();   		
   
   
   // Verifying Authorization Header
   if (isset($headers['Api-Key'])) {
	   	$apikey = $headers['Api-Key'];
	   	
	   	
	   	// API-KEY vorhanden?
	   	$user = ORM::for_table('user')->where('api_key', $apikey)->find_one();
	   	if($user != null){
         
         // API aktiviert?
         if( $user['active'] == 1){
            
            // Everything is OK
            
            // Set Session Data   
            SessionData::getInstance()->setUserId($user['id']);
            
               
         }
         else {
            $response["error"] = true;
	   			  $response["message"] = "API-Key not activated!";
	   			  echoResponse(400, $response);
	   	
	      		$app->stop();
         }       
       
      }
      else {
         $response["error"] = true;
	   			$response["message"] = "API-KEY unknown!";
	   			echoResponse(400, $response);
	   	
	   			$app->stop();   
         
      }
	   	
	   	
	} 
  else {
   		 
   		// api key is missing in header
   		$response["error"] = true;
   		$response["message"] = "Api key is missing";
   		echoResponse(400, $response);
   	
   		$app->stop();
  }
   	
   	
           
} 


?>