$(function () {
    //开启导航
    $(".head-menu").on("click", function () {
        $(".sider-box").animate({left: "0"});
    })
    //关闭导航
    $(".sider-left").on("click", function () {
        $(".sider-box").animate({left: "100%"});
    })
})