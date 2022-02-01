$( "#CircleForm" ).validate({

});

function displayResults() {
    //if form is valid then make calculations
    if ($("#CircleForm").valid()) {
    
    document.getElementById("diameter").innerHTML = "";

    var radius; // string representation of radius
    var radiusfp; // floating point representation of radius
    var diameter; // floating point diameter
    var circumference; // fp circumference
    var area; // fp area
    var result; // displayable result

    // read in radius as string
    radius = document.getElementById("radius").value;

    //convert radius from string to floating point
    radiusfp = parseFloat( radius );

    //calculate diameter
    diameter = calcDiameter(radiusfp);

    //display diameter
    document.getElementById("diameter").innerHTML = diameter.toString();


    //calculate circumference
    circumference = calcCircumference(radiusfp);

    //display circumference
    document.getElementById("circumference").innerHTML = circumference.toString();

    //calculate area
    area = calcArea(radiusfp)

    //displauy area
    document.getElementById("area").innerHTML = area.toString();

    }
}

function calcDiameter (radiusvalue)
{
    return (radiusvalue) * (2);
}

function calcCircumference (radiusvalue)
{
    return (radiusvalue) * (2) * (Math.PI);
}

function calcArea (radiusvalue)
{
    return (Math.PI) * (radiusvalue) * (radiusvalue);
}

function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
