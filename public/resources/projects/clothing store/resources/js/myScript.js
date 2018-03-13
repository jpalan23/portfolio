
$(function() {


    // create the image rotator
    setInterval("rotateImages()", 3000);
    var el=$('.prd-showcase li').first();


    $('.left-cursor').click(function () {
        el.addClass("disabled-img");
        el = el.next();
    });



    $('.right-cursor').click(function () {
        var el1=$('.disabled-img').last();
        el1.removeClass("disabled-img");
        
    });


    var element1=$('#section-showcase li').first();

    $('.left-cursor1').click(function () {
        element1.addClass("disabled-img1");
        element1 = element1.next();
    });



    $('.right-cursor1').click(function () {
        var el2=$('.disabled-img1').last();
        el2.removeClass("disabled-img1");

    });


    //image Viewer
    $('#btnAddAcc').click(function () {
        $('.active-form').hide();
        $('.hidden-form').show();
    });
    // For Modal Video Player

    autoPlayYouTubeModal();

    // Image Zommer
    
    $('#main-image').mouseover(function () {
        $('.pannable-image').ImageViewer();
    });
    $('#first-image,#second-image,#third-image,#fourth-image').click(function () {
        var src=$(this).attr('src');
        $('#main-image').attr('src',src);
        $('#main-image1').attr('src',src);
        $('.pannable-image').ImageViewer();
        src="";
    });
    
    $('.selectable').click(function () {
       $(this).addClass("selected-active-class");
    });

    $('.vm-btn').click(function () {

        var text= $('.vm-btn').text();
        if(text=='View More'){
            $('.second-list').slideDown(1000);
            $(this).text('View Less');
        }else{
            $(this).text('View More');
            $('.second-list').slideUp(500);

        }

    });
    $('.vm-btn2').click(function () {

        var text= $('.vm-btn2').text();
        if(text=='View More'){
            $('.second-list2').slideDown(1000);
            $(this).text('View Less');
        }else{
            $(this).text('View More');
            $('.second-list2').slideUp(500);

        }

    });

    // Coupon Button

    $('#target').focus(function () {
        if($(this).keypress()){
                            $('.td-discount button').css('background-color',"#080808");
        }
    });

    $('#target').focusout(function () {
        var value = $( this ).val();
        if(value ==""){
                $('.td-discount button').css('background-color',"#C8C8C8");}

    });
    $('.navigation').hover(function() {

        //$('.vertical').fadeIn();
        $('.vertical').fadeIn("fast");

    },function() {
        // $('.vertical').fadeOut("slow");
        $('.vertical').fadeOut("slow");

        }
    );
});

function rotateImages() {
    var oCurPhoto = $('#hero div.current');
    var oNxtPhoto = oCurPhoto.next();
    if (oNxtPhoto.length == 0)
        oNxtPhoto = $('#hero div:first');

    oCurPhoto.removeClass('current').addClass('previous');
    oNxtPhoto.css({ opacity: 0.0 }).addClass('current')
        .animate({ opacity: 1.0 }, 1000,
            function() {
                oCurPhoto.removeClass('previous');
            });
}

function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}
