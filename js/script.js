$(document).ready(function () {
    // Profile Button function
    $('#account').click(function () {
        if ($('.user').css('display') === 'none') {
            $('.user').fadeIn("slow")
            $('#account').css('color', 'rgba(24,138,141,1)')
        } else {
            if ($('.user').css('display') === 'block') {
                $('.user').fadeOut("slow")
                $('#account').css('color', 'white')

            }
        }
    })

    // Top Button function
    $("#top").hide();
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $('#top').fadeIn("slow");
            } else {
                $('#top').fadeOut("slow");
            }
        });

        $('#top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    });
    // Bars Button function
    $('#icon').click(function (){
        if($('.nav-menu').css('display') === 'none') {
            $('.nav-menu').slideDown("slow")
        }
        else {
            if ($('.nav-menu').css('display') === 'block') {
                $('.nav-menu').slideUp("slow")
            }
        }
    })
    // Date Setup
        let d = new Date()
        let n = d.toDateString()
        document.getElementById('date-time').innerHTML = n
})



