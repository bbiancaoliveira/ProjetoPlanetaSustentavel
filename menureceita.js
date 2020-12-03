$(document).ready(function(){
			   
	$('#link').on('change', function () {
		 var url = $(this).val(); 
		 if (url) { 
			 window.location.href =url;

		  }
		  return false;
		});
	 });