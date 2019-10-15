import React from "react";
import Pubsub from "pubsub-js";
import Item from "./item";
import './list.css';
import axios from 'axios';
export default class List extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            firstView: true,
            loading: false,
            userArr: [],
            error: '',

        }
    }
    render() {
        let { firstView, loading, userArr, error } = this.state;
        if (firstView) {
            return <p>列表为空</p>
        } else if (loading) {
            return <p> loading ....</p>
        } else if (userArr.length) {
            return (
                <div className="List">
                    {
                        this.state.userArr.map((item, index) => {
                            return <Item key={index} userItem={item}></Item>
                        })
                    }

                </div>

            )
        } else if (error) {
            return <p>数据错误</p>
        } else {
            return <p>你获取不了我的数据</p>
        }

    }
    componentDidMount() {
        Pubsub.subscribe("SEARCHNAME", async (msg, searchContent) => {
            console.log(msg, searchContent);
            let url = 'https://api.github.com/search/users?q=${searchContent}';
            // axios.get(url)
            // .then((Response)=>{
            //     console
            // })
            this.setState({
                firstView: false,
                loading: true,

            })
            try {
                // let result = await axios.get(url);
                // console.log(result);
                // console.log(result.data);
                axios.get(url)
                    .then((response) => {
                        console.log(response);
                    })
                // this.setState({
                //     userArr: result.data.items,
                //     loading: false,
                // })

            } catch (error) {

                this.setState({
                    error: error,
                    loading: false,
                })
            }

        })
    }


}
