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
            var html = "<select class='form-control' id='sourceId'>";
            $.each(sources, function(index, source) {
                // console.log(index, source.name);
                html += "<option value='" + source.id + "'>"+ source.name +"</option>";
            });
            html += "</select>";
            $(".form-group").html(html);
            }
        
        
    });

    $("#source").submit(function(event) {
        event.preventDefault();
        var id = $('#sourceId').val();
        var url = "https://newsapi.org/v1/articles";
        var data = {source: id, apiKey: "4264f6c6670848c3958a383f52213ef2", sortBy: "top"};
        $.ajax({
            url: url,
            data: data,
            type: "GET",
            success: function(response) {
                var articles = response.articles;
                // console.log(articles);
                var html = "<ul class='list-group'>";
                $.each(articles, function(index, article) {
                   html += "<li class='list-item'><a href=" + article.url + ">"+ article.title + "</a></li>"; 
                });
                html += "</ul>";
                $("#articles").html(html);
            }
        })
    });

    // link and description

});

