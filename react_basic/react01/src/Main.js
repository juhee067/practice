const Main = ({ lee, work }) => {
    return (
        <main>
            {lee}은 {work}를 즐겨합니다.
        </main>
    )
}
//전달받은 값이 없을 때 기본으로 전해준다.
Main.defaultProps = {
    work: '놀기'
}
export default Main;