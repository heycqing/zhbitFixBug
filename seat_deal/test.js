
        var globalId=0;
        var globalseatid  =0;
       	function seatOnclick(id){
       		globalseatid = id;
       		var seatid   = 'seat'+id;
       		var lastseat = 'seat'+globalId;
               var imgObj   = document.getElementById(seatid);
               
            //    /../tp/public/static/images/seat.png
			if(imgObj.getAttribute("src",1)=="/../tp/public/static/images/seat.png"){
				imgObj.src="/../tp/public/static/images/noseat.png";
			}else if(imgObj.getAttribute("src",1)=="/../tp/public/static/images/selected.png"){
                imgObj.src="/../tp/public/static/images/selected.png"; 
			}else{
				imgObj.src="/../tp/public/static/images/seat.png";
			}
			if(globalId!=0){
				var lastObj  = document.getElementById(lastseat);
				if(lastObj.getAttribute("src",1)=="/../tp/public/static/images/noseat.png"){
					lastObj.src="/../tp/public/static/images/seat.png";
				}
			}
			globalId  = id;
			$("#seat-id").text(id);
           }
           

    $(".layui-btn").click(function(){
        var myseatid  = $("#seat-id").text();
        $.ajax({
            // https://zxs.lib.zhbit.com/tp/index.php/index/select/seat/id/702.html
            // https://zxs.lib.zhbit.com/tp/index.php/index/Select/seatSure
            url:'/../tp/index.php/index/Select/seatSure',
            type:'POST',
            data:{
                seatid:myseatid,
                roomid:702,
                usage:1	   	 	},
        dataType:'JSON',
        success:function(res){
           if(res.code>0){
              layer.msg(res.message,{icon:1,time:2000},function(){
                 location.href='/../tp/index.php/index/Student/info67';
              });
           }else{
                  layer.msg(res.message,{icon:2,time:2000},function(){
                 return false;
              });
           }
        },
        error:function(){
           layer.msg('系统出错',{icon:5,time:2000},function(){
               return false;
           });
        }
        });
});