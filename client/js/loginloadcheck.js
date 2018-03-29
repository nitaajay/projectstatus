$(document).ready(function(){
    // check if this page was displayed due to an error or logout event
    if (returnQuerystringID() === "err"){
       $("#msg").text("User logged out or session expired");
    } 
});

function returnQuerystringID (){
    
    //alert ("in return function:" + $.getUrlVar('id'));
    return $.getUrlVar('id');        
}