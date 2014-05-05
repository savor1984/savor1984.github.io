$(function() {
  $('#ei-slider').eislideshow({
                              easing		: 'easeOutExpo',
                              titleeasing	: 'easeOutExpo',
                              titlespeed	: 1200
                              });
  });
  
  function rnd(start,end){
       return Math.floor(Math.random() * (end - start) + start);
  }
  

  
  $("#pg").click(function(){
      $("#main").hide();
	  $("#loadgif").show();
	  var page = $(this).attr('alt');
	  var dir = 0;
	  if(page=='pg1'){
		  dir = 10;//设置目录下照片张数
	  }
	  
	  //$('#preloader').after('<div id="preloader" style="visibility:hidden;"></div>').remove();
	  for(var i = 1;i <= dir;i++){
		  $("#preloader").append('<img src="images/scale/'+page+'/large/'+i+'.jpg">');
	  }
	  $("#main").ajaxStart(function(){
		  console.log("ajaxstart");
	      $("#main").hide();
		  $("#loadgif").show();
		  //$("#loadgif").append('<img src="images/ajaxloading.GIF"/>');
	    });
	
	  $("#main").ajaxComplete(function(){
		  console.log("ajaxend");
		  $("#loadgif").hide();
	      $("#main").show();
	  });
	  $("#main").load(page+".html",function(responseTxt,statusTxt,xhr){
		  
		  if(statusTxt=="success"){
			//$('#tiles').hide(); 
		  	
			for(var i = 1;i <= dir;i++){
				$("#tiles").append('<li id="photo"><a href="images/scale/'+page+'/large/'+i+'.jpg"  title=""><img src="images/scale/'+page+'/small/'+i+'.jpg" style="width:200px;max-height:500px;"></a></li>');
				
			}
			
			
			
			$('#tiles img').hide();
			var imgCount = $('#tiles img').length;
			var handler = $('#tiles li');
			$('#tiles img').each(function () {
				function imageLoading() {
					msg = "Image: " + this.src + "....done";
					//console.log(msg);
					$(this).fadeIn(2000);
					imgCount--;
					handler.wookmark({
	   	           	 // Prepare layout options.
	   	           		autoResize: true, // This will auto-update the layout when the browser window is resized.
	   	           		container: $('#mainpg1'), // Optional, used for some extra CSS styling
	   	           		offset: 5, // Optional, the distance between grid items
	   	           		outerOffset: 10, // Optional, the distance to the containers border
	   	           		itemWidth: 210 // Optional, the width of a grid item
	   	         	});
					

	   	       // Capture clicks on grid items.
		   
	   		     //$('#tiles').show();
					if(imgCount===0){
						console.log("all done");
						
					}
				}
				
				if($(this).complete){
					imageLoading.call(this);
				}else{
					$(this).one('load',imageLoading);
				}
			});
			
			
			setupZoom();//加载弹出图片方法
			//$('#tiles').fadeIn(2000);
  		  $("#loadgif").hide();
  	      $("#main").show();
		  }
		  if(statusTxt=="error")
		  	alert("Error: "+xhr.status+": "+xhr.statusText);
	    });
  });