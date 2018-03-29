$(document).ready(function(){
        $.getJSON("http://10.0.0.185:8081/getuserdetails/1", function(result){
                $("#name").append(result.name);
				$("#pw").append(result.password);
				$("#prof").append(result.profession);
        });
    });

