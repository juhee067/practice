
import './App.css';

function App() {
  let post = '강남 우동 맛집'
  return (
    <div className="App">
      <div className='blackNav'>
        <h4 style={{ color: 'red' }}>블로그임</h4>
      </div>
      <h4>{post}</h4>
      {/* 데이터를 꽂아넣는다 : 데이터 바인딩 */}
    </div>
  );
}

export default App;
