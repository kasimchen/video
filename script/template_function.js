function template_video_list(data) {

    if (localStorage.video_list_temp) {
        var html = localStorage.video_list_temp;
    } else {
        var html = readFile("../components/video_list.html?v=" + Math.random());
    }
    var render = template.compile(html);
    return render(data);

}

function template_video_detail(data) {

    if (localStorage.video_detail_temp) {
        var html = localStorage.video_detail_temp;
    } else {
        var html = readFile("../../components/video_detail.html?v=" + Math.random());
    }
    var render = template.compile(html);
    return render(data);

}


function readFile(path) {

    var html;
    $.ajax({
        type: "get",
        url: path,
        async: false,
        success: function(item) {
            html = item;
        }
    });
    return html;


}
