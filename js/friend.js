 function lstTab() {
     $(".frclassBox").on("click", ".tagItem", function(e) {
         e.stopPropagation();
         var i = $(this).parent().index() * 5 + $(this).index();

         $(this).parents(".frclassUl").find("span").removeClass("cur");
         $(this).addClass("cur");
         $(".frBatchWrap .frLst:eq(" + i + ")").addClass("loaded").siblings().removeClass("loaded");

     })

     var w = 30;
     for (var i = 0; i < $(".frclassUl span").length; i++) {
         w += $(".frclassUl span:eq(" + i + ")").width() + 24;

     }

     $(".frclassUl li").css("width", w);
     new IScroll('.frclassBox', {
         mouseWheel: true,
         scrollX: true,
         click: true,
         tap: true
     });
 }


 function del() {
     $(".i-group6").each(function(index, element) {
         if (index == 1) {
             $(".popBtn_frY").click(function() {
                 var del = $(this).parents(".popFrdelete").siblings(".item").find('.i-group6').eq(index);
                 del.remove();
             })
         }
     });

 }
 Friend = function() {
     var i = {
             frNav: function() {
                 var e = $(".navItem");
                 e.on("click", function(e) {
                     $(this).addClass("cur").siblings().removeClass("cur");
                     $(".main" + $(this).index()).show().siblings().hide();
                     if ($(this).eq(0)) {
                         Community.isscrollFunc(".main0");
                     }
                     if($(this).eq(1)){
                         Community.isscrollFunc(".main1");
                     }
                     if($(this).eq(3)){
                         Community.isscrollFunc(".main3");
                     }
                     if($(this).eq(4)){
                         Community.isscrollFunc(".main5");
                     }

                     e.stopPropagation();
                 })

             },
             frBtn: function() {
                 var i = $('.btn_fr');
                 i.on('mousedown touchstart', function() {
                     $(this).addClass('touch');
                 }).on('mouseup touchend', function() {
                     $(this).removeClass('touch');
                 });
             },
             frRefuse: function() {
                 var i = $(".btn-refuse");
                 i.on('click', function() {
                     $(this).parents('.item').hide();
                 })
             },
             frmask: function() {
                 var i = $('.mask');
                 i.on('click', function() {
                     $('.popFrined,.mask').hide();
                 })
             },
             frcompile: function() {
                 var i = $('.btn-compile');
                 i.on('click', function() {
                     $('.popFrCompile,.mask').show();
                 })
             },
             frbatch: function() {
                 var i = $('.btn_batch');
                 i.on('click', function() {
                     $('.frBatch').show();
                     Community.isscrollFunc('.frLst');
                     lstTab()
                 })
             },
             friptClose: function() {
                 var i = $(".ipt_close ");
                 i.on('click', function() {
                     $(".ipt-control").val("")
                 })
             },
             fradd: function() {
                 var i = $(".i-group3"),
                     e = $(".popFrClose");

                 i.on('click', function() {
                     $('.popFrAdd').show()
                 });
                 e.on('click', function() {
                     $('.popFrAdd').hide()
                 })
             },
             frommunity: function() {
                 var i = $(".friend_btn .btn_fr"),
                     e = $(".frMain"),
                     t = $('.friendSearch').find('.btn_fr'),
                     c = $('.popFrClose'),
                     b = $(".i-group6");
                 n = 0;
                 i.on('click', function() {
                     var box = new IScroll(".main1", { mouseWheel: true, click: true, });
                     n = i.index(this), i.removeClass("cur").eq(n).addClass("cur"),
                         e.removeClass('show').eq(n).addClass('show');
                     console.log(i.index(this));

                     if (i.eq(0)) {
                         box.destroy();
                         Community.isscrollFunc('.friendRequest');
                         $($(".friendRequest").children("div").get(0)).addClass('padbot')
                     } else if (i.eq(1)) {
                         i.removeClass('cur')
                     } else if (i.eq(2)) {
                         e.eq(2).css('display', 'block');
                         $('.popFrined').show()
                     }
                     if (i.eq(3)) {
                         box.destroy();
                         Community.isscrollFunc('.friendBlacklist');
                         $($(".friendBlacklist").children("div").get(0)).addClass('padbot')
                     }
                 });
                 t.on('click', function() {
                     $('.friendSearch').hide();
                     $('.friend_btn').find('.btn_fr').eq(1).removeClass('cur')
                 });
                 c.on('click', function() {
                     $('.friendShare').removeClass('show');
                     $('.friend_btn').find('.btn_fr').eq(2).removeClass('cur');
                 });
                 b.on('click', function() {
                     $('.popFrdelete,.mask').show();
                 });
             }
         },
         e = function() {
             i.frBtn(), i.frRefuse(), i.frmask(), i.frcompile(), i.frbatch(), i.friptClose(), i.frommunity(), i.fradd(), i.frNav()
         };
     return {
         fn: i,
         init: e
     }
 }();



 $(function() {
     Friend.init();
 })