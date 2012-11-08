 var serviceURL = "http://mytour.eu5.org/";
 
 var cats=[]
 var currCatName;
 var catChange;
 var image;
 var imageFlag=0;
 var value;
 var trigger=0;
$('#EditCat').live('pageshow', function(event) {
	$('input[id=catName]').hide();
	$('input[id=adminName]').hide();
	  $('#submit').parent().hide();
	  
	  
	 
	

 
	
	//document.getElementById("mySelector").selectedIndex = 2/*selected value*/; 

	
                	getCatList();      
                	            
                	$("#mySelector").bind("change", function() { 
                		  value=$(this).attr('value');
                		 $('#mySelector').selectmenu('close');
                		
                		    
                		    //var catName= document.getElementById('catName');
              			   
            				  
                		 //  catName.style.visibility = "visible";
                		    $('input[id=catName]').show();
                		    $('input[id=adminName]').show();
                		    
                	 
                			 
               			   
             				  
                		 
                			 var change= document.getElementById('change');
                 			   
            				  
                			 change.style.visibility = "visible";
                			   $('#submit').parent().show();
                			    
                   			   
              				  
                  			 
                			   var l1 = document.getElementById('l1');
                			   
                				  
                		          l1.style.visibility = "visible";
                                   var l2 = document.getElementById('l2');
                			   
                				  
                		          l2.style.visibility = "visible";
                			 
                		    
                		printData(value);
      	           
                		 
             			$('#mySelector').selectmenu('refresh', true);
             		    $('#mySelector').selectmenu();
             		  $("#EditCat").trigger( "create");
      	          
           });
                	 
                	catChange=$('input[id=catName]').val();
                	$("#catName").change(function (){
                	 
                		trigger=1;
                		catChange=$('input[id=catName]').val();
                		 
                	});
                	
                	 $('form').submit(function(){
                		 catChange=document.getElementById("catName").value;
        	        	  
                		 if(catChange=="")
      	        		  {
                	 
                		   $('#Status3').text(" The catagory name is mandatory");
      	        	 
      	        		  flag = true;
      	                  return false;
      	        		  
      	        		  }    	                 		    
                		 else if(imageFlag==1 && trigger ==1)
  	        	        {
       	        	    removeCat();
       	        		removePhoto();
       	        	  
  	        	        updateData(catChange);
  	        	        document.getElementById("url2").value="http://mytour.eu5.org/uploads/"+catChange+".jpg";
     	                document.getElementById("adId2").value=currAdminId;
     	                document.getElementById("Prev2").value=value;
     	          
     	          
     	          // var ad=document.getElementById("adId").value;
     	        
     	                var postData = $(this).serialize();
     	             
     	        	    updateInfo(postData);
     	        	 
  	        	        }	     	        	 
       	        	    else if(imageFlag==1)
       	        	    	{
       	        	         	 
       	        	    	removePhoto();
          	        	 
  	        	            updateData(catChange);
  	        	         
  	        	              
                			 }
                		 else if(trigger == 1){
                			  removeCat();
                			 
        	        	     document.getElementById("url2").value="http://mytour.eu5.org/uploads/"+catChange+".jpg";
           	                document.getElementById("adId2").value=currAdminId;
           	                document.getElementById("Prev2").value=value;
           	          
           	          
           	          // var ad=document.getElementById("adId").value;
           	        
           	                var postData = $(this).serialize();
           	         
           	        	    updateInfo(postData);
           	        	 
                		 }
                    	 else
                    		 {
                    		 $('#Status3').text("You changed nothing to be updated");
                    		  
                    		 $("#EditCat").trigger( "create");  
                    		 }
                	  
})
                	 
})

