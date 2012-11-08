 $('#AdminPage').live('pageshow', function(event) {
	 
 
	
    $('#select').bind('change', function(event) {
    	
    	 var s=$('#select').val();
    
    	
    if(s=="rush")
    	{
    	$(".myList ").html(" <ul data-theme='g' data-divider-theme='g' data-role='listview'  data-inset='true'><li  data-role='list-divider'>Manage Places</li><li><a href='#'>Add Place</a></li><li><a   href='#'>Edit Place</a></li><li><a   href='#'>Remove Place</a></li></ul>");
		 
			$(".myList").trigger("create");
    	}
    else
    	{
    	$(".myList ").html(" <ul data-theme='g' data-divider-theme='g' data-role='listview'   data-inset='true'><li  data-role='list-divider'>Manage Catagories </li><li><a href='addCat.html'>Add Category</a></li><li><a   href='editCat.html'>Edit Category</a></li><li><a   href='RemoveCat.html'>Remove Category</a></li></ul>");
		 
			$(".myList").trigger("create");
	 
    	}
 		 
});

  });