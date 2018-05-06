import { Input, Wrapper , Button, FromWrapper} from "./style"

export default (props) => {
  return(
    <Wrapper height="80vh">
      <FromWrapper>
        <h3 style={{ color: "#2473da", textAlign: "center", fontFamily: "monospace", fontSize: 20 }}>
          {props.title}
        </h3>
        <Input type="email" onChange={e => props.onChange(e)} value={props.email}  name="email" />
        <br /> <br />
        <Input type="password" onChange={e => props.onChange(e)} value={props.password} name="password" />
        <br /> <br />
        <center>
          <Button type="submit" onClick={(e) => props.onSubmit(e)}>{props.title}</Button>
        </center>
        {this.state}
      </FromWrapper>
    </Wrapper>
  );
}