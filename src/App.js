import React, { Component } from "react";
import * as Web3Modal from "web3modal";
import { detect } from "detect-browser";
import styled from "styled-components";
import * as windowMetadata from "@walletconnect/window-metadata";

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
    isMobile: Web3Modal.isMobile(),
    browser: detect(),
    checks: Web3Modal.checkInjectedProviders(),
    metadata: windowMetadata.getWindowMetadata(),
  };
  render() {
    const { isMobile, browser, checks, metadata } = this.state;
    console.log("isMobile", isMobile);
    console.log("browser", browser);
    console.log("checks", checks);
    console.log("metadata", metadata);
    const providerList = Object.keys(checks)
      .filter((x) => x !== x.injectedAvailable)
      .map((check) => Web3Modal.filterProviders("check", check));
    console.log("providerList", providerList);
    return (
      <SApp>
        <SResult>
          <SResultLabel>{"Touch points"}</SResultLabel>
          <SResultText>
            {window.navigator ? navigator.maxTouchPoints : "unknown"}
          </SResultText>
        </SResult>

        <SResult>
          <SResultLabel>{"Window Name"}</SResultLabel>
          <SResultText>{metadata.name ? metadata.name : "unknown"}</SResultText>
        </SResult>
        <SResult>
          <SResultLabel>{"Window Description"}</SResultLabel>
          <SResultText>
            {metadata.description ? metadata.description : "unknown"}
          </SResultText>
        </SResult>
        <SResult>
          <SResultLabel>{"Window Url"}</SResultLabel>
          <SResultText>{metadata.url ? metadata.url : "unknown"}</SResultText>
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
            <img src={checks.injectedAvailable ? pass : fail} alt="check" />
          </SResultImage>
        </SResult>
        {providerList.map((provider) => (
          <SResult key={provider.name}>
            <SResultLabel>{provider.name}</SResultLabel>
            <SResultImage>
              <img src={checks[provider.check] ? pass : fail} alt="check" />
            </SResultImage>
          </SResult>
        ))}
      </SApp>
    );
  }
}

export default App;
