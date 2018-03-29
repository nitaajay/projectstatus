//------------------------------------------------------------------------------
// This JS uses updateCRUD.js for calling the POST CRUD API
//------------------------------------------------------------------------------

//window.localStorage.clear();

//$body = $("body");

$(document).ready(function () {

    $("#btnlogin").click(function () {
        //alert ("in login" + $("#username").val() + $("#password").val());

        //retrieve status reported for last month to set some default values
        var conditionclause = new Object;
        var filterprojectstatus = new Object;
        filterprojectstatus.email = $("#username").val();
        filterprojectstatus.password = $("#password").val();
        conditionclause.where = filterprojectstatus;

        uri = getbaseaddress() + "managers?filter=" + JSON.stringify(conditionclause);
        console.log (uri);
        var retstatusobj = new Object;
        retstatusobj = retrieveusersGET (uri);
        if (retstatusobj.objectempty == 1){
            //alert ("Authentication failed");
           $("#msg").text("Invalid username or password");
        } 
        else {
            // Set local storage with user info
            //alert ("to: " + retstatusobj.name);
            sessionStorage.setItem("name", retstatusobj.name);
            sessionStorage.setItem("email", retstatusobj.email);
            sessionStorage.setItem("managerid", retstatusobj.managerid);
            sessionStorage.setItem("position", retstatusobj.position);
            sessionStorage.setItem("id", retstatusobj.id);
            //console.log ("designation: " + JSON.stringify(retstatusobj));
            //alert ("designation: " + retstatusobj.position);
            /* if (retstatusobj.position == "Chief") {
                window.location.href = "managerdashboard.html";
            } else {
                window.location.href = "dashboard.html";
            } */
            window.location.href = "dashboard.html";
            //alert ("Authentication passed");
        }
    });
});