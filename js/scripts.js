var leapYear = function(year) {
 if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};





$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());


    var result = leapYear(year);


    if (isNaN(year)) {
      $(".year").text($("input#year").val());
      $(".not").text("not");
      $(".invalid").text("Please enter a year.");
    }

    else if (year <= 0) {
      $(".not").text("not");
      $(".invalid").text("Please be positive!");
    }

    else if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");

    } else {
      $(".not").text("");
    }

//    $(".year").text(year);
    $("#result").show();
    event.preventDefault();
  });
});
