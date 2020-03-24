/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';
import './App.scss';
class App extends React.Component {

  loginTitle = 'Login'
  registerTitle = 'Register'
  forgotPassTitle = 'Submit'

  constructor(props) {
    super(props);
    this.state = {
      title: this.loginTitle,
      subTitle: this.registerTitle,
      btnTitle: this.loginTitle,
      forgotPass: false,
      register: false,
    };
    this.handleSubtitleClick = this.handleSubtitleClick.bind(this)
  }

  handleSubtitleClick(e) {
    if (e === this.registerTitle)
      this.setState({
        title: this.registerTitle,
        subTitle: this.loginTitle,
        btnTitle: this.registerTitle,
        forgotPass: false,
        register: true

      });
    else if (e === this.loginTitle)
      this.setState({
        title: this.loginTitle,
        subTitle: this.registerTitle,
        btnTitle: this.loginTitle,
        forgotPass: false,
        register: false

      });
    else if (e === this.forgotPassTitle)
      this.setState({
        btnTitle: this.forgotPassTitle,
        forgotPass: true,
        register: false
      });

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="centered card py-5">
            <div className="row mx-0">
              <div className="px-5 w-100 headline-container">

                <CSSTransition
                  in={this.state.forgotPass}
                  timeout={400}
                  classNames="fade"
                  appear
                  unmountOnExit
                >

                  <div className="d-flex justify-content-between align-items-baseline absolute-headline">
                    <h3 className="mb-3">Forgot Your Password?</h3>
                    <a href="#" className="d-flex justify-content-begin align-items-baseline" onClick={() => this.handleSubtitleClick(this.loginTitle)}>
                      <FontAwesomeIcon icon={faArrowLeft} size="xs" /> &nbsp;
                      <span>Back </span>
                    </a>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={!this.state.forgotPass}
                  timeout={400}
                  classNames="fade"
                  unmountOnExit
                >
                  <div className="d-flex justify-content-begin align-items-baseline">
                    <h3 className="mb-3">{this.state.title} </h3>
                    <span>&nbsp;/ <a href="#" onClick={() => this.handleSubtitleClick(this.state.subTitle)}>
                      {this.state.subTitle}
                    </a></span>
                  </div>
                </CSSTransition>
              </div>
            </div>
            <div className="row mx-0 d-flex mb-2">
              <div className="px-5 flex-fill">

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <CSSTransition
                  in={!this.state.forgotPass}
                  timeout={400}
                  classNames="fade-down"
                  appear
                  unmountOnExit
                >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" className="form-control" placeholder="••••••" />
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={this.state.register}
                  timeout={400}
                  classNames="fade-down"
                  unmountOnExit
                >
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">Password Again</span>
                    </div>
                    <input type="password" className="form-control" placeholder="••••••" />
                  </div>

                </CSSTransition>

                <div>
                  <CSSTransition
                    in={!this.state.forgotPass}
                    timeout={400}
                    classNames="strech"
                    appear
                  >
                    <button type="button" className="btn btn-primary">{this.state.btnTitle}</button>
                  </CSSTransition>
                </div>

              </div>
              <CSSTransition
                in={!this.state.forgotPass}
                timeout={400}
                classNames="fade-right"
                appear
              >
                <div className="d-flex border-left flex-column social-btns align-items-center">
                  <button class="social-login-btn social-login-btn-facebook mb-3">
                  Sign-in with Facebook
                </button>

                  <button class="social-login-btn social-login-btn-google mb-3">
                    Sign-in with Google
                </button>
                </div>
              </CSSTransition>


            </div>
            <div className="row mx-0">
              <div className="px-5 d-flex align-items-begin">
                <CSSTransition
                  in={!this.state.forgotPass}
                  timeout={400}
                  classNames="fade"
                  appear
                  unmountOnExit
                >
                  <a href="#" onClick={() => this.handleSubtitleClick(this.forgotPassTitle)}>forgot your password?</a>
                </CSSTransition>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



}

export default App;
