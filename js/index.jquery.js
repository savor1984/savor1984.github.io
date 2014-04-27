$(function() {
  $('#ei-slider').eislideshow({
                              easing		: 'easeOutExpo',
                              titleeasing	: 'easeOutExpo',
                              titlespeed	: 1200
                              });
  });
  
  $("#pg").click(function(){
	  var page = $(this).attr('alt');
	  var dir = 0;
	  if(page=='pg1'){
		  dir = 10;//设置目录下照片张数
	  }
	  $("#main").load(page+".html",function(responseTxt,statusTxt,xhr){
		  $("#main").fadeIn('slow');
		  if(statusTxt=="success"){
		  	
			
			function rnd(start,end){
			    return Math.floor(Math.random() * (end - start) + start);
			}
			
			
			
			for(var i = 1;i <= dir;i++){
				$("#tiles").append('<li id="photo"><a href="images/scale/'+page+'/large/'+i+'.jpg"  title=""><img src="images/scale/'+page+'/small/'+i+'.jpg" style="width:200px;max-height:500px;"></a></li>');
			}
			
			setupZoom();//加载弹出图片方法
			
	        (function ($){
			 var handler = $('#tiles li');

	         handler.wookmark({
	           // Prepare layout options.
	           autoResize: true, // This will auto-update the layout when the browser window is resized.
	           container: $('#mainpg1'), // Optional, used for some extra CSS styling
	           offset: 5, // Optional, the distance between grid items
	           outerOffset: 10, // Optional, the distance to the containers border
	           itemWidth: 210 // Optional, the width of a grid item
	         });

	       // Capture clicks on grid items.


	     	})(jQuery);
		  }
		  
		 
		        
	      if(statusTxt=="error")
		  
	        alert("Error: "+xhr.status+": "+xhr.statusText);
	    });
  });