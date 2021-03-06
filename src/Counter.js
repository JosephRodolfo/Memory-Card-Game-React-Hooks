const Nav = (props) => {
  return (
    <nav>
      <div>
        <h1>Memory Card Game</h1>
        <h3>
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
      </div>
      <div>{props.number}</div>
    </nav>
  );
};

export default Nav;
