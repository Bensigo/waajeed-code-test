import { connect } from "react-redux";
import Form from "../src/components/Form";
import Layout from "../src/components/Layout/Index";
import Router from "next/router";
import { signUp } from "../src/store/action/auth"

class RegistrationPage extends React.Component {
  state = {
    email: "",
    password: ""
  }
  handleChange = (e) => {
    console.log(e.target.name);
    return this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    // handle submit and push to dashboard page.
    await this.props.signUp(email, password);
    this.setState({
      email: "",
      password: ""
    })
    return Router.push("/dashboard");
  }
  render() {
    return (
    <Layout authUser={this.props.authUser}>
      <Form  
        title="Register" 
        onChange={this.handleChange} 
        email={this.state.email} 
        password={this.state.password}
        onSubmit={this.handleSubmit}
      />
    </Layout>
  )
  }
};

const mapStateToProps = state => {
  return {
    authUser: state.auth.authUser
  };
};
const mapDispatchToProps = dispatch =>{
  return {
    signUp: (email, password) => dispatch(signUp(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
