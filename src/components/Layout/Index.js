import { Wrapper } from "./styled"
import dynamic from "next/dynamic"
import Nav from "../Nav/Nav";

export default (props) => {
  return (
    <Wrapper>
      <Nav authUser={props.authUser}/>
      {props.children}
    </Wrapper>
  );
}