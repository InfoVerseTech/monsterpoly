interface Children {
  children: any;
}

const MainContentAnimation = ({children}:Children) => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </>
  );
}

export default MainContentAnimation;
