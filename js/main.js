var myScroll;

var pullDownFlag, pullUpFlag;
var pullDown, pullUp;
var spinner;

var Community = {
    faceFlag: true,
    Scroll: null,
    screenW: $(".container").width(),
    screenH: $(".container").height(),
    forum: function() {
        // Community.common('.forumBox');
        $(".homePadding").css("min-height", Community.screenH);
        // Community.isscrollFunc('.forumBox');
        $(".i-upDown").click(function(e) {
            e.stopPropagation();
            $(this).toggleClass("rotate");
            $(".topItemHide").slideToggle();
        });
        var ww;
        if (Community.orient() == "heng") {
            ww = $(".container").width() * 0.5 / 3
        } else {
            ww = $(".container").width() / 3 - 20
        }

        $(".forumImg em").css({
            "width": ww,
            "height": ww
        });
        $(".forumVideo .videoForum").css({ "height": ww, "width": ww * 1.5 });
        var slider =
            Swipe(document.getElementById('slider'), {
                continuous: true,
                callback: function(pos) {}
            });


        document.addEventListener('touchmove', function(e) {
            // e.preventDefault();
            // console.log(Community.Scroll.y)
            if (Community.Scroll.y < -100) {
                var nav = $(".forumBox .classBox").detach();
                $(".classBefore").append(nav)
            } else {
                var nav = $(".forumBox .classBox").detach();
                $(".classAfter").append(nav)
            }
        }, false)


    },
    dataDetail: function() {
        // demo start
        var data = {
            0: {
                img: "",
                info: "CV：大原沙耶香<br> 港：林芷筠(TVB)<br> 魔法：换装魔法<br> 年龄：19岁(因为消失的7年对于妖尾核心成员来说是空白的七年)<br> 性格：强悍勇敢、严谨可靠<br> 所属公会：妖精尾巴(行会的标志在左臂上，右眼是义眼)<br> 公会纹章：左上臂(位置),鲜蓝色(颜色)<br> 等级：S级<br> 喜欢的东西：武器·盔甲·蛋糕类食物<br> 讨厌的东西：邪恶;不遵守规矩<br> CP：杰拉尔"
            },
            1: {
                img: "",
                info: "C22222"
            },
            2: {
                img: "",
                info: "C3333"
            },
            3: {
                img: "",
                info: "C3333"
            },
            4: {
                img: "",
                info: "C3333"
            },
            5: {
                img: "",
                info: "C3333"
            },
            6: {
                img: "",
                info: "C3333"
            },
            7: {
                img: "",
                info: "C3333"
            }
        }
        //demo end
        var slider =
            Swipe(document.getElementById('slider'), {
                continuous: true,
                callback: function(pos) {}
            });
        $(".manList span").click(function(e) {
            e.stopPropagation();
            $(".manList span").removeClass("js-active");
            $(this).addClass("js-active");
            $(".manText").html(data[$(this).data("man")].info)
        });
        // Community.isscrollFunc(".manBox")
    },
    posts: function() {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            $(".uploadOpt").on("click", function(e) {
                // $(this).find(".gamePhoto").fadeToggle();
                // if ($(".upLoadItem").length % 5 == 0) {
                //     $(this).find(".gamePhoto").css("right", 0);
                //     $(".arrow").css({ "right": $(".container").width() / 12, "left": "auto" })
                // } else {
                //     $(this).find(".gamePhoto").css("right", "auto");
                //     $(".arrow").css({ "left": $(".container").width() / 12, "right": "auto" })
                // }
            })
        } else if (/android/.test(ua)) {

        } else {
            // $(".uploadOpt").on("click", function(e) {
            //     $(this).find(".gamePhoto").fadeToggle();
            // })
        }

        if ($(".smile").hasClass("cur")) {
            Community.faceFunc();

            Community.faceFlag = false;
        }
        $(".editTool .iconfont").click(function(e) {
            e.stopPropagation();
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".editList .editItem:eq(" + $(this).index() + ")").show().siblings().hide();
            if ($(this).data("opt") == "face" && Community.faceFlag) {
                Community.faceFunc();
                Community.faceFlag = false;
            } else if ($(this).data("opt") == "photo") {
                // slideUploadImg();
                // uploadCount()
                if (Community.orient() == "heng") {
                    $(".slideList .imgBg").css({
                        width: ($(".container").width() - 80) / 5,
                        height: $(".container").height() / 5
                    });
                } else {
                    $(".slideList .imgBg").css({
                        width: ($(".container").width() - 80) / 3,
                        height: $(".container").height() / 8
                    });
                }

                $(".arrow").css("left", $(".container").width() / 12)
            }
        });
        $(".tagList li").click(function(e) {
            e.stopPropagation();
            $(this).addClass("cur").siblings().removeClass("cur");
        });

        function slideUploadImg() {
            var slider = Swipe(document.getElementById('sliderUimg'), {
                continuous: true,
            });
            // slider.getNumSlides()
        }

        $(".userUpload").on("click", ".i-closeImg", function(e) {
            e.stopPropagation();
            $(this).parent(".upLoadItem").remove();
        })

        function uploadCount() {
            $(".upNum").html($(".upLoadItem").length);
            $(".justNum").html(8 - $(".upLoadItem").length);
            if ($(".upLoadItem").length >= 8) {
                $(".uploadOpt").hide();
            } else {
                $(".uploadOpt").show();
            }
            if ($(".upLoadItem").length <= 5) {
                $(".slideList li:eq(1)").remove();
            }
            slideUploadImg();

        }
    },
    page: function() {
        $(".replyBox").on("click", ".pageInputBtn", function(e) {
            e.stopPropagation();
            $(".replyInput").fadeIn();
        });
        $(".pageMain").on("click", ".replyBtn", function(e) {
            $(".replyInput").fadeOut();
        })
        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
            $(".replyInput").fadeOut();
        }, false);
        $(".moreBtn").on("click", function(e) {
            //加载更多评论事件
            e.stopPropagation();
        })




    },
    uploadAvar: function(src, w, h) {
        document.querySelector('body').addEventListener('touchstart', function(ev) {
            event.preventDefault();
        });
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var ww = w || $(".container").width();
        var hh = h || $(".container").height();

        c.width = ww;
        c.height = hh;

        var img = new Image();
        if (src) img.src = src;

        img.onload = function() {
            var cp_w = img.width;
            var cp_h = img.height;
            var scale = 1;
            var rotation = 0;
            var startX, mm, nn;
            if (cp_w < ww) {
                startX = ww / 2 - cp_w / 2;
                mm = cp_w;
                nn = cp_h;
                mm = ww * 0.9;
                nn = mm * cp_h / cp_w;
                startX = (ww - ww * 0.9) / 2;
            }
            var startY = hh * 0.12;
            var scaleInit = 1;
            var scaleNow = 1;
            var rotetionInit = 0;
            var x = 0,
                y = 0;
            var flag1 = flag2 = true;

            update(startX, startY, scaleInit, rotation);

            // hammer
            var hammerdrag = Hammer(c).on("drag", function(event) {
                if (flag1) {
                    flag2 = false;
                    x = startX + event.gesture.deltaX;
                    y = startY + event.gesture.deltaY;
                    update(x, y, scaleNow)

                }
            });
            var hammertransform = Hammer(c).on("transform", function(event) {
                if (flag2) {
                    flag1 = false;
                    scaleNow = scaleInit * event.gesture.scale;
                    x = startX + event.gesture.deltaX;
                    y = startY + event.gesture.deltaY;
                    update(x, y, scaleNow);
                }
            });

            var hammeronrelease = Hammer(c).on("release", function(event) {
                flag1 = flag2 = true;
                scaleInit = scaleNow;
                startX = x;
                startY = y;
            })

            function update(startX, startY, scaleNow) {
                ctx.clearRect(0, 0, ww, hh);
                ctx.save()

                // ctx.translate(startX + cp_w / 2, startY + cp_h / 2);
                ctx.translate(ww / 2, hh / 2);
                ctx.scale(scaleNow, scaleNow);
                // ctx.translate(-1 * (startX + cp_w / 2), -1 * (startY + cp_h / 2));
                ctx.translate(-ww / 2, -hh / 2);
                ctx.drawImage(img, 0, 0, cp_w, cp_h, startX, startY, mm, nn);
                ctx.restore();
                ctx.strokeStyle = "white";
                ctx.lineWidth = "4";

                var w1 = $(".container").width();
                var h2 = $(".container").height();
                ctx.rect(w1 / 2 - 98, h2 * 0.12, 196, 196);
                ctx.stroke();
            }


        }




        $(".okBtn").on("click", function(e) {
            img.setAttribute('crossOrigin', 'anonymous');
            var image = c.toDataURL("image/png");
            window.location.href = image;
        })


    },
    search: function(obj) {
        Community.isscrollFunc(".searchBefore");
        $(".searchText").keyup(function() {
            if ($(this).val() == "") {
                $(".searchBefore").show();
                $(".searchAfter").hide();
                Community.isscrollFunc(".searchBefore");
            } else {
                $(".searchBefore").hide();
                $(".searchAfter").show();
                Community.isscrollFunc(".searchAfter");
            }
        })
    },
    role: function(obj) {
        Community.isscrollFunc(obj);
        $(".navItem").on("click", function(e) {
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".main" + $(this).index()).show().siblings().hide();
            Community.isscrollFunc(".main" + $(this).index());
            e.stopPropagation();
        })
    },
    editor: function() {
        $('#content').artEditor({
            imgTar: '#imageUpload',
            limitSize: 5, // 兆
            showServer: false,
            uploadUrl: '',
            data: {},
            uploadField: 'image',
            placeholader: '说点什么',
            validHtml: [],
            formInputId: 'target',
            uploadSuccess: function(res) {
                // return img url
                return res.path;
            },
            uploadError: function(res) {
                // something error
                console.log(res);
            }
        });


    },
    isscrollFunc: function(dom) {
        function checkAgent(filename) {
            var fileref = document.createElement('link');
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", "css/" + filename + "");
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
        Community.Scroll = new IScroll(dom, {
            mouseWheel: true,
            click: true
        });

        Community.Scroll.on('scrollEnd', pageAction);

        function pageAction() {
            if (dom == ".forumBox") {
                if (this.y == this.maxScrollY) {
                    $(".loadingBot").show();
                    console.log("下拉刷新…");
                } else if (!this.y) {
                    $(".loadingTop").show();
                    console.log("上拉刷新…")
                }
            } else if (dom == ".pageMain") {
                if (this.y == this.maxScrollY) {
                    console.log("下拉刷新…")
                } else if (!this.y) {
                    console.log("上拉刷新…")
                }
            }
        }

    },
    faceFunc: function() {

        if (Community.orient() == "heng") {
            heng();
        } else {
            shu();
        }

        function heng() {

            var expressionHtml = '<ul class="ui-carousel-inner face-panel-wrap">';
            for (var i = 1; i <= 4; i++) {
                expressionHtml += '<li class="ui-carousel-item face-panel face-panel-' + i + '">';
                for (var j = 0; j <= 19; j++) {
                    var n = 20 * (i - 1) + j;
                    n < 10 ? n = "00" + n : n;
                    n < 100 && n >= 10 ? n = "0" + n : n;
                    expressionHtml += '<span class="express" index="' + n + '" alt="[em_' + n + ']"></span>';
                }
                expressionHtml += '</li>';
            }
            expressionHtml += '</ul>';
            var bottomHtml = '<ol id="position" class="ui-carousel-indicators">' +
                '<li class="js-active"></li>' +
                '<li class=""></li>' +
                '<li class=""></li>' +
                '<li class=""></li>' +
                '</ol>';
            expressionHtml += bottomHtml;
            $("#slider").html(expressionHtml);
            var ww = $(".ui-carousel").width();
            var editH = $(".container").height() - $(".header").height() - $(".article-content").height() - $(".editTool").height();
            $(".face-panel").css({
                "height": editH - 30,
                "background-size": ww + "px auto"
            });

            $(".face-panel span").css({
                width: ww / 10,
                height: ww / 10
            });
        }

        function shu() {
            var expressionHtml = '<ul class="ui-carousel-inner face-panel-wrap">';
            for (var i = 1; i <= 3; i++) {
                expressionHtml += '<li class="ui-carousel-item face-panel face-panel-' + i + '">';
                for (var j = 0; j <= 23; j++) {
                    var n = 24 * (i - 1) + j;
                    n < 10 ? n = "00" + n : n;
                    n < 100 && n >= 10 ? n = "0" + n : n;
                    expressionHtml += '<span class="express" index="' + n + '" alt="[em_' + n + ']"></span>';
                }
                expressionHtml += '</li>';
            }
            expressionHtml += '</ul>';
            var bottomHtml = '<ol id="position" class="ui-carousel-indicators">' +
                '<li class="js-active"></li>' +
                '<li class=""></li>' +
                '<li class=""></li>' +
                '</ol>';
            expressionHtml += bottomHtml;
            $("#slider").html(expressionHtml);
            var ww = $(".ui-carousel").width();
            var editH = $(".container").height() - $(".header").height() - $(".article-content").height() - $(".editTool").height();
            $(".face-panel").css({
                "height": editH - 30,
                "background-size": ww + "px auto"
            });
            $(".face-panel span").css({
                width: ww / 8,
                height: ww / 8
            });
        }



        var slider =
            Swipe(document.getElementById('slider'), {
                continuous: true,
                callback: function(pos) {

                    var i = bullets.length;
                    while (i--) {
                        bullets[i].className = ' ';
                    }
                    bullets[pos].className = 'js-active';
                }
            });
        var bullets = document.getElementById('position').getElementsByTagName('li');

        var curFocus = {
            fid: 'content',
            start: 0,
            end: 0
        };
        // 点击表情

        $(".expBox").on("click", '.express', function(e) {
            e.stopPropagation();
            var imgCode = $(this).attr('index');
            if ($(".article-content").html() == '说点什么') {
                var article = "";
            } else {
                var article = $(".article-content").html();
            }
            $(".article-content").html("").append(article + '<img src="images/face/' + imgCode + '.png" index="' + imgCode + '">');

        });


    },
    loadingFunc: function() {
        $(".container").append('<div class="loadingIco"></div>');
    },
    loadingRemoveFunc: function() {
        $(".loadingIco").remove();
    },
    countNum: function(obj, maxNum) {
        var len = maxNum - $(obj).text().length - $(".article-content img").length * 2;
        $(".countNum em").text(len);
    },
    inputFocus: function(heigth) {
        $(".replyInput").css("bottom", height)
    },
    zuohuashan: function() {
        // 设定每一行的宽度=屏幕宽度+按钮宽度
        $(".line-scroll-wrapper").width($(".line-wrapper").width() + $(".line-btn-delete").width() - 30);
        // 设定常规信息区域宽度=屏幕宽度
        $(".line-normal-wrapper").width($(".line-wrapper").width() - 30);

        $(".line-btn-delete").css("height", $(".line-normal-wrapper").height() - 1);


        // 获取所有行，对每一行设置监听
        var lines = $(".line-normal-wrapper");
        var len = lines.length;
        var lastX, lastXForMobile;
        var speed = 200;
        // 用于记录被按下的对象
        var pressedObj; // 当前左滑的对象
        var lastLeftObj; // 上一个左滑的对象

        // 用于记录按下的点
        var start;

        // 网页在移动端运行时的监听
        for (var i = 0; i < len; ++i) {
            lines[i].addEventListener('touchstart', function(e) {
                lastXForMobile = e.changedTouches[0].pageX;
                pressedObj = this; // 记录被按下的对象 

                // 记录开始按下时的点
                var touches = event.touches[0];
                start = {
                    x: touches.pageX, // 横坐标
                    y: touches.pageY // 纵坐标
                };
            });

            lines[i].addEventListener('touchmove', function(e) {
                // 计算划动过程中x和y的变化量
                var touches = event.touches[0];
                delta = {
                    x: touches.pageX - start.x,
                    y: touches.pageY - start.y
                };

                // 横向位移大于纵向位移，阻止纵向滚动
                if (Math.abs(delta.x) > Math.abs(delta.y)) {
                    event.preventDefault();
                }
            });

            lines[i].addEventListener('touchend', function(e) {
                if (lastLeftObj && pressedObj != lastLeftObj) { // 点击除当前左滑对象之外的任意其他位置
                    $(lastLeftObj).animate({
                        marginLeft: "0"
                    }, speed); // 右滑
                    lastLeftObj = null; // 清空上一个左滑的对象
                }
                var diffX = e.changedTouches[0].pageX - lastXForMobile;
                if (diffX < -100) {
                    $(pressedObj).animate({
                        marginLeft: "-98px"
                    }, speed); // 左滑
                    lastLeftObj && lastLeftObj != pressedObj &&
                        $(lastLeftObj).animate({
                            marginLeft: "0"
                        }, speed); // 已经左滑状态的按钮右滑
                    lastLeftObj = pressedObj; // 记录上一个左滑的对象
                } else if (diffX > 100) {
                    if (pressedObj == lastLeftObj) {
                        $(pressedObj).animate({
                            marginLeft: "0"
                        }, speed); // 右滑
                        lastLeftObj = null; // 清空上一个左滑的对象
                    }
                }
            });
        }
    },
    blank: function(obj) {
        var html = '<div class="errorBox"><p class="errorInfo">还没有内容</p></div><div class="maskbg"></div>'
        $(obj).prepend(html);
    },
    yzm: function(s) {
        ~ function restart() {
            setTimeout(function() {
                if (s > 1) {
                    s--;
                    $(".btn-yzm").attr("disabled", true).val(s + "重新发送");
                    restart();
                } else {
                    $(".btn-yzm").attr("disabled", false).val("获取验证码");
                }
            }, 1000)
        }()
    },
    orient: function() {
        if (window.orientation == 90 || window.orientation == -90) {
            //ipad、iphone竖屏；Andriod横屏
            return "heng";
        } else if (window.orientation == 0 || window.orientation == 180) {
            //ipad、iphone横屏；Andriod竖屏
            return "shu";
        }

    },
    newsImg: function() {
        var ww;
        if (Community.orient() == "heng") {
            ww = $(".container").width() * 0.5 / 3
        } else {
            ww = $(".container").width() / 3 - 20
        }

        $(".newsImg").css({
            "width": ww,
            "height": ww
        });
    },
    pageRem: function() {
        (function(win, doc) {
            if (!win.addEventListener) return;
            var html = document.documentElement;
            function setFont(cb) {
                var w = html.clientWidth,
                    h = html.clientHeight;
                html.style.fontSize = w > h ? w / 1334 * 100 + "px" : w / 750 * 100 + "px";
                document.body.style.visibility = "visible";
                if (cb && typeof(cb) == "function") { cb() }
            }
            doc.addEventListener('DOMContentLoaded', setFont, false);
            win.addEventListener('resize', setFont, false);
            win.addEventListener('load', setFont, false);

            //判断手机横竖屏状态
            function ifHp(){
                if (window.orientation === 180 || window.orientation === 0) { 
                    //竖屏状态
                    $(".container").removeClass('heng').addClass('shu');
                } 
                if (window.orientation === 90 || window.orientation === -90 ){ 
                    //横屏状态
                    $(".container").removeClass('shu').addClass('heng');
                }
            }
            ifHp();
            win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                  ifHp();
            }, false);
        })(window, document);
        if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
                version = parseInt(v[1], 10);
            if (version >= 8) {
                document.documentElement.classList.add('hairlines')
            }
        }
    },

    openInputup: function() {
        var html = '<div class="pop_input">\
                <div class="pop_input_mask"></div>\
                <div class="pop_input_box ">\
                    <textarea class="pop_input_textarea"></textarea>\
                </div>\
            </div>';


        $("body").on("click", ".ipt-content", function() {

            setTimeout(function() {
                $("body").prepend(html);
                $('body').scrollTop(0)
                $(".pop_input_box").addClass("pop_input_box_show");
                $(".pop_input").show();
                $(".pop_input_textarea").trigger("focus");

            }, 30);


        })

        $("body").on("blur", ".pop_input_textarea", function() {
            setTimeout(function() {
                if ($(".pop_input_textarea").val() == '') {
                    $(".ipt-content").val();
                } else {
                    $(".ipt-content").val($(".pop_input_textarea").val());
                }
                $(".pop_input").hide();
                $(".pop_input_box").removeClass("pop_input_box_show");
                $(".pop_input").remove();

            }, 30)

        })




    }

}

