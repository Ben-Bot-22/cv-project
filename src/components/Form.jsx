import React, {Component} from "react";
import GeneralInfo from "./GeneralInfo";

const styles = {
    border: '1.8px solid blue',
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '40%',
    padding: '0px 20px',
}

export default class Form extends Component {
  render() {
    return (
        <div style={styles}>
            <GeneralInfo />
        </div>
    );
  }
}