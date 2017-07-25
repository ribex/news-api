$(document).ready(function() {
    var url =  "https://newsapi.org/v1/sources";
    var data = {language: "en", country: "us"};

    $.ajax({
        url: url,
        data: data,
        type: "GET",
        success: function(response){
            var sources = response.sources;
            // console.log(sources);
            var html = "<select class='form-control' id='source'>";
            $.each(sources, function(index, source) {
                // console.log(index, source.name);
                html += "<option value='" + index + "'>"+ source.name +"</option>";
            });
            html += "</select>";
            $(".form-group").html(html);
            }
        
        
    });

    

    

});

