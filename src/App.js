import React, { Component } from "react";
import Web3Connect from "web3connect";
import { detect } from "detect-browser";
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

const SResult = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
`;

const SResultLabel = styled.div`
  font-weight: bold;
`;

const SResultImage = styled.div`
  width: 40px;
  height: 40px;
  & img {
    width: 100%;
  }
`;

const SResultText = styled.div`
  width: 100px;
  height: 40px;
  text-align: right;
`;

class App extends Component {
  state = {
    isMobile: Web3Connect.isMobile(),
    browser: detect(),
    providers: Web3Connect.checkInjectedProviders(),
  };
  render() {
    const { isMobile, browser, providers } = this.state;
    console.log("browser", browser);
    return (
      <SApp>
        <SResult>
          <SResultLabel>{"Touch points"}</SResultLabel>
          <SResultText>
            {window.navigator ? navigator.maxTouchPoints : "unknown"}
          </SResultText>
        </SResult>

        <SResult>
          <SResultLabel>{"Browser Type"}</SResultLabel>
          <SResultText>{browser ? browser.type : "unknown"}</SResultText>
        </SResult>
        <SResult>
          <SResultLabel>{"Browser Name"}</SResultLabel>
          <SResultText>{browser ? browser.name : "unknown"}</SResultText>
        </SResult>
        <SResult>
          <SResultLabel>{"Browser Version"}</SResultLabel>
          <SResultText>{browser ? browser.version : "unknown"}</SResultText>
        </SResult>
        <SResult>
          <SResultLabel>{"Browser OS"}</SResultLabel>
          <SResultText>{browser ? browser.os : "unknown"}</SResultText>
        </SResult>
        <SResult>
          <SResultLabel>{"isMobile"}</SResultLabel>
          <SResultImage>
            <img src={isMobile ? pass : fail} alt="check" />
          </SResultImage>
        </SResult>
        <SResult>
          <SResultLabel>{"Web3 Available"}</SResultLabel>
          <SResultImage>
            <img src={providers.injectedAvailable ? pass : fail} alt="check" />
          </SResultImage>
        </SResult>
        {Web3Connect.providers.map((provider) => (
          <SResult key={provider.name}>
            <SResultLabel>{provider.name}</SResultLabel>
            <SResultImage>
              <img src={providers[provider.check] ? pass : fail} alt="check" />
            </SResultImage>
          </SResult>
        ))}
      </SApp>
    );
  }
}

export default App;
