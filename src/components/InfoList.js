import { Component } from "react";
import InfoListItem from "./InfoListItem";


class InfoList extends Component {
    constructor(){
        super();

        this.state = {
            website: "",
            username: "",
            password: "",
            
        }
    }
    // handleClick(){
    //     axios
    //     .post("/api/maininfo")
    //     .then((res) => {
    //       this.setState({ website: res.data });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   }
    handleSubmit = (e) => {
        e.preventDefault()
        const {website,username,password} = this.state
        this.props.handleClick(website,username,password)
        this.setState({  website: "",
        username: "",
        password: ""

        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){


        return(
            <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    name="website"
                    placeholder="Website"
                    onChange={e => this.handleChange(e)}
                    />
                <input
                    name="username"
                    placeholder="Username"
                    onChange={e => this.handleChange(e)}
                    />
                <input
                    name="password"
                    placeholder="Password"
                    onChange={e => this.handleChange(e)}
                    />
                    <button type="submit">Add Website</button>

            </form>
            </div>
        )
        // <InfoListItem/>
            
        
    }
}
export default InfoList


