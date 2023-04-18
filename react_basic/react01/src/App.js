import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main lee="이창훈" work="술마시기" />
            <Main lee="김창훈" work="노래하기" />
            <Main lee="오창훈" work="춤추기" />
            <Main lee="박창훈" />

            <Footer />
        </Wrapper>

    )
}

export default App;
