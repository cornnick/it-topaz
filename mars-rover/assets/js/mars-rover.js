async function GetPhotos() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");

    // Validate all of the form elements
    form.validate();

    // If all of the form elements are valid, then get the form values
    if (form.valid()) {

        var apiKey = 'hSn69UddF27nacAgOwK3lXHi4UflIxltTQsnQDJK';

        document.addEventListener('DOMContentLoaded', submitButtonsReady);

        function submitButtonsReady() {
            document.getElementById('search').addEventListener('click', function (event) {
                var request = new XMLHttpRequest();
                var date = document.getElementById('photoDate').value;
                 //change date format using datejs
                 date.parse(photoDate).toString("YYYY-MM-DD");
                var roverName = "";

                var buttonStatus1 = document.getElementById('curiosity').checked;
                var buttonStatus2 = document.getElementById('opportunity').checked;
                var buttonStatus3 = document.getElementById('spirit').checked;

                if (buttonStatus1 === true) {
                    roverName = "curiosity";
                }
                else if (buttonStatus2 === true) {
                    roverName = "opportunity";
                }
                else {
                    roverName = "spirit";
                }
               

                request.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName + '/photos?earth_date=' + date + '&api_key=' + apiKey, true);
                request.addEventListener('load', function () {
                    if (request.status >= 200 && request.status < 400) {
                        var response = JSON.parse(request.responseText);

                        document.getElementById('imageStatus').textContent = 'Found';
                        document.getElementById("image" + i).src = response.photos[i].img_src;
                        document.getElementById('roverCaption').textContent = response.photos[i].rover.name;
                        document.getElementById('landingCaption').textContent = response.photos[i].rover.landing_date;
                        document.getElementById('endingCaption').textContent = response.photos[i].rover.max_date;

                    }
                    else {
                        console.log("Error in network request: " + request.statusText);
                    }
                });
                document.getElementById('imageStatus').textContent = 'Please try a different date or check your syntax!';
                request.send(null);
                event.preventDefault();
            })

        }


        function ClearForm() {
            document.getElementById("curiosity").value = "";
            document.getElementById("opportunity").value = "";
            document.getElementById("spirit").value = "";
            document.getElementById("photoDate").value = "";
            document.getElementById("photoDateError").value = "";



            /* Ugly Code to Erase Canvas */
            var canvas0 = document.getElementById("chartjs-0");
            var context0 = canvas0.getContext('2d');
            context0.clearRect(0, 0, canvas0.width, canvas0.height);
            var canvas1 = document.getElementById("chartjs-1");
            var context1 = canvas1.getContext('2d');
            context1.clearRect(0, 0, canvas1.width, canvas1.height);

        }
    }

}
