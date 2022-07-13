import { useState } from "react";

const MainTab = () => {
    const tabData = [
        { id: 1, menu: 'menu01', content: 'content01' },
        { id: 2, menu: 'menu02', content: 'content02' },
        { id: 3, menu: 'menu03', content: 'content03' }
    ];

    const [tabNumber, setTabNumber] = useState(0)
    return (
        <section className="mainTab">
            <ul>
                {
                    tabData.map((el, idx) => (
                        <li key={el.id} onClick={() => setTabNumber(idx)}>{el.menu}</li>
                    ))
                }
            </ul>
            <div className="tabCotent">
                <div>{tabData[tabNumber].content}</div>
            </div>
        </section>
    )
}

export default MainTab;