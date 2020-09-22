import React, { Component } from "react";
import styled from "styled-components";

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <div>
          <meta charSet="utf-8" />

          <title>Signin page</title>
          <link
            rel="canonical"
            href="https://getbootstrap.com/docs/4.5/examples/sign-in/"
          />
          {/* Bootstrap core CSS */}
          <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    ",
            }}
          />
          {/* Custom styles for this template */}
          <link href="signin.css" rel="stylesheet" />
          <form className="form-signin">
            <img
              className="mb-4"
              src="../assets/brand/bootstrap-solid.svg"
              alt=""
              width={72}
              height={72}
            />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted"></p>
          </form>
        </div>
      </LoginContainer>
    );
  }
}

export default Login;

const LoginContainer = styled.footer`
  body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
