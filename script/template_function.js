
function template_video_list(data){

    var html = readFile("../components/video_list.html?v=1.1");
    var render = template.compile(html);
    return  render(data);

}


function readFile(path){

  var html;
  $.ajax({
        type : "get",
        url : path,
        async : false,
        success : function(item){
          html = item;
        }
      });

   return html;


}
