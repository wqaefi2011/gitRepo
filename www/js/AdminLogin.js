 var currAdminId;
 var n;
 var p;
$('#adminLogin').live('pageshow', function(event) {
	 $('#Status').text("");
       function clear()
       {
    	   document.getElementById('name').value ="";
  		 document.getElementById('password').value ="";
       }
	 $(function(){

	        $('form').submit(function(){
	  
	        	    n= document.getElementById('name').value;
	        	     p= document.getElementById('password').value;
	        	 
	        	  if(n=="" || p=="")
	        		  {
	        		  $('#Status').text(" * Please fill all the fields");
	        		 // alert("Please fill all the fields");
	        		  clear()
	        		   
	        	      return false;
	        		  $("#adminLogin").trigger("create"); 
	        		 
	        		  }        	  
	            var postData = $(this).serialize();
	            
	            $.ajax({
	                type: 'POST',
	                data: postData,	                
	                url: 'http://mytour.eu5.org/adminLogin.php',
	                success: function(Data){
	                	currAdminId=Data;
	             
	                	if(Data != "Wrong Username or Password")
	                     {
	                	 
	                		$.mobile.changePage('adminMain.html', {
	                            reloadPage: true
	                        }, {
	                            allowSamePageTranstion: true
	                        }, {
	                            transition: 'none'
	                        });
	                     }
	                	else
	                		{
	                		$('#Status').text(" * You entered Wrong user name or password ");
	                		//alert("You entered Wrong user name or password");
	                		
	                		clear();
	                		
	                		}
	                  
	                },
	                error: function(){
	                    console.log(data);
	                    alert('There was an error in connecting with the database please check internet connection');
	                }
	            });
	            
	            return false;
	        });
	    });
                                     
	
});