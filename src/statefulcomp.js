import { Component } from "react";
import ChildComp from "./childcomp";

class StatefulComp extends Component{
    state = {
        firstname : "Yasir",
        lastname : "Hassan"
    }

    handleclick(){
        this.setState({
            f:"Yasirco-33"
        });
        this.state.firstname = "Yasirco-33";
        console.log(this.state.firstname);
    }

    render(){
        return(
            <div>
                <p>I have a memory power to consume and store data...</p>
                <ChildComp firstname = {this.state.firstname} lastname = {this.state.lastname} />
                <button onClick = {()=> this.handleclick()}>Change Name</button>

            </div>
        );

    }
}
export default StatefulComp;