import Layout from "../src/components/Layout/Index";
import { connect } from "react-redux"
import Router from "next/router"

class LandingPage extends React.Component {
componentDidMount() {
  if (this.props.authUser != null) {
    return Router.push("/dashboard")
  }
}
 render () {
   const { authUser}  = this.props;
  return  <Layout authUser={authUser}>
     <div className="jumbotron">
       <div>
         <h1>Hello Next.js, am @X</h1>
       </div>
     </div>
     <style jsx>
       {`
         .jumbotron {
           display: flex;
           height: 90vh;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           color: palevioletred;
           background: papayawhip;
         }`}
     </style>
   </Layout>;
 }
}; 
function mapStateToProps(state) {
  return {
    authUser: state.auth.authUser
  };
}
export default connect(mapStateToProps)(LandingPage);