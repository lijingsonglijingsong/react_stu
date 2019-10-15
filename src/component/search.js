import React from "react";
import './search.css';
import Pubsub from "pubsub-js";
export default class Search extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='serach'

            >
                <h1>Search GitHub you</h1>

                <input ref={this.myRefs} className='input' placeholder="enter your name you serach" />
                <button onClick={this.handerSerch}>Search</button>
            </div>
        )
    }
    myRefs = React.createRef();
    handerSerch = () => {
        let content = this.myRefs.current.value;
        if (content === '') {
            alert("请输入数据")
        } else {
            Pubsub.publish("SEARCHNAME", content);
            this.myRefs.current.value = '';
        }

    }


}
