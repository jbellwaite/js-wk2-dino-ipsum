import { Copy } from './../js/scripts.js';

let displayData = function(results) {
  for(let i=0; i<25; i++) {
     $('.output2').append("<img src=" + results.data[i].images.original.url + ">");
 }
};

$(document).ready(function() {

  $("form#generator").submit(function(event) {
    let search = $("#search").val();
    event.preventDefault();

    let newSearch = new Copy(search);
    let apiResults = newSearch.apiConstructor(displayData);
  });

  $(".btn-error").click(function(event) {
    $('.output2').empty();
  });

});
