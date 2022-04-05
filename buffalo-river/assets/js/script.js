async function displayLevels() {
    "use strict";
        /* URL for AJAX Call */
        var myURL1 = "//waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055780,07055680&period=P7D&parameterCd=00065&siteStatus=active"
        /* Make the AJAX call */
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
               var value = [];
               

        }


        else {
            alert("Data Not Found - Status: " + msg1Object.status)
            return;
        }        
       

                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": currencyDate,
                        "datasets":[{"label":"One " + baseCurrency + " to " + convertTo,
                        "data": currencyValue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{
                            responsive: false,
                            maintainAspectRatio: true,
                            scales: {
                                yAxes: [
                                  {
                                    scaleLabel: {
                                      labelString: ' ' + convertTo,
                                      display: true,
                                    },
                                  },
                                ],
                              },
                            }
                        }
                );
            
        }
