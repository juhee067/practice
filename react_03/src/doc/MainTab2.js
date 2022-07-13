import { useEffect, useRef, useState } from "react";

const MainTab2 = () => {
    const tabData = [
        { id: 1, menu: 'menu01', content: 'content01' },
        { id: 2, menu: 'menu02', content: 'content02' },
        { id: 3, menu: 'menu03', content: 'content03' }
    ];

    const tanContent = useRef();

    const [tabNumber, setTabNumber] = useState(0);
    const [tabnnm, setTabnum] = useState();

    const setTab = (fg) => {
        setTabNumber(fg);
        const tabList = [...tabnnm];
        tabList.map(el => el.classList.remove('on'));
        tabList[fg].classList.add('on')
    }

    useEffect(() => {
        setTabnum(tanContent.current.children);
    }, [])
    return (
        <section className="mainTab2">
            <ul>
                {
                    tabData.map((el, idx) => (
                        <li key={el.id} onClick={() => setTab(idx)}>{el.menu}</li>
                    ))
                }
            </ul>
            <div className="tabCotent2" ref={tanContent}>
                <div className="on">01 . Note that the development build is not optimized.
                    To create a production build, use npm run build.</div>
                <div>02 . Note that the development build is not optimized.
                    To create a production build, use npm run build.</div>
                <div>03 . Note that the development build is not optimized.
                    To create a production build, use npm run build.</div>
            </div>
        </section>
    )
}

export default MainTab2;