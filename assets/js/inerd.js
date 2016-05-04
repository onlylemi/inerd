/**
 * inerd
 *
 * @author: onlylemi
 * @time: 2016-05-04 23:32
 */

$(document).ready(function(){


    // 提交 url 地址
  $("#sub-url-submit").click(function(){
    var type = $("#sub-url-type").val();
    var url = $("#sub-url").val();
    var finder = $("#sub-url-finder").val();

    /*if (url == ""){
        alert("请输入干货 URL 地址 ！！！");
        return;
    }

    if (finder == ""){
        alert("请输入您的大名，让我们知道您 ！！！");
        return;
    }*/

    var request_url = "http://localhost/inerd/public/sub_url.php?type="+type+"&url=("+url+")&finder="+finder+"&callback=?";
    $.getJSON(request_url, function(data){
      alert(data.state);
      //$("#sub-url-finder").val(data.state);
    });
  });









});