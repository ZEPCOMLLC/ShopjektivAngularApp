#!/usr/local/php5/bin/php

<?php        
          echo "<br /><br />Aktuellen Stand zu GitHub pushen!<br /><br />";
          
          echo "<br />git add -A: ";
          echo "<pre>";
          system('git add -A', $return);
          echo "</pre>";
          
          
          $datum = date("d.m.Y - H:i", time()) ." Uhr";
          echo "<br />git commit -m '" . $datum . "': ";
          echo "<pre>";
          system('git commit -m "' . $datum . '"', $return);
          echo "</pre>";
          
          
          echo "<br />git push -u origin master: ";
          echo "<pre>";
          system('git push -u origin master', $return);
          echo "</pre>";
          
          
          #mail('jens@shopjektiv.de', 'Cron TageWERK Git Push', $return);
          
          // Text-Format: UNIX ASCII
          // CHMOD: 755 
?>                 