$(document).ready(function() {

  var letters = $('.letter');
  $(letters[0]).addClass('active'); // Make the first letter active by default
  setButtonHeight(); // Adjust button positioning based on the content height

  // Forward button click event
  $('.next p').click(function() {
    var active = $('.active').next(); // Get the next letter

    // Remove 'active' class from all letters
    for (var i = letters.length - 1; i >= 0; i--) {
      $(letters[i]).removeClass('active');
    }

    // If there is a next letter, make it active, else loop back to the first letter
    if ($(active).hasClass('letter')) {
      $(active).addClass('active');
    } else {
      $(letters[0]).addClass('active');
    }
  });

  // Back button click event
  $('.backi p').click(function() {
    var active = $('.active').prev(); // Get the previous letter

    // Remove 'active' class from all letters
    for (var i = letters.length - 1; i >= 0; i--) {
      $(letters[i]).removeClass('active');
    }

    // If there is a previous letter, make it active, else loop to the last letter
    if ($(active).hasClass('letter')) {
      $(active).addClass('active');
    } else {
      $(letters[letters.length - 1]).addClass('active');
    }
  });

  // Function to adjust the button's vertical position based on the letter wrapper height
  function setButtonHeight() {
    var height = $('.letter-wrapper').height();
    $('div.backi p').css({ top: height / 2 + 'px' });
    $('div.next p').css({ top: height / 2 + 'px' });
  }

});
