$(document).ready(function() {

    "use strict";

    function viewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }

    // Get the correct window sizes with these declarations
    var windowHeight = viewport().height;
    var windowWidth = viewport().width;

    $(window).on("resize", function() {
        windowHeight = viewport().height;
        windowWidth = viewport().width;
    });

    if (windowWidth > 991) {
        $("#stickyItem").fixTo("#stickyParent", {
            zIndex: 10,
            top: 30,
            bottom: -30,
            mind: 'nav',
            useNativeSticky: false
        });
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var releaseDate = dd + '/' + mm + '/' + yyyy;
    $(".articleDate").append(releaseDate);

    $(".copyright").html("&copy;&nbsp; " + yyyy + " FinTIPS – All Rights Reserved.");

    $("nav form").submit(function(event) {
        event.preventDefault();
        window.location.replace($(this).attr("data-link"));
    });
});