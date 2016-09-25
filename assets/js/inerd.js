/**
 * inerd
 *
 * @author: onlylemi
 * @time: 2016-05-04 23:32
 */

$(document).ready(function() {

    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (window.location.hostname != "localhost") {
        if (isWeixin && window.location.hostname == "inerd.cc") {
            window.location.href = "http://inerd.onlylemi.com" + window.location.pathname;
        }
        if (!isWeixin && window.location.hostname == "inerd.onlylemi.com") {
            window.location.href = "http://inerd.cc" + window.location.pathname;
        }
    }
    // if (window.location.pathname == "/") {
    // 	document.title = "i ♥ nerd - " + $("#index-title").html().split('：')[1];
    // }

    // 提交 url 地址
    $("#sub-url-submit").click(function() {
        var type = $("#sub-url-type").val();
        var url = $("#sub-url").val();
        var finder = $("#sub-url-finder").val();

        if (url == "") {
            alert("\n\n老大，您的干货 URL 地址呢，我怎么没看到！\n\n");
            return;
        }

        if (!isURL(url)) {
            alert("\n\n别捣乱啊，输入正确的 URL 地址 ！！！\n\n");
            return;
        }

        if (finder == "") {
            alert("\n\n老大，请留下您的大名！！！\n\n");
            return;
        }

        var request_url = "http://onlylemi.com/inerd/public/sub_url.php?callback=?";
        // alert(request_url);
        $.getJSON(request_url, { "type": type, "finder": finder, "url": url }, function(data) {
            if (data.state == "exist") {
                alert("\n\n老大，您提交的资源已经被其他人提交了！\n\n换一个试试！\n\n");
            } else if (data.state == "success") {
                alert("\n\n非常感谢，您提交的资源我们已经收到！\n\n");
            } else if (data.state == "none") {
                alert("\n\n服务器正在维护中，请稍等！！！\n\n");
            }
            $("#sub-url").val("");
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


    /* sidebar-right */
    $(".js-scroll-top").click(function() {
        $("html,body").animate({ scrollTop: $("#wrapper-masthead").offset().top }, 1000)
    });
    $(".js-scroll-comment").click(function() {
        $("html,body").animate({ scrollTop: $("#comments").offset().top }, 1000)
    });
    $(".js-scroll-down").click(function() {
        $("html,body").animate({ scrollTop: $("#wrapper-footer").offset().top }, 1000)
    });

});
