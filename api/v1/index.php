<?php
   // Config Files 
   require __DIR__.'/config/database.php';  
    
   // Slim Framework einbinden
   require '../vendor/Slim/Slim.php';
    
   
   // Slim Autoloader
   \Slim\Slim::registerAutoloader();
    
    
   // Idiorm ORM einbinden
   require '../vendor/Idiorm/idiorm.php';
   
   // Helper
   foreach (glob(__DIR__.'/helper/*.php') as $helperFile) {
      require_once $helperFile;
   }
  

   // App initialisieren 
   $app = new \Slim\Slim(array(
      'debug' => true
   ));
   
   
   // Controller einbinden
   foreach (glob(__DIR__.'/controller/*.php') as $controllerFile) {
      require_once $controllerFile;
   }
    
   if(!(SessionData::getInstance()->getRootDir() == __DIR__)){
   		SessionData::getInstance()->setRootDir(__DIR__);
   }
      
   $app->run();        

        
?>