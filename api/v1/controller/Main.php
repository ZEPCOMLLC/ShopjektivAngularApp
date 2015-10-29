<?php



/**
  * 
  * 
  * http://krappmagazin.shopjektiv-entwicklung.de/api/v1
  *    
  * Parameter      
  * 
  * GET
  *     
  */ 
$app->get('/', function() use ($app) 
{    
  
  $response = array();
	
  $response['message'] = "Hallo!";
	$response['error'] = false;
	
  echoResponse(200, $response);
	
});







?>