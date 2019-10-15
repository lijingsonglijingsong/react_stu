import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Search from './component/search'
import List from './component/list'
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
    try {
      const response = await axios.get(url);
      console.log(response);
      this.setState({
        "loadding": false,
        "repName": response.data.items[0].name,
        "link_Url": response.data.items[0].html_url
      })
    } catch (error) {
      console.error(error);
    }


  }

  render() {
    let { loadding, repName, link_Url } = this.state;


    return (
      // loadding ?
      //   <div>
      //     <h1>loading</h1>
      //   </div>
      //   :
      //   <div>

      //     <h1>最多的仓库 <a href={link_Url} >{repName}</a> </h1>

      //   </div>

      <div className="App">
        <Search />
        <List />
      </div>
    );



  }
}

export default App;
