import React, { Component } from "react";

class registration extends Component {
    render() {
        return(
            <form>
                <h3>Name:</h3>
                First:
                <input type="text" name="name" placeholder="name"/>
                Last:
                <input type="text" name="name" placeholder="name"/>
                <h3>Username:</h3>
                <input type="text" name="name" placeholder="username"/>
                <h3>Password:</h3>
                New Password:
                <input type="text" name="password" placeholder="************"/>
                Re-Enter Password:
                <input type="text" name="password" placeholder="************"/>
                <br/>
                <button type="submit" name="submit">Submit</button>
                <hr/>

            </form>

        );
    }
}
export default registration;