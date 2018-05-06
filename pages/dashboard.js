import Router from "next/router"
import Layout from "../src/components/Layout/Index";
import { connect } from "react-redux"

class Dashboard extends React.Component {
  componentDidMount() {
    const user = window.localStorage.getItem("user");
    if (user === "" || user === null) {
      return Router.push("/signin");
    }
  }
  render() {
    return (
      <Layout authUser={this.props.authUser}>
        <h1>this is a secret</h1>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  const { authUser } = state
  return { authUser }
}
export default connect(mapStateToProps)(Dashboard);;
