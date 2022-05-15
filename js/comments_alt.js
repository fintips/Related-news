var cookieCommentCheck;

if ((Cookies.get('commentNameFT') != undefined) && (Cookies.get('commentMessageFT') != undefined) && (Cookies.get('commentDateFT') != undefined)) {
    var commentNameCookie = Cookies.get('commentNameFT');
    var commentMessageCookie = Cookies.get('commentMessageFT');
    var commentDateCookie = Cookies.get('commentDateFT');
    cookieCommentCheck = true;

    // $('.articleCommentsCount').html('5&nbsp;Comments');

    // Comments date magic

    var cookieToDate = commentDateCookie.split('/');
    var workDate = new Date(cookieToDate[2], cookieToDate[1] - 1, cookieToDate[0]);

    var workDate1 = new Date(workDate.setDate(workDate.getDate() - 3));
    var workDate2 = new Date(workDate.setDate(workDate.getDate() + 2));

    var month1 = workDate1.getMonth() + 1;
    var day1 = workDate1.getDate();

    var workDate1String = (day1 < 10 ? '0' : '') + day1 + '/' + (month1 < 10 ? '0' : '') + month1 + '/' + workDate1.getFullYear();

    var month2 = workDate2.getMonth() + 1;
    var day2 = workDate2.getDate();

    var workDate2String = (day2 < 10 ? '0' : '') + day2 + '/' + (month2 < 10 ? '0' : '') + month2 + '/' + workDate2.getFullYear();

    //$('.commentTime1').text(workDate1String);
    //$('.commentTime2').text(workDate2String);

    // Magic ends here

    var commentDOMCookie = '<li>' +
        '<div class="comment-main-level">' +
        '<!-- Avatar -->' +
        '<div class="comment-avatar"><img src="images/avatar.png" alt=""></div>' +
        '<!-- Contenedor del Comentario -->' +
        '<div class="comment-box">' +
        '<div class="comment-head">' +
        '<h6 class="comment-name">' + commentNameCookie + '</h6>' +
        '<span><span class="fa fa-clock-o"></span> Just Now</span>' +
        '<!--i class="fa fa-reply"></i>' +
        '<i class="fa fa-heart"></i-->' +
        '</div>' +
        '<div class="comment-content">' +
        commentMessageCookie +
        '</div>' +
        '</div>' +
        '</div>';
    $(commentDOMCookie).prependTo('#comments-list');
}

$('.addComment form button').click(function(event) {
    event.preventDefault();

    var commentName = $('.addComment form #commentName').val();
    var commentMessage = $('.addComment form #commentMessage').val();

    if (cookieCommentCheck == true) {
        window.alert('Sorry, but you have already posted a comment - please wait for the administrator to check it and reply to it.');
    } else if (commentName != '' && commentMessage != '' && commentMessage != 'Write your comment') {
        cookieCommentCheck = true;

        //$('.articleCommentsCount').html('5&nbsp;Comments');

        var commentName = $('.addComment form #commentName').val();
        var commentMessage = $('.addComment form #commentMessage').val();

        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var commentDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + d.getFullYear();

        var commentDOM = '<li class="active-comment">' +
            '<div class="comment-main-level">' +
            '<!-- Avatar -->' +
            '<div class="comment-avatar"><img src="images/avatar.png" alt=""></div>' +
            '<!-- Contenedor del Comentario -->' +
            '<div class="comment-box">' +
            '<div class="comment-head">' +
            '<h6 class="comment-name">' + commentName + '</h6>' +
            '<span><span class="fa fa-clock-o"></span> Just Now</span>' +
            '<!--i class="fa fa-reply"></i>' +
            '<i class="fa fa-heart"></i-->' +
            '</div>' +
            '<div class="comment-content">' +
            commentMessage +
            '</div>' +
            '</div>' +
            '</div>';
        $(commentDOM).appendTo('#comments-list');
        $('.addComment form #commentName').val('');
        $('.addComment form #commentMessage').val('');

        Cookies.set('commentNameFT', commentName);
        Cookies.set('commentMessageFT', commentMessage);
        Cookies.set('commentDateFT', commentDate);
        cookieCommentCheck = true;

    } else {
        window.alert('In order to add a new comment, you have to fill in your user name and your message.');
    }
});

// Animate comments
(function loop() {
    var timer = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(function() {
        $('#comments-list li.active-comment').prev().slideDown().addClass('active-comment');
        loop();
    }, timer);
}());