import { useRef } from "react";
// document.query... 이런 거 리액트에서 잘 안씁니다. useRef 씁니다.

function Header() {

    const toggleBanner = useRef(null);
    const toggleClass = e => {
        toggleBanner.current.classList.toggle('on');
        e.target.classList.toggle('on');
    }
    return (
        <header className="header">
            <div className="top_banner">
                <div className="container" ref={toggleBanner}>
                    <h2>가장 쉬운 방법(Easiest) : CDN by jsDelivr</h2>
                    <p>CDN을 사용하면 한 줄의 코드로 XEIcon을 사용할 수 있습니다. 파일을 다운로드하거나 설치할 필요가 없습니다.</p>
                </div>
                <i className="xi-arrow-top" onClick={toggleClass}></i>
            </div>
        </header>
    )
}

export default Header;