import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer"
import InfoList from './components/InfoList'

class App extends Component {
  constructor() {
    super();

    this.state = {
      displayList: [],
    };
  }
  componentDidMount() {
    axios
      .get("/api/maininfo")
      .then((res) => {
        this.setState({ displayList: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClick = (website, username, password) => {
    axios
    .post("/api/maininfo",{website, username, password})
    .then((res) => {
      this.setState({ displayList: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  handleDelete = (id) => {
    axios
    .delete(`/api/maininfo/${id}`)
    .then((res) => {
      this.setState({ displayList: res.data });
    })
    .catch((error) => {
      console.log(error);
    });

  }
  editPassword = (index, password) => {
    axios.put(`/api/maininfo/:{index}`, {password} )
    .then((res) => {
      this.setState({ displayList: res.data });
    })
    .catch((error) => {
      console.log(error);
    });

  }


  render() {
    const passwordlist = this.state.displayList.map((e) => (
      //Should be a button below onClick ={this.handleClick}
      <div className="dummydatabox" onDoubleClick={() => this.handleDelete(e.id)}> 
        <h2>Website: {e.website}</h2>
        <h2>Username: {e.username}</h2>
        <h2>Password: {e.password}</h2>
      </div>
    ));
    return (
      <div>
        <Header />
    <InfoList handleClick={this.handleClick}/>
        <div>{passwordlist}</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
