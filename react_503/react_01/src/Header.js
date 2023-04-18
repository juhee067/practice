function Header() {
  const leevar = <h2>나는 바보인가????</h2>;
  let TR = true;
  return (
    <>
      {leevar}
      {TR ? '진실' : '거짓'}
      <div className={TR && 'on'}>hahahahaha</div>
    </>

  );
}

export default Header;