function popup(message, nub) {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    var thisHeight = $('#popup_' + message).height();
    $('#popup_' + message).show();
    $('.mask').show();
}   
$.fn.dialog = function(options) {
    var settings = {
        text: '提交成功',
        autoclose: true,
        icon: "ok" // ok,error,point,loading
    };
    return this.each(function() {
        var opt = $.extend(settings, options);
        var before = '<div class="dialogMessage dialogMain">';
        switch (opt.icon) {
            case "ok":
                before += '<i class="i-ok"></i><p>' + opt.text + '</p></div>'
                break;
            case "loading":
                before += '<i class="dialog-loading"></i><p>' + opt.text + '</p></div><div class="maskBox dialogMessage"></div>';
                break;
            case "error":
                before += '<i class="i-error"></i><p>' + opt.text + '</p></div>';
                break;
            case "point":
                before += '<i class="i-point"></i><p>' + opt.text + '</p></div>';
                break;
        }

        $(".container").append(before);
        if (opt.autoclose) {
            setTimeout(function() {
                $(".dialogMessage").remove();
            }, 2000);
        }
    });
};
$.fn.prompt = function(options) {
    var settings = {
        title: '',
        subtitle: '',
        input: false, //false,input,sex
        button: ["取消", "确认"]
    };
    $("body").on("click", ".promptBox label", function() {
        $(this).addClass("on").siblings().removeClass("on");
    })
    return this.each(function() {
        var opt = $.extend(settings, options);
        var before = '<div class="promptBox"><div class="inner"><h4 class="title">' + opt.title + '</h4>';
        if (opt.subtitle != '') {
            before += '<div class="subtitle">' + opt.subtitle + '</div>'
        }
        if (opt.input) {
            if (opt.input == "input") {
                before += '<div class="input"><input type="text"/></div>'
            } else if (opt.input == "sex") {
                before += '<div class="input"><label for="male" class="on"><i class="i-radio"></i><input type="radio" id="male"/>男</label><label for="female"><i class="i-radio"></i><input type="radio" id="female"/>女</label></div>'
            }
        }
        before += '</div><div class="buttonS">'
        if (opt.button.length == 2) {
            before += '<div class="f_l">' + opt.button[0] + '</div><div class="f_r">' + opt.button[1] + '</div>'
        }
        before += '</div></div>'
        $(".container").append(before);

    });
};

