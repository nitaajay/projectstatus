$(document).ready(function(){
        $.getJSON("../../data/employeedetailsdata.js", function(result){
                $("#first").append(result.firstname);
				$("#mi").append(result.middleinitial);
                $("#last").append(result.lastname);

				$("#address").append(result.address);
				$("#city").append(result.city);
				$("#zip").append(result.zipcode);

				$("#ueid").append(result.ueid);
				
				$("#dob").append(result.dob.substring(0,2) + '/' + result.dob.substring(2,4) + '/' + result.dob.substring(4,8));

				if (result.gender == "M") {
					$("#gender").append("MALE");
				}
				else
				{
					$("#gender").append("FEMALE");
				};

				$("#agency").append(result.agency_code);
				$("#unit").append(result.unit_code);
				$("#class").append(result.class_code);
				$("#psseq").append(result.psno_seq);

				$("#checksum").append(result.checksum);
        });
    });