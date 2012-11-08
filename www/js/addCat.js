var catName2;
$('#AddCat').live('pageshow', function(event) {
               
                      
                 
      		 
                	        $('form').submit(function(){
                	        	 
                	        
                	        	 catName2=document.getElementById("catName2").value;
                	        	 if(catName2=="")
              	        		  {
                	        		 $('#Status2').text(" * The catagory name is mandatory");
              	        		  //alert("The catagory name is mandatory");
              	        		 flag = true;
              	        		 return false;
              	                  $("#AddCat").trigger("create");
              	        		  }
                	        	uploadData(catName2);
                	        	
                	            document.getElementById("url").value="http://mytour.eu5.org/uploads/"+catName2+".jpg";
                	            document.getElementById("adId").value=currAdminId;
                	           
                	            document.getElementById("Prev").value=catName2;
                	         
                	           var postData = $(this).serialize();
                	        
                	      
                	        	// uploadData(catName);
                	         
                	            $.ajax({
                	                type: 'POST',
                	                data: postData,
                	                
                	            
                	             
                	                url: 'http://mytour.eu5.org/addcat.php',
                	                success: function(data){
                	                	$('#Status2').text(data);
                	                	//alert(data);
                	                    console.log(data);
                	                  
                	                    $.mobile.changePage( "adminMain.html", {
                	                        transition: "fade",
                	                        reverse: false,
                	                        changeHash: false
                	                    });        
                	                    
                	                },
                	                error: function(){
                	                    console.log(data);
                	                    alert('There was an error adding your catagory');
                	                }
                	                 });
                	            });
                	           
                	            
                	       
    	                    
                     });

function selectPicture() {
	 
        navigator.camera.getPicture(
            function(uri) {
                var img = document.getElementById('camera_image');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
                document.getElementById('camera_status').innerHTML = "Success";
            },
            function(e) {
                console.log("Error getting picture: " + e);
                document.getElementById('camera_status').innerHTML = "Error getting picture.";
            },
            { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
    };
    
    
  
    
        function uploadData(Name) {
    
        	
        	 var img = document.getElementById('camera_image');
             var imageURI = img.src;
              
             if (!imageURI || (img.style.display == "none")) {
            	 $('#Status2').text("select picture from library first.");
                //alert("select picture from library first.");
                 flag = true;
                 return false;
	        		  
             }
             
        	 
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=Name+".jpg";
      
            options.mimeType="image/jpeg";
 
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://mytour.eu5.org/upload2.php", win, fail, options);
            $.mobile.showPageLoadingMsg();
            function win(r) {
            	$.mobile.hidePageLoadingMsg()
                
            }

            function fail(error) {
                alert("An error has occurred: Code = " = error.code);
            }
            $("#AddCat").trigger("create");
        }
 
        
        