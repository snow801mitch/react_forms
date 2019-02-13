import React, { Component } from "react";

class login extends Component {
  render() {
    return (
      <form>
        Username:
        <input type="text" name="text" value="" />
        <br />
        Password:
        <input type="text" name="text" value="" />
        <br/>
        <button type="submit" name="Submit">
          Submit
        </button>
        <hr/>
      </form>
    );
  }
}
export default login;
