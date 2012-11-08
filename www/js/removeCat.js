 var serviceURL = "http://mytour.eu5.org/";
 var cats2=[]
  
$('#RemoveCat').live('pageshow', function(event) {
	
	$('input[id=catName3]').hide();
	$('input[id=adminName2]').hide();
	  $('#submit2').parent().hide();
	  
	  
	 
	

 
	
	//document.getElementById("mySelector").selectedIndex = 2/*selected value*/; 

	
                	getCatList2();      
                	            
                	$("#mySelector2").bind("change", function() { 
                		  value=$(this).attr('value');
                		  currCatName=value;
                		  $('#mySelector2').selectmenu('close');
                		         		    
                		 		    $('input[id=catName3]').show();
                		    $("#catName3").prop("readonly",true);
                		    $('input[id=adminName2]').show();
                		    $("#adminName2").prop("readonly",true);
                			   $('#submit2').parent().show();
                			    
                   			   
              				  
                  			 
                			   var l3 = document.getElementById('l3');
                			   
                				  
                		          l3.style.visibility = "visible";
                                   var l4 = document.getElementById('l4');
                			   
                				  
                		          l4.style.visibility = "visible";
                			 
                		    
                		printData2(value);
      	           
                		 
             			$('#mySelector2').selectmenu('refresh', true);
             		    $('#mySelector2').selectmenu();
             		  $("#RemoveCat").trigger( "create");
      	          
           });
                	 
                	 
                	 
                	 $('form').submit(function(){
                	 
                		 
       	        	    removeCat();
       	        		removePhoto();
       	        		$('#mySelector2').selectmenu('refresh', true);
             		    $('#mySelector2').selectmenu();
             		   $('#Status4').text("The catagory has been deleted successfully");
             
             		   $("#RemoveCat").trigger('pagecreate');
             		   $("#RemoveCat").trigger( "create");
       	        		
       	        	
})
                	 
})

function printData2(value)
{
	 
    for(i=0;i<cats2.length;i++)
	   {
	   var name=cats2[i].catName;
	   if(name==value)
		   {
		   currCatName=cats2[i].catName;
		   
		   $('input[id=adminName2]').val(cats2[i].catAdmin);
		  // $('input[id=adminName]').textinput('disable');
		 
		   $('input[id=catName3]').val(cats2[i].catName);
		   var img = document.getElementById('catImage2');
		   
		  
          img.style.visibility = "visible";
          
          
          img.style.display = "block";
          
          
           
          
         
           
          $("#catImage2").attr('src',cats2[i].catImage + '?' + (new Date()).getTime());
		 
		
		  
	 
 
	 
		   }
	 
      
	   
	   }
 
	}
 
function getCatList2() {
	var counter=0;
 
	$.getJSON(serviceURL + 'getCats.php', function(data) {
		 
		catNames= data.items;
		 
		$.each(catNames, function(index, cat) {
			 
			cats2[counter]={catName:cat.catName, catImage:cat.catImage, catId:cat.catId,catAdmin:cat.userName}
			  
		       
			$('#mySelector2').append('<option value="'+cat.catName+'">'+cat.catName+'</option>').selectmenu("refresh");
			 
			 $('#mySelector2').selectmenu('refresh', true)
			counter++;
		});
	 
	});
	
}

 