<?php



/**
 * Echoing json response to client
 * @param String $status_code Http response code
 * @param Int $response Json response
 */
function echoResponse($status_code, $response, $mask = JSON_UNESCAPED_SLASHES) {
    
    $app = \Slim\Slim::getInstance();
    
    // Http response code
    $app->status($status_code);
 
    // setting response content type to json
    $app->contentType('application/json');
 	
    $hi = json_encode($response, $mask);
    echo $hi;
}
 



?>