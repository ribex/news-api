$(document).ready(function() {
    var url =  "https://newsapi.org/v1/sources";
    // var category = ;
    var data = {language: "en", country: "us"};

    $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response){
            console.log(response);
        }
    });
});