function printData(value)
{
	 
    for(i=0;i<cats.length;i++)
	   {
	   var name=cats[i].catName;
	   if(name==value)
		   {
		   currCatName=cats[i].catName;
		   
		   $('input[id=adminName]').val(cats[i].catAdmin);
		   $('input[id=adminName]').textinput('disable');
		 
		   $('input[id=catName]').val(cats[i].catName);
		   var img = document.getElementById('catImage');
		   
		  
          img.style.visibility = "visible";
          
          
          img.style.display = "block";
          
          
           
          
         
           
          $("#catImage").attr('src',cats[i].catImage + '?' + (new Date()).getTime());
		 
		
		  
	 
 
	 
		   }
	 
      
	   
	   }
 
	}
 
function getCatList() {
	var counter=0;
 
	$.getJSON(serviceURL + 'getCats.php', function(data) {
		 
		catNames= data.items;
		 
		$.each(catNames, function(index, cat) {
			 
			cats[counter]={catName:cat.catName, catImage:cat.catImage, catId:cat.catId,catAdmin:cat.userName}
			  
		       
			$('#mySelector').append('<option value="'+cat.catName+'">'+cat.catName+'</option>').selectmenu("refresh");
			 
			 $('#mySelector').selectmenu('refresh', true)
			counter++;
		});
	 
	});
	
}

function changePicture() {
	imageFlag=1;
	 
    navigator.camera.getPicture(
        function(uri) {
            var img = document.getElementById('catImage');
            
       
            img.src = uri;
            image=uri;
            
           
        },
        function(e) {
            console.log("Error getting picture: " + e);
            document.getElementById('camera_status').innerHTML = "Error getting picture.";
        },
        { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
};
function updateData(catChange) {
 
	
	// var img = document.getElementById('catImage');
    var imageURI = image;
    
  
 
    if (!imageURI) {
    	 $('#Status3').text("select picture from library first.");
       
        flag = true;
             return false;
   		  
    }
    
	 
   var options = new FileUploadOptions();
   options.fileKey="file";
   options.fileName=catChange+".jpg";
 
   options.mimeType="image/jpeg";

   var params = new Object();
   params.value1 = "test";
   params.value2 = "param";
   
   options.params = params;
   options.chunkedMode = false;

   var ft = new FileTransfer();
   ft.upload(imageURI, "http://mytour.eu5.org/upload2.php", win, fail, options);
   
 
   function win(r) {
	 
	   $("#EditCat").trigger( "create");  
	   
	}

	function fail(error) {
	   alert("An error has occurred: Code = " = error.code);
	}
	$('#mySelector').selectmenu('refresh', true);
    $('#mySelector').selectmenu();
	$("#EditCat").trigger( "create");  
}

function removeCat()
{
 
			 
		var string = 'name='+ currCatName ;
	 
		$.ajax({
		   type: "POST",
		   url: serviceURL+"deleteCat.php",
		   data: string,
		   cache: false,
		   success: function(){
		   
		    }
		,
	    error: function(){
	    	 $('#Status3').text('There was an error deleting your catagory');
	       
	        }
		 
	 
			
		 
			 });	
	
	 
	}
function removePhoto()
{ 
	
			 
		var string = 'name='+ currCatName ;
         
		$.ajax({
		   type: "POST",
		   url: 'http://mytour.eu5.org/deletePhoto.php',
		   data: string,
		   cache: false,
		   success: function(){
		 
		    }
		,
	    error: function(){
	    	 $('#Status3').text('There was an error deleting your photo');
	         
	        }
		 
	 
			
		 
			 });	
		  
		$('#mySelector').selectmenu('refresh', true);
	    $('#mySelector').selectmenu();
	    $("#EditCat").trigger( "create");  
	 
	}
function updateInfo(postData)
{
	 
  	  
  	  
    


           
      
      $.ajax({
          type: 'POST',
          data: postData,
          
         
       
          url: 'http://mytour.eu5.org/addcat.php',
          success: function(data){
       
           
           $('#Status3').text("Your catagory was successfully updated");
             
          },
          error: function(){
              console.log(data);
              $('#Status3').text('There was an error updating your catagory');
 
          }
   
      });
  	imageFlag=0;
  	trigger=0;
  	$('#mySelector').selectmenu('refresh', true);
    $('#mySelector').selectmenu();
     $("#EditCat").trigger( "create");        
	}