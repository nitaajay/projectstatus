$(document).ready(function(){
    
            // Getting URL var by its nam
            var managerid = $.getUrlVar('id');
    
            //alert (managerid);
    
            $("#managerid").append(managerid);
    
    
    });

    function returnQuerystringID (){
            
            return $.getUrlVar('id');        
    }