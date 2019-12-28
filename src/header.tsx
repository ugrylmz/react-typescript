import * as React from "react";

type HeaderProps = {
  text?: string;
};

function Header(props) {
  //props.text = "don't do this";
  return <h1 className="primary-header">{props.text}</h1>;
}
export { Header };
//export default Header;
