import React from "react";
import './home.css';
import New from './New';
import Message from './Message';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
export default class Home extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        let name = "lisan";
        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes

            <div className="homeDiv">
                <h1>我是Home组件</h1>
                <div className="newsLable">
                    <ul className="newsTitle">
                        {/* <li >news</li> */}
                        <NavLink to={`/home/new/${name}`} activeClassName="activeNew">NEW</NavLink>
                    </ul>
                    <ul className="newsTitle">
                        {/* <li >messages</li> */}
                        <NavLink to='/home/message' activeClassName="activeNew">NESSAGE</NavLink>
                    </ul>
                </div>
                <div>
                    <Switch>
                        {/* 组件中间不能有空格 */}
                        <Route path='/home/new/:id' component={New}></Route>
                        <Route path='/home/message' component={Message}></Route>

                    </Switch>
                </div>







            </div>

        )
    }


}
