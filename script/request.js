
function get_video_list(last_time,callback){

  console.log(api_host+"/api/video/index?last_time="+last_time);
  $.ajax({
        type : "get",
        url : api_host+"/api/video/index?last_time="+last_time,
        async : true,
        success : function(data){
            console.log(data.data.last_time);
            callback(data.data);
        },
        error:function(error){
          console.log(error.statusText);
        }
      });
}


function get_video_detail(id,callback){

  $.ajax({
        type : "get",
        url : api_host+"/api/video/show/"+id,
        async : true,
        success : function(data){
            callback(data.data);
        },
        error:function(error){
          console.log(error.statusText);
        }
      });
}
