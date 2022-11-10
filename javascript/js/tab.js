

// for (let i = 0; i < $('.tab-button').length; i++) {

//     // $('.tab-button').eq(i).on('click', function () {
//     //     탭열기()-> 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘된다
//     // 탭열기(num) 이런식으로
//     // }

//     $('.tab-button').eq(i).on('click', function () {
//         탭열기(i)
//     })

// }

function 탭열기(num) {


    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(num).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(num).addClass('show');

}
$('.list').click(function (e) {

    탭열기(e.target.dataset.id)

})

// html 태그에 몰래 정보 숨기기 가능
// -> data- 자료이름 - "값"