import React from 'react';
import 'swiper/swiper-bundle.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/styles.css';

const LoginPage: React.FC = () => {
  return (
    <section className="section">
      <div className="auth_container">
        <div className="auth_img">
          <img src="/pages/user/image/Anh đk4.jpg" alt="" className="auth_image" />
        </div>
        <div className="auth_content">
          <form className="auth_form">
            <h2 className="form_title">Login to your account</h2>
            <p className="auth_p">Enter your details below</p>
            <div className="form_group">
              <input type="email" placeholder="Email" className="form_input" />
            </div>
            <div className="form_group form_pass">
              <input type="password" placeholder="Password" className="form_input" />
            </div>
            <div className="form_group">
              <button className="form_btn">
                <a href="#" className="form_link">Login</a>
              </button>
            </div>
            <div className="form_group">
              <span>Don't have an account?
                <a href="/pages/user/sign-up.html" className="form_auth_link">Register</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;