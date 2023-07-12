$(document).ready(function(){
   
var saveButtons = document.getElementsByClassName("saveBtn");
for (var i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", function() {
    var textareaElement = this.parentNode.querySelector("textarea"); // Get the corresponding textarea element
    var userInput = textareaElement.value; // Get the user input from the textarea
    var hourBlockId = this.parentNode.id; // Get the ID of the parent hour block

    localStorage.setItem(hourBlockId, userInput); // Save the user input to local storage
  });
}
 //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 //https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

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
  //https://api.jquery.com/removeclass/
  //https://api.jquery.com/addclass/
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  //Gets today's date
  var today = dayjs(); 
  //Marks the current date at the top of the page
  $("#currentDay").text(today.format("MMM D, YYYY")); 

});





