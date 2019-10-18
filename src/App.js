import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Search from './component/search';
//import List from './component/list';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import WrappedNormalLoginForm from './component/NormalLoginForm';
import { List, Avatar } from 'antd';
// function App() {



//   return (


//     <div>
//       <h1>app 应用</h1>
//     </div>
//   );
// }
class App extends React.Component {

  // state = {
  //   "loadding": true,
  //   "repName": "",
  //   "link_Url": ""
  // }
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      "loadding": true,
      "repName": "",
      "link_Url": ""
    }

  }

  async  componentDidMount() {

    let url = 'https://api.github.com/search/repositories?q=r&sort=stars';

    // axios 发起请求第一种方式
    // axios.get(url)
    //   .then((response) => {
    //     // handle success
    //     console.log(response);
    //     this.setState({
    //       "loadding": false,
    //       "repName": response.data.items[0].name,
    //       "link_Url": response.data.items[0].html_url
    //     })

    //     console.log(this.state.link_Url);

    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error + "好惨");
    //   })
    //   .finally(function () {
    //     // always executed
    //   });

    //发起请求的第二种方式：
    //   try {
    //     const response = await axios.get(url);
    //     console.log(response);
    //     this.setState({
    //       "loadding": false,
    //       "repName": response.data.items[0].name,
    //       "link_Url": response.data.items[0].html_url
    //     })
    //   } catch (error) {
    //     console.error(error);
    //   }


  }




  render() {
    let { loadding, repName, link_Url } = this.state;

    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];



    return (
      // loadding ?
      //   <div>
      //     <h1>loading</h1>
      //   </div>
      //   :
      //   <div>

      //     <h1>最多的仓库 <a href={link_Url} >{repName}</a> </h1>

      //   </div>

      //例子二，github搜索用户名，axios,pubsub,组件之间传参。
      // <div className="App">
      //   <Search />
      //   <List />
      // </div>



      //例子三   路由组件 以及路由组件的传参 broswerRouter  hashRouter  Router  link  nalink  switch  redict  params传参  props传参 
      // <div className="App">
      //   <h1>react-router Dome </h1>
      //   <hr></hr>
      //   <div className="content">


      //     <div className="titleLable">
      //       <div className="titleDiv">
      //         {/* <p className="title">about</p> */}
      //         <NavLink to='/about' className="title active" activeClassName="activeTime ">About</NavLink>


      //       </div>
      //       <div className="titleDiv" >
      //         {/* <p className="title">home</p> */}
      //         <NavLink to='/home' className="title" activeClassName="activeTime" >home</NavLink>
      //       </div>

      //     </div>
      //     <div className="rightcontent">

      //       <Switch>
      //         <Route path='/about' component={About}></Route>
      //         <Route path='/home' component={Home}></Route>
      //         <Redirect from='/' to='/about'></Redirect>
      //       </Switch>


      //     </div>
      //   </div>




      // </div>

      // <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, }} >
      //   <WrappedNormalLoginForm></WrappedNormalLoginForm>
      // </div >

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, }} >
        <List
          size="middle"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />


      </div>

    );



  }
}

export default App;
