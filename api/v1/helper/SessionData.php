<?php
  class SessionData{
	    
	    public $rootDir = "";
	    public $user_id = "";
      
      
      static private $instance = null;
	
	
	      static public function getInstance()
	      {
		         if (null === self::$instance) {
			             self::$instance = new self;
			         }
			         return self::$instance;
		     }
			
			     private function __construct(){}
			     private function __clone(){}
				
        
        public function getRootDir() {
					return $this->rootDir;
				}
				
        public function setRootDir($rootDir) {
					$this->rootDir = $rootDir;
					return $this;
				}
				
				
				public function getUserId() {
					return $this->user_id;
				}
				
        public function setUserId($id) {
					$this->user_id = $id;
					return $this;
				}
				
				
	
	
	
		}
			
 ?>