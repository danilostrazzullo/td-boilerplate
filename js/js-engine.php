<?php
    if(extension_loaded('zlib')){
        ob_start('ob_gzhandler');
    }
    header("Content-type: text/javascript");
    
    require_once('engine/jquery.js');
    require_once('engine/jquery-ui.js');
    require_once('engine/jquery.ui.touch.min.js');
    
    $plugins = glob('plugins/*.js');
    foreach ($plugins as $file){
        require_once($file);
    }
    
    require_once('core.js');
    
    if(extension_loaded('zlib')){
        ob_end_flush();
    }
        
    exit();
?>