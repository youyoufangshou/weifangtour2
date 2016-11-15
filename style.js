/**
 * Created by Administrator on 2016/11/13.
 */
$(document).ready(function () {
    $(".bhuoshao").click(function () {
        $(".hele").hide(1000);
        $(".huoshoa").hide(1000);
        $(".chao").hide(1000);
        $(".huoshao").show(1000);
        $('#ball').removeClass('active');
    });
    $(".bhele").click(function () {
        $(".hele").show(1000);
        $(".huoshoa").hide(1000);
        $(".chao").hide(1000);
        $(".huoshao").hide(1000);
        $('#ball').removeClass('active');
    });
    $(".bhuoshoa").click(function () {
        $(".hele").hide(1000);
        $(".huoshoa").show(1000);
        $(".chao").hide(1000);
        $(".huoshao").hide(1000);
        $('#ball').removeClass('active');
    });
    $(".bchao").click(function () {
        $(".hele").hide(1000);
        $(".huoshoa").hide(1000);
        $(".chao").show(1000);
        $(".huoshao").hide(1000);
        $('#ball').removeClass('active');
    });
    $("#ball").click(function () {
        $(".hele").show(1000);
        $(".huoshoa").show(1000);
        $(".chao").show(1000);
        $(".huoshao").show(1000);
        $('#ball').removeClass('active');
    });


    //注册


        //获取email值
    function checkUsername(){
        var username = $('#username');

        if(username.val() == ""){
            //为了防止添加样式受影响，先清除所有的样式,然后添加样式
            username.parent().parent()
                .removeClass().addClass("form-group has-error has-feedback");
            username.next()
                .removeClass().addClass("glyphicon glyphicon-remove form-control-feedback");
        }else{
            username.parent().parent()
                .removeClass().addClass("form-group has-success has-feedback");
            username.next()
                .removeClass().addClass("glyphicon glyphicon-ok form-control-feedback")
        }
    }
    $(function(){
        $('#btnSubmit').click(function(){
//                                alert(2);
            /*
             *   关于调试: 一个重要的思想[二分法]
             *       alert()就是二分法的一个表现形式，能够快速的定位错误
             *   断点调试，能够精确的定位错误位置，缺点就是，只能单步调试，效率会有点慢啊
             * */
            /*
             *   统一校验三个表单，该如何实现？
             *   以上是通过点击提交按钮实现的校验，怎么实现当表单失去焦点的时候就去校验？change
             *   怎么去控制提交按钮，只有当所有表单元素都输入合法的时候才提交
             * */
            checkUsername();
        });
    });
    //右侧导航栏有关

    $(".tooltip-side-nav").click(function(){

        $(this).addClass("select").parent().siblings().children().removeClass("select");
       console.log($(".tooltip-side-nav"));
        $(this).removeClass("default").parent().siblings().children().addClass("default");//$('html, body').animate({
//            scrollTop: $( $.attr(this, 'href') ).offset().top
//        }, 500);
//        return false;
    })


    console.log($(".onepage").height());

    $(function(){
        var two = $(".twopage").offset().top;
        var three = $(".threepage").offset().top;
        var four = $(".fourpage").offset().top;
        var five = $(".fivepage").offset().top;


        $(window).scroll(function() {
            var this_scrollTop = $(this).scrollTop();
            if(this_scrollTop<two){
                $(".one").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".one").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=two&& this_scrollTop<three){
                $(".two").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".two").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=three&& this_scrollTop<four){
                $(".three").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".three").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=four&& this_scrollTop<five){
                $(".four").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".four").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=five){
                $(".five").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".five").removeClass("default").parent().siblings().children().addClass("default");
            }
        });
    });




});