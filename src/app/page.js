import AuthForm from "@/pages/AuthForm";

import styles from "./globals.css";

const Auth = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <label htmlFor="reg-log">Log In </label>
                <label htmlFor="reg-log">Sign Up</label>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />

              {<AuthForm />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
