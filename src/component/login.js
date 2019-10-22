import React from "react";
//import './login.css';
import './login.less';

export default class Login extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div className="login">
                <div className="loginHeader">
                    {/* <img src={} alt="logo"></img>
                    <h1>学习管理系统</h1> */}
                </div>
                <div className="loginContent"></div>
            </div>
        )
    }


}
