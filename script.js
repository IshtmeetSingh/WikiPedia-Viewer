$(document).ready(function(){
  $('button').mouseover(function(){
    $(this).css('background-color','green');
  });
  $('button').mouseout(function(){
    $(this).css('background-color','blue');
  });
  $('#search').click(function(){

    var searchTerm= $('#searchTerm').val();
    var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
  $.ajax({
    type:"GET",
    url:url,
    async: false,
    dataType: "json",
    success: function(data){
      $('#output').html(' ');
      $('#from-control').val(' ');
    for(var i=0; i<data[1].length; i++){

      $('#output').prepend("<li><a href= "+data[3][i]+" target='blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
          
          }
    },
    error: function(errorMessage){
      alert('Error');
    }
  });
  });    
  
});