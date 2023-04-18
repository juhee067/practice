const Map = () => {
    const DATA = [
        { id: 1, name: '이창훈', title: '하고싶은 말', content: '나는 바보다', src: './img/lesedilarona01.jpg' },
        { id: 2, name: '김창훈', title: '하고싶은 발', content: '나는 메로나다', src: './img/lesedilarona01.jpg' },
        { id: 3, name: '박창훈', title: '하고싶은 손', content: '나는 비비빅이다', src: './img/lesedilarona01.jpg' },
        { id: 4, name: '오창훈', title: '하고싶은 배', content: '나는 월드콘이다', src: './img/lesedilarona01.jpg' }
    ]
    return (
        <section className="customer">
            <ul>
                {
                    DATA.map((elm, idx) =>
                        <li key={elm.id}>
                            <div className="box"><img src={elm.src} alt='바부팅' /></div>
                            <strong>{elm.name}은 {elm.title}이 '{elm.content}' 입니다.</strong>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default Map;