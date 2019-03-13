import React, { Component } from "react";
import styled from "styled-components";
import pass from "./assets/pass.png";
import fail from "./assets/fail.png";

const SApp = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const SProvider = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
`;

const SProviderName = styled.div`
  font-weight: bold;
`;

const SProviderCheck = styled.div`
  width: 40px;
  height: 40px;
  & img {
    width: 100%;
  }
`;

class App extends Component {
  state = {
    injectedWeb3: window.ethereum || window.web3,
    isMetaMask: window.web3 ? window.web3.currentProvider.isMetaMask : false,
    isTrust: window.web3 ? window.web3.currentProvider.isTrust : false,
    isToshi: window.web3 ? window.web3.currentProvider.isToshi : false,
    isCipher: window.web3 ? window.web3.currentProvider.isCipher : false,
    isImToken: window.web3 ? window.web3.currentProvider.isImToken : false,
    isStatus: window.web3 ? window.web3.currentProvider.isStatus : false,
    isTokenary: window.web3 ? window.web3.currentProvider.isTokenary : false
  };
  render() {
    return (
      <SApp>
        <SProvider>
          <SProviderName>{"Web3 Available"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.injectedWeb3 ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"Metamask"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isMetaMask ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"Trust"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isTrust ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"Coinbase"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isToshi ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"Cipher"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isCipher ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"imToken"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isImToken ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"Status"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isStatus ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>

        <SProvider>
          <SProviderName>{"Tokenary"}</SProviderName>
          <SProviderCheck>
            <img src={this.state.isTokenary ? pass : fail} alt="check" />
          </SProviderCheck>
        </SProvider>
      </SApp>
    );
  }
}

export default App;
