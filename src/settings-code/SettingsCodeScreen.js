import React, {Component} from 'react'

import {CodeDataRenderer} from "../global-input-component";
import {createMessageConnector} from "global-input-message";

import styles from "./SettingsCodeScreen.css";



export default class SettingsCodeScreen extends Component {
  constructor(props){
    super(props);
    this.connector=createMessageConnector();
  }


  render() {
    return (
      <div>
      <h1>Settings</h1>


      <div className="codeSettings settings">
        <div className="codeSettings record">


          <div className="label">
              <div className="labelContainer">

              Code AES Key:
              </div>
          </div>
          <div className="code">
            <CodeDataRenderer connector={this.connector} type="codeAES"/>
          </div>
        </div>





            <div className="codeSettings record">

              <div className="label">
                  <div className="labelContainer">

                  Session Group ID:
                  </div>
              </div>
              <div className="code">
                  <CodeDataRenderer connector={this.connector} type="sessionGroup"/>
              </div>
            </div>



            <div className="codeSettings record">

              <div className="label">
                  <div className="labelContainer">

                  API Key:
                  </div>
              </div>
              <div className="code">
                  <CodeDataRenderer connector={this.connector} type="apikey"/>
              </div>
            </div>



      </div>



      </div>
    );
  }
}
