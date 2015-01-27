// main.js
//

(function(w, $, undefined) {
  "use strict";

	var Breaking = {

    visible: false,
    msg: $('#js-breaking-msg').text(),

    init: function() {
      Breaking.showAlertIn(3000);

      // Set msg to empty to prepare for typewriter
      Breaking.resetMsg();

      // Dismiss alert on close btn click and show again in 4s
      $('#js-breaking-close').on('click', function(e) {
        e.preventDefault();

        if(Breaking.visible) {
          Breaking.hideAlert();
          Breaking.showAlertIn(4000);
        }
      });
    },

    showAlertIn: function(ms) {
      setTimeout(Breaking.showAlert, ms);
    },

    showAlert: function() {
      $("#js-breaking").addClass('breaking--visible');
      Breaking.visible = true;

      Breaking.typeMsg();
    },

    hideAlert: function() {
      $("#js-breaking").removeClass('breaking--visible');
      Breaking.visible = false;

      Breaking.resetMsg();
    },

    typeMsg: function() {
      $('#js-breaking-msg').text( Breaking.msg );
    },

    resetMsg: function() {
      $('#js-breaking-msg').html("&nbsp;");
    }
  };

	$(Breaking.init);
})(this, jQuery);
