// main.js
//

(function(w, $, undefined) {
  "use strict";

	var Breaking = {

    visible: false,

    init: function() {
      Breaking.showAlertIn(3000);

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
    },

    hideAlert: function() {
      $("#js-breaking").removeClass('breaking--visible');
      Breaking.visible = false;
    }
  };

	$(Breaking.init);
})(this, jQuery);
