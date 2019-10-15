import React from "react";
import Pic from './logo192.png';
import './item.css';
export default class Item extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div className="Item">


                <img src={Pic} className="Item" />
                <span className="WordName">hahahha</span>
            </div>
        )
    }


}
