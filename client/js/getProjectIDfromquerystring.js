$(document).ready(function(){
    
            // Getting URL var by its nam
            var projectid = $.getUrlVar('id');
    
            //alert (managerid);
    
            //$("#managerid").append(managerid);
    
    
    });

    function returnQuerystringID (){
            
            //alert ("in return function:" + $.getUrlVar('id'));
            return $.getUrlVar('id');        
    }