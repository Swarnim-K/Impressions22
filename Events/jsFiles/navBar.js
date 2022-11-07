const allItems = document.querySelectorAll(".leftContainer ul li");

// allItems.forEach(item => {
//     item.addEventListener("click", function (e) {
//         for (var i = 0; i < allItems.length; i++) {
//             allItems[i].classList.remove("active");

//         }
//         this.classList.add("active");
//     })
// })

$(document).ready(function () {
    $(window).scroll(function () {

        var offsetTopPosition1 = $("#dance").offset().top - $(window).scrollTop();
        var offsetTopPosition2 = $("#drama").offset().top - $(window).scrollTop();
        var offsetTopPosition3 = $("#anc").offset().top - $(window).scrollTop();
        var offsetTopPosition4 = $("#camera").offset().top - $(window).scrollTop();
        var offsetTopPosition5 = $("#music").offset().top - $(window).scrollTop();
        var offsetTopPosition6 = $("#shoutout").offset().top - $(window).scrollTop();

        if (offsetTopPosition1 < 500) {
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].classList.remove("active");
            }
            $(".nitem1").addClass('active');
        }
        else {
            $(".nitem1").removeClass('active');
        }
        if (offsetTopPosition2 < 500) {
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].classList.remove("active");
            }
            $(".nitem2").addClass('active');
        }
        else {
            $(".nitem2").removeClass('active');
        }
        if (offsetTopPosition3 < 500) {
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].classList.remove("active");
            }
            $(".nitem3").addClass('active');
        }
        else {
            $(".nitem3").removeClass('active');
        }
        if (offsetTopPosition4 < 500) {
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].classList.remove("active");
            }
            $(".nitem4").addClass('active');
        }
        else {
            $(".nitem4").removeClass('active');
        }
        if (offsetTopPosition5 < 500) {
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].classList.remove("active");
            }
            $(".nitem5").addClass('active');
        }
        else {
            $(".nitem5").removeClass('active');
        }
        if (offsetTopPosition6 < 500) {
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].classList.remove("active");
            }
            $(".nitem6").addClass('active');
        }
        else {
            $(".nitem6").removeClass('active');
        }

    });

});