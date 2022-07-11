import { useState } from "react";

const SetCount = () => {
    const [num, setNum] = useState(0);
    const plusNum = () => {
        setNum(num + 1)
    }
    const minusNum = () => {
        setNum(num - 1)
    }
    return (
        <div>
            <div>{num}</div>
            <button onClick={plusNum}>숫자올리기</button>
            <button onClick={minusNum}>숫자내리기</button>
        </div>
    )
}

export default SetCount;