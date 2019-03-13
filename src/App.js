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
  font-size: 18px;
  color: white;
  padding: 20px 40px;
`;

const SProvider = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 5px auto;
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

const web3Providers = [
  {
    name: "Metamask",
    check: "isMetaMask"
  },
  {
    name: "Trust",
    check: "isTrust"
  },
  {
    name: "Coinbase",
    chec: "isToshi"
  },
  {
    name: "Cipher",
    chec: "isCipher"
  },
  {
    name: "imToken",
    chec: "isImToken"
  },
  {
    name: "Status",
    chec: "isStatus"
  },
  {
    name: "Tokenary",
    chec: "isTokenary"
  }
];

function checkWeb3Providers() {
  let result = {
    injectedWeb3: window.ethereum || window.web3
  };

  if (result.injectedWeb3) {
    web3Providers.forEach(provider => {
      result[provider.check] =
        window.ethereum[provider.check] ||
        window.web3.currentProvider[provider.check];
    });
  }

  return result;
}

class App extends Component {
  state = {
    ...checkWeb3Providers()
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
        {web3Providers.map(provider => (
          <SProvider>
            <SProviderName>{provider.name}</SProviderName>
            <SProviderCheck>
              <img src={this.state[provider.check] ? pass : fail} alt="check" />
            </SProviderCheck>
          </SProvider>
        ))}
      </SApp>
    );
  }
}

export default App;
