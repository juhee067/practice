window.addEventListener('DOMContentLoaded', () => {
    const H1 = document.querySelector('h1')
    // = $('h1), h1을 하나 선택할때
    const TOGGLE = function () {
        this.classList.toggle('on')
    }
    H1.addEventListener('click', TOGGLE);
    const dddd = new Swiper('.ddd', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            // init: function () {
            //     console.log('swiper initialized');
            // },
            slideChangeTransitionEnd: function () {
                console.log(this.slides.length, this.realIndex);
                // console.log(document.querySelectorAll('.swiper-slide'), document.querySelector('.swiper-slide-active'))
                document.querySelectorAll('.swiper-slide').forEach(
                    e => e.classList.remove('on')
                );
                document.querySelector('.swiper-slide-active').classList.add('on')
                document.querySelector('h1 strong').innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
            },
        }
    });

})



/*
1) window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    }) -> function이랑 동일함

    addEventListener = on

2) innerText하면 줄바꿈 자동으로 됨
   innerHTML은 안됨

   3) 화살표 함수에는 this가 없다
    -> 이벤트 쓸 때는 안먹는다
     H1.addEventListener('click', function () {
        this.style.color = `blue`
    })
    다른 방법
    ->    
     H1.addEventListener('click', e=> {
        e.target.style.color = `blue`
    })
*/