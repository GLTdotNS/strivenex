import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("49834723-dc96-41aa-bde3-91d451d91220");
  }

  render() {
    return null;
  }
}
export default CrispChat;
