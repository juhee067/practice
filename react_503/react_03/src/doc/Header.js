import { useRef, useState } from "react";

const Header = () => {
    const topBanner = useRef(null);
    const [icon, setIcon] = useState(true);
    const toggleClass = () => {
        topBanner.current.classList.toggle('on');
        setIcon(!icon)
    }
    return (
        <header>
            <div className="top_banner" ref={topBanner}>
                <div className="container">
                    <h2>top banner</h2>
                    <p>Note that the development build is not optimized.To create a production build,<br />
                        use npm run build.</p>
                </div>
            </div>
            <i onClick={toggleClass} className={icon ? "xi-arrow-top" : "xi-arrow-bottom"}></i>
        </header>
    )
}

export default Header;