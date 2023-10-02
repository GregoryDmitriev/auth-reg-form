import React from "react";

const AuthForm = () => {
  return (
    <div className="card-3d-wrap mx-auto">
      <div className="card-3d-wrapper">
        <div className="card-front">
          <div className="center-wrap">
            <div className="section text-center">
              <h4 className="mb-4 pb-3">Log In</h4>
              <form className="form-group" method="post">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                />
              </form>
              <div className="form-group mt-2">
                <input
                  type="password"
                  name="logpass"
                  className="form-style"
                  placeholder="Your Password"
                  id="logpass"
                  autoComplete="off"
                />
              </div>
              <a href="#" className="btn mt-4">
                submit
              </a>
              <p className="mb-0 mt-4 text-center">
                <a href="#0" className="link">
                  Forgot your password?
                </a>
              </p>
            </div>
          </div>
        </div>
        <form className="card-back" method="post">
          <div className="center-wrap">
            <div className="section text-center">
              <h4 className="mb-4 pb-3">Sign Up</h4>
              <div className="form-group">
                <input
                  type="text"
                  name="logname"
                  className="form-style"
                  placeholder="Your Full Name"
                  id="logname"
                  autoComplete="off"
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  name="logpass"
                  className="form-style"
                  placeholder="Your Password"
                  id="logpass"
                  autoComplete="off"
                />
              </div>
              <a href="#" className="btn mt-4">
                submit
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
