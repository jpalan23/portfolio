$(document).ready(function() {
    
    //Sticky Header
    $('.js--section').waypoint(function (direction) {
        if(direction=="down"){
            $('nav').addClass('sticky');
            console.log("hey");
        }else {
            $('nav').removeClass('sticky');
        }
    },{
        offset:'500px'
    });
    
    
    $("#owl-demo").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    $("#owl-demo1").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });
//    $("#owl-demo1").owlCarousel({
//
//        navigation : true, // Show next and prev buttons
//        slideSpeed : 300,
//        paginationSpeed : 400,
//        singleItem:true
//
//        // "singleItem:true" is a shortcut for:
//        // items : 1, 
//        // itemsDesktop : false,
//        // itemsDesktopSmall : false,
//        // itemsTablet: false,
//        // itemsMobile : false
//
//    });


    //Premium Packages
    var index2="";
    $('#first-package').children('.packages').hover(function () {

        index2 = $(this).index() + 1;
        console.log(index2);
        $('#first-package .packages:nth-child('+index2+') .imagecontainer .imagecontainer1').css("background-color", "rgba(176, 118, 69, 0.8)");
        $('#first-package .packages:nth-child('+index2+') .imagecontainer2').css("background-color", "#6c6c6c");

    },function () {
        els1= $('#first-package .packages:nth-child('+index2+') .imagecontainer .imagecontainer1');
        els2= $('#first-package .packages:nth-child('+index2+') .imagecontainer2');

        els1.removeAttr('style');
        els2.removeAttr('style');
    });

    // Show Case List
    var index1="";
    $('.owl-wrapper').children('.owl-item').hover(function () {
        index1 = $(this).index() + 1;
        $('.owl-wrapper .owl-item:nth-child('+index1+') .details').addClass('hover1').animate({
            margin:"6%",
            width:'88%',
            height:'88%',
        }, 400,"",function () {
        });
    },function () {
        $('.owl-wrapper .owl-item:nth-child('+index1+') .details').removeClass('hover1');
        els = $(".details");
        els.removeAttr('style');
    });

    var id1="";var index="";
    $('.showcase-list').children('li').hover(function () {
        index = $(this).index() + 1;
        id= $('.showcase-list li:nth-child('+index+')').attr('id');
        $('.showcase-list li:nth-child('+index+') .details').addClass('hover').animate({
            margin:0,
            backgroundColor: "rgba(176, 118, 69, 1)",
            width:'100%',
            height:'100%',
        }, 400,"linear",function () {
        });
     //   $('.hover').


        //$(this).children('.details').addClass('hover');
        //$(this .details).addClass('hover');


        console.log(index);
        console.log(id);

    },function () {
       // $('.showcase-list li:nth-child('+index+') .details .hover').css({"width": "88%", "height": "88%","margin":"6%"});
        $('.showcase-list li:nth-child('+index+') .details').removeClass('hover');
        els = $(".details");
        els.removeAttr('style');
            //.removeAttr("style");
        //$('.showcase-list li:nth-child('+index+') .details').removeAttribute("style");

    });
   
//    Active List
    $("#cat-all").click(function(){
        $("#cat-all").addClass('active');
       $("#cat-1,#cat-2,#cat-3").removeClass('active');
        $('.mix-all').show();
    });
    $("#cat-1").click(function(){
        $("#cat-1").addClass('active');
       $("#cat-all,#cat-2,#cat-3").removeClass('active');
        $('.category-1').show();
        $('.category-2,.category-3').hide();
    });
    $("#cat-2").click(function(){
        $("#cat-2").addClass('active');
       $("#cat-1,#cat-all,#cat-3").removeClass('active');
        $('.category-2').show();
        $('.category-1,.category-3').hide();
    });
    $("#cat-3").click(function(){
        $("#cat-3").addClass('active');
       $("#cat-1,#cat-2,#cat-all").removeClass('active');
        $('.category-3').show();
        $('.category-2,.category-1').hide();
    });




    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

});