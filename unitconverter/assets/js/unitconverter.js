function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // From Value to be converted
        var FromValue = document.getElementById("FromValue").value;

        // From Unit
        // Get the value associated with the unit that was checked (cm, m, km, in, ft, yd, mi)
        var FromUnit;
        if (document.getElementById("fromcm").checked) {
            FromUnit = document.getElementById("fromcm").value;
        }
        if (document.getElementById("fromm").checked) {
            FromUnit = document.getElementById("fromm").value;
        }
        if (document.getElementById("fromkm").checked) {
            FromUnit = document.getElementById("fromkm").value;
        }
        if (document.getElementById("fromin").checked) {
            FromUnit = document.getElementById("fromin").value;
        }
        if (document.getElementById("fromft").checked) {
            FromUnit = document.getElementById("fromft").value;
        }
        if (document.getElementById("fromyd").checked) {
            FromUnit = document.getElementById("fromyd").value;
        }
        if (document.getElementById("frommi").checked) {
            FromUnit = document.getElementById("frommi").value;
        }
        
        // To Unit
        // Get the value associated with the unit that was checked (cm, m, km, in, ft, yd, mi)
        var ToUnit;
        if (document.getElementById("tocm").checked) {
            ToUnit = document.getElementById("tocm").value;
        }
        if (document.getElementById("tom").checked) {
            ToUnit = document.getElementById("tom").value;
        }
        if (document.getElementById("tokm").checked) {
            ToUnit = document.getElementById("tokm").value;
        }
        if (document.getElementById("toin").checked) {
            ToUnit = document.getElementById("toin").value;
        }
        if (document.getElementById("toft").checked) {
            ToUnit = document.getElementById("toft").value;
        }
        if (document.getElementById("toyd").checked) {
            ToUnit = document.getElementById("toyd").value;
        }
        if (document.getElementById("tomi").checked) {
            ToUnit = document.getElementById("tomi").value;
        }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires FromValue, FromUnit, ToUnit */
        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("fromcm").checked = false;
    document.getElementById("fromm").checked = false;
    document.getElementById("fromkm").checked = false;
    document.getElementById("fromin").checked = false;
    document.getElementById("fromft").checked = false;
    document.getElementById("fromyd").checked = false;
    document.getElementById("frommi").checked = false;
    document.getElementById("tocm").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("tokm").checked = false;
    document.getElementById("toin").checked = false;
    document.getElementById("toft").checked = false;
    document.getElementById("toyd").checked = false;
    document.getElementById("tomi").checked = false;
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});