<?php

/**
  * User login
  * 
  * http://krappmagazin.shopjektiv-entwicklung.de/api/v1/login
  *    
  * Parameter
  *  - email
  *  - password        
  * 
  * POST
  *     
  */ 
$app->post('/login', function() use ($app) {

   // init ORM
   ORM::configure('mysql:host='.DB_HOST.';dbname='.DB_NAME.'');
	 ORM::configure('username', DB_USERNAME);
	 ORM::configure('password', DB_PASSWORD);
	 ORM::configure('logging', true);
	 ORM::configure('driver_options', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
 	 ORM::reset_db();
	
	 // set date
	 date_default_timezone_set('Europe/Berlin');
   
   
   // Getting post parameters
   $parameters = $app->request->post();
  
   // Getting post JSON parameters
   #$parameters = json_decode($app->request->getBody(),true);
	
  
   // Init response array  
	 $response = array();
	 
	 
	 // check user credentials
	 if (isset($parameters['email']) && isset($parameters['password'])) {
	    
      $user = ORM::for_table('user')->where('email', $parameters['email'])->find_one();
	   	if($user != null){ 
         
         $password = sha1($parameters['password'] . $user->salt );
         if($user->password == $password){
            $response["error"] = false;
		        $response["message"] = "";
		        
		        // generate API key
            $api_key = md5(uniqid(rand(), true));
            $response["api_key"] = $api_key;
            $user->api_key       = $api_key;
            
		        // Set last_login
            $user->last_login = time();
            
            // save user data
            $user->save();
                        
            // role (fk)
            $role = ORM::for_table('role')->where('id', $user->role_id)->find_one();
            $response["role_id"] = $role->name;
		        
		        
            
            echoResponse(200, $response);
		        $app->stop(); 
         }
         else {
            $response["error"] = true;
		        $response["message"] = "Passwort falsch!";
		        echoResponse(400, $response);
		        $app->stop(); 
         }
          
      }
      else {
         $response["error"] = true;
		     $response["message"] = "E-Mail Adresse unbekannt!";
		     echoResponse(400, $response);
		     $app->stop();   
      }   
	    
	    
	    
	 }
	 else {
	    $response["error"] = true;
		  $response["message"] = "Bitte E-Mail und Passwort eingeben!";
		  echoResponse(400, $response);
		  $app->stop();
   }
	

});




?>