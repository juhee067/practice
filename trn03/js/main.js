$(function () {
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    })

    $('.pop>button').on('click', function () {
        $(this).parent().hide();
    })

    // 전부 닫히게 하는 것
    // $('.pop>button').on('click', function () {
    //     $('.pop').hide();
    // })
})
