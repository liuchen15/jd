/*** Created by ���� on 2017/5/25.*/


$(window).scroll(
    function(){
        var a=$(window).scrollTop();
        if(a>=100){
            $(".header").css("background","rgba(255,0,0,0.7)");
        }
        if(a<100){
            $(".header").css("background","none");
            }
    }

);

var i=18000;
setInterval(function(){
    i=i-1;
    var h=parseInt(i/3600);
    var m=parseInt(i%3600/60);
    var s=i%3600%60;

    $(".h1").text(parseInt(h/10));
    $(".m1").text(parseInt(m/10));
    $(".s1").text(parseInt(s/10));
    $(".h2").text(h%10);
    $(".m2").text(m%10);
    $(".s2").text(s%10);

},1000)