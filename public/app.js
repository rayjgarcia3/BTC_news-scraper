$.getJSON("/news", function(data){
  for(i=0; i < data.length; i++){
    $("#reports").append("<li data-id=''" + data[i]._id + "'>'" + data[i].title + "<br />" + "<a href='" + data[i].link + "'>" + "Click for More" + "</a>")
  }
});
