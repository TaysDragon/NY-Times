var queryURL="";
$(document).ready(function(){
  $("#articles").empty();

$("#clear").on("click", function(){
  $("#articles").empty();
  $("#endDate").val('');
  $("#endDate").empty();
  $("#startDate").val('');
  $("#searchTerm").val('');
  $("#searchTerm").empty();
  $("#numberOfRecords").val('');
});

    // Adding click event listen listener to all buttons
$("#submit").on("click", function(){
      // Grabbing and storing the data-animal property value from the button
      var searchTerm =$("#searchTerm").val();
      var startDate =$("#startDate").val().trim();
      
      var endDate =$("#endDate").val().trim();
      
      var resultsNum= $("#numberOfRecords").val();
     
     if(startDate.length!=8 || endDate.length!=8){

      $("#endDate").val('');
       $("#startDate").val('');
      $("#endDate").attr("placeholder", "please use format YYYYMMDD");
      $("#startDate").attr("placeholder", "please use format YYYYMMDD");
     
     }

      $("#articles").empty();
      defaultImage= "../assets/newspaper_default.jpg";

      
      queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      queryURL += '?' 

      if(parseInt(startDate)){
    
        if(parseInt(endDate)){

          // queryURL= queryURL + "&end_date=" + endDate;
          console.log(queryURL);
            queryURL += $.param({
            'api-key': "4d60e927ce784f368e7d0e246154de1f",
            'q': searchTerm,
            'begin_date': startDate,
            'end_date': endDate
            });
        }else{
          queryURL += $.param({
          'api-key': "4d60e927ce784f368e7d0e246154de1f",
          'q': searchTerm,
          'begin_date': startDate 
        });
        }
      }else if (parseInt(endDate)){
          // queryURL= queryURL + "&end_date=" + endDate;
          queryURL += $.param({
            'api-key': "4d60e927ce784f368e7d0e246154de1f",
            'q': searchTerm,
            'end_date': endDate
            });
          console.log(queryURL);
        }else{
      

       queryURL += $.param({
      'api-key': "4d60e927ce784f368e7d0e246154de1f",
      'q': searchTerm
      });
      }
      
      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.response;

          // Looping through each result item
          for (var i = 0; i < resultsNum; i++) {

            // Creating and storing a div tag
            var articleDiv = $("<div>");
            articleDiv.addClass("responses");
            articleDiv.addClass("card");
            articleDiv.addClass("col-md-4");

            var image=$("<img>");
            if(results.docs[i].multimedia &&results.docs[i].multimedia[1]){
            image.addClass("card-img-top");
            image.attr("src","https://www.nytimes.com/" + results.docs[i].multimedia[1].url)
            }else{
              image.addClass("card-img-top");
              image.attr("src", "./assets/newspaper_default.jpg");
            };
            var cardTop=$("<div class= 'card-block'>");

            var headline=$("<h2>").text(results.docs[i].headline.main);
            headline.addClass("card-title");
            console.log("headline: " +results.docs[i].headline.main);

            // Creating a paragraph tag with the result item's rating
            var byLine = $("<p>");
           
            if(results.docs[i].byline){
              byLine.addClass("card-text");
              byLine.text(results.docs[i].byline.original)
            }else{
              byLine.text("");

            }

            // Creating and storing an image tag
            var section = $("<p>").text(results.docs[i].section_name);
            section.addClass("card-text");
            console.log("section " + results.docs[i].section_name);

             var pubDate = $("<h4>").text(results.docs[i].pub_date);
            pubDate.addClass("card-text");
            console.log("pub date: " + results.docs[i].pub_date);

            // Setting the src attribute of the image to a property pulled off the result item
            var webURL = $("<h5>").text(results.docs[i].web_url);
            webURL.addClass("card-text");
            console.log("webURL:"+ results.docs[i].web_url);

           

            // Appending the paragraph and image tag to the animalDiv
            articleDiv.append(image, headline, byLine, section, pubDate, webURL);
           

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            
            $("#articles").append(articleDiv);
          }

        }).fail(function(err) {
        throw err;
        });
    
});
});