$.fn.orderPop = function(options) {

    var settings = {
        title: '',
        subtitle: '',
        button: ["取消", "确认"]
    };
     
    $("body").on("click", "div" ,function() {
        $(this).show().siblings().hide();
    })
    return this.each(function() {
        var opt = $.extend(settings, options);
        var before = '<div class="pop_tong_group pop_integralS overlay">\
                <a href="javascript:;" title="关闭弹窗" class="btn_pop_close"></a>\
                <div class="pop_tong_box">\
                <div class="ptong_title">' + opt.title + '</div>';
        if (opt.subtitle != '') {
            before += '<div class="order-title">' + opt.subtitle + '</div>'
        }
        before += '<div class="order-btn">'
        if (opt.button.length == 2) {
            before += '<div class="btn_blue btn">' + opt.button[0] + '</div><div class="btn_yellow btn">' + opt.button[1] + '</div>'
        }
        before += '</div></div>'
        $(".container").append(before);

    });
};

/* jq 写入插件*/
$.fn.extend({
    tab: function(el,events,handler){
        $(el).hide().eq(0).show();
        events = events ? events : "click";
        return this.on(events, function(event) {
            event.preventDefault();
            var n = $(this).index();
            if($(this).hasClass('current')) return;
            $(this).addClass('current').siblings().removeClass('current');
            var $el = $(el);
            $el.hide();
            $el.eq(n).show();
            if($.isFunction(handler)) handler($(this));
        })
    },
    tabV: function(el,events,handler){
        $(el).css('visibility', 'hidden').eq(0).css('visibility', 'visible');
        events = events ? events : "click";
        return this.on(events, function(event) {
            event.preventDefault();
            var n = $(this).index();
            if($(this).hasClass('current')) return;
            $(this).addClass('current').siblings().removeClass('current');
            var $el = $(el);
            $el.css('visibility', 'hidden');
            $el.eq(n).css('visibility', 'visible');
            if($.isFunction(handler)) handler($(this));
        })
    },
    textareaMax:function(elText){
        return this.each(function(index, el) {
            if(typeof($(el).attr('maxlength'))!='undefined'){
                $(el).keyup(function(){
                    var n =  $(this).attr('maxlength'),
                        curLength = $(this).val().length,
                        $numbT = $(elText);
                    if(curLength>n) 
                    { 
                    var num=$(this).val().substr(0,n); 
                    $(this).val(num); 
                        alert("超过字数限制，多出的字将被截断！" ); 
                    }else { 
                        $numbT.eq(index).text($(this).val().length); 
                    } 
                });
            }
        });
    },
    checkbox: function(el,handler){
        var el = el ? el : "div";
        this.off('click');
        return this.on('click', function(event) {
            event.preventDefault();
            var d,val,arrayA=[];
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active');
            }
            if(typeof($(this).attr('data-allselectid'))!='undefined'){
                val = $(this).attr('data-allselectid');
                if($(this).hasClass('active')){
                    $(el + "[data-allselectid='"+ val +"']").addClass('active');
                    $(el + "[data-optionid='"+ val +"']").addClass('active');
                    d = $(el + ".active[data-optionid='"+ val +"']").length;
                }else{
                    $(el + "[data-allselectid='"+ val +"']").removeClass('active');
                    $(el + "[data-optionid='"+ val +"']").removeClass('active');
                    d = 0;
                }
                arrayA = $(el + ".active[data-optionid='"+ val +"']");
            }
            if(typeof($(this).attr('data-optionid'))!='undefined'){
                val = $(this).attr('data-optionid');
                var l = $(el + "[data-optionid='"+ val +"']").length;
                if(!$(this).hasClass('active')){
                    $(el + "[data-allselectid='"+ val +"']").removeClass('active');
                }
                d = $(el + ".active[data-optionid='"+ val +"']").length;
                if(d==l) $(el + "[data-allselectid='"+ val +"']").addClass('active');
                arrayA = $(el + ".active[data-optionid='"+ val +"']");
            }
            if($.isFunction(handler)) handler(arrayA);
        });
    }


});
