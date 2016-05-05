/**
 * inerd
 *
 * @author: onlylemi
 * @time: 2016-05-04 23:32
 */

$(document).ready(function() {


    // 提交 url 地址
    $("#sub-url-submit").click(function() {
        var type = $("#sub-url-type").val();
        var url = $("#sub-url").val();
        var finder = $("#sub-url-finder").val();

        if (url == "") {
            alert("\n\n请输入干货 URL 地址 ！！！\n\n");
            return;
        }

        if (!isURL(url)) {
            alert("\n\n别捣乱啊，输入正确的 URL 地址 ！！！\n\n");
            return;
        }

        if (finder == "") {
            alert("\n\n请输入您的大名，让我们知道您 ！！！\n\n");
            return;
        }

        var request_url = "http://onlylemi.com/inerd/public/sub_url.php?callback=?";
        // alert(request_url);
        $.getJSON(request_url, { "type": type, "finder": finder, "url": url }, function(data) {
            if (data.state == "exist") {
                alert("\n\n不好意思，您提交的资源链接已经存在了！！！\n\n");
            } else if (data.state == "success") {
                alert("\n\n非常感谢，您提交的资源我们已经收到！\n\n");
            } else if (data.state == "none") {
                alert("\n\n服务器正在维护中，请稍等！！！\n\n");
            }
        });
    });

    function isURL(url) {
        var regex = "((http|ftp|https)://)(([a-zA-Z0-9\\._-]+\\.[a-zA-Z]{2,6})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,4})*(/[a-zA-Z0-9\\&%_\\./-~-]*)?";
        var re = new RegExp(regex);
        if (re.test(url)) {
            return true;
        } 
        return false;
    }









});
