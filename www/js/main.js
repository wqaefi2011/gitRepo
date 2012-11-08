
$(document).bind("mobileinit", function () {
	 if (navigator.userAgent.indexOf("Android") != -1)
     {
     $.mobile.defaultPageTransition = 'none';
     $.mobile.defaultDialogTransition = 'none';
     }
	 alert("mobileinit");
  $.mobile.hashListeningEnabled = false;
    $.mobile.ajaxEnabled = false;
});
/*
 $(document).ready(function() {
	 alert("document ready");
	    $('form, a').removeAttr('data-ajax');
	    $('form, a').attr('data-ajax', false);
	});
	*/     