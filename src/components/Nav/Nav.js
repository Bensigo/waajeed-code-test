import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import Router from "next/router";
import {FB } from "../../firebase"

import * as routes from "../../routes"
import  { Wrapper, NavContianer } from "./style.js";

class Navigation extends React.Component {
  componentWillMount() {
    if (this.props.authUser === null) {
      Router.push("/signin");
    }
  }
  AuthLinks = () => (
     <div className="auth">
      <Link href={routes.DASHBOARD}>
         <a className="link">Dashboard</a>
      </Link>
     <button  onClick={this.hanldeLogOut}>Logout</button>
    </div>
  );
  NonAuthLink = () => (
  <div className="auth">
    <Link href={routes.SIGN_IN}>
      <a className="link">Login</a>
    </Link>
    <Link href={routes.SIGN_UP}>
      <a className="link">Register</a>
    </Link>
    <style jsx global>
      {`
        .auth {
          dispaly: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .link {
          margin: 10px;
          color: grey;
          font-size: 15px;
          font-weight: bold;
          text-decoration: none;
        }
        .link:hover {
          tranform: scale(1.5);
          transition: all .5ms ease-in;
        }
      `}
    </style>
  </div>
  );
  hanldeLogOut () {
  return  FB().then(user => {
     window.localStorage.removeItem("user");
     //user.signOut();
     return Router.path("/signin")
   });
}
  render () {
    const { authUser } = this.props
    return <Wrapper>
      <Head>
        <title>Waajed</title>
      </Head>
      <NavContianer>
          <div>
            <Link href={routes.LANDING}>
              <a className='link'>Home</a>
            </Link>
          </div>
          <div>
           {authUser !== null ? this.AuthLinks() : this.NonAuthLink() }
          </div>
      </NavContianer>
    </Wrapper>;
  }
  
}


export default Navigation;