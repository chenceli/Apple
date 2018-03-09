/**
 * Created by chen on 2018/3/9.
 */
$(function () {

    //菜单
    let isMenu=true;
    $('.menu a').click(function () {
        if(isMenu){
            $('.header_top').hide();
            $('.menu').parent().css('background','#000').end().children().eq(1).slideDown(function () {
                $(this).parent().next().next().animate({right:-100},500).hide();
            });
            $(this).children().eq(0).children().html('&#xe606;');
        }else{
            $('.header_top').show();
            $('.menu').parent().css('background','#323232').end().children().eq(1).slideUp(function () {
                $(this).parent().next().next().show().animate({right:0},500);
            });
            $(this).children().eq(0).children().html('&#xe600;');
        }
        isMenu=!isMenu;
    });
    $('.bag').click(function () {
        $('.bagHidden').toggle();
    })

    //站点地图
    let isMap=true;
    $('.mapIcon').each(function (index) {
        $(this).click(function () {
            if(isMap){
                $('.mapHidden').eq(index).slideDown();
                $(this).css('transform','rotate(45deg)');
            }
            else{
                $('.mapHidden').eq(index).slideUp();
                $(this).css('transform','rotate(0deg)');
            }
            isMap=!isMap;
        })
    })

})