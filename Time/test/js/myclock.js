    setInterval(function () {
        secondPlay2()
    }, 1000);


    setInterval(function () {
        secondPlay1()
    }, 10000);


function secondPlay2() {
    $("body").removeClass("play");
    var aa = $("ul.secondPlay2 li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlay2 li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlay2 li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlay2 li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlay2 li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function secondPlay1() {
    $("body").removeClass("play");
    var aa = $("ul.secondPlay1 li.active");

    if (aa.html() == undefined) {
        aa = $("ul.secondPlay1 li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlay1 li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlay1 li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlay1 li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}