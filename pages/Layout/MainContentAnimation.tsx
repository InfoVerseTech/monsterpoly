interface Children {
  children: string;
}
export default function MainContentAnimation({children}:Children) {

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </>
  );
}
