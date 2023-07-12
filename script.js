$(document).ready(function(){
   
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var currentHour = dayjs().hour(); // gets current hour in 24hr format

  $(".row.time").each(function() {
    var blockHour = $(this).data("hour"); // get hour from data-hour attribute
    var textareaElement = $(this).find("textarea"); // find the textarea element

    if (blockHour == currentHour) {
      textareaElement.val("This is the current hour");
      textareaElement.removeClass("past future"); // remove past and future classes
      textareaElement.addClass("present"); // add present class for current hour
    } else if (blockHour < currentHour) {
      textareaElement.val("");
      textareaElement.removeClass("present future"); // remove present and future classes
      textareaElement.addClass("past"); // add past class for past hours
    } else {
      textareaElement.val("");
      textareaElement.removeClass("past present"); // remove past and present classes
      textareaElement.addClass("future"); // add future class for future hours
    }
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  //Gets today's date
  var today = dayjs(); 
  //Marks the current date at the top of the page
  $("#currentDay").text(today.format("MMM D, YYYY")); 

});





