import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "01 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 2, content: "02 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 3, content: "03 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" }
]
const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, [])
    const setting = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: index => console.log(index),

    }

    return (
        <section className='MainVisual' >
            <Slider {...setting}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (slide.id === IDX ? 'on' : '')}>
                                <div className='inner'>
                                    <h2>{slide.content}</h2>
                                    <p>{slide.desc}</p>
                                    <a href={slide.link} target="_blank">VIEW MORE</a>
                                </div>

                            </figure>
                        )
                    })
                }
            </Slider>
        </section>
    )
}
export default MainVisual;