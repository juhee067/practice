import { useState } from 'react';
const TopBanner = () => {

    const [TB, setTB] = useState(false);
    //  const [변수,변수변경함수]
    // 배열이 오면 비구조할당이 왔다. 순서가 중요
    // 객체가 오면 순서가 중요하지않고 이름이 중요
    return (
        /* <h1>나는 리액트다</h1>
      <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /> */
        <div className={'TopBanner ' + (TB ? 'on' : '')} >
            <div className='inner'>
                <h2>현대엘리베이트 스마트 테크놀로지 체험 <span>Green Technology</span></h2>
                <p>현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.</p>
                <i className='xi-close' onClick={() => setTB(!TB)}></i>

                {/* 1. usestate사용 : 거의 많이 씀
                 2. useref 사용: 참조를 받아서 classlist add*/}
            </div>
        </div>

    );
}

export default TopBanner;