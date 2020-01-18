const providers = [
  {
    name: "Web3",
    type: "injected",
    check: "isWeb3"
  },
  {
    name: "WalletConnect",
    type: "qrcode",
    check: "isWalletConnect"
  },
  {
    name: "MetaMask",
    type: "injected",
    check: "isMetaMask"
  },
  {
    name: "Safe",
    type: "injected",
    check: "isSafe"
  },
  {
    name: "Nifty",
    type: "injected",
    check: "isNiftyWallet"
  },
  {
    name: "Squarelink",
    type: "web",
    check: "isSquarelink"
  },
  {
    name: "Portis",
    type: "web",
    check: "isPortis"
  },
  {
    name: "Fortmatic",
    type: "web",
    check: "isFortmatic"
  },
  {
    name: "Arkane",
    type: "web",
    check: "isArkane"
  },
  {
    name: "Dapper",
    type: "injected",
    check: "isDapper"
  },
  {
    name: "Opera",
    type: "injected",
    check: "isOpera"
  },
  {
    name: "Trust",
    type: "injected",
    check: "isTrust"
  },
  {
    name: "Coinbase",
    type: "injected",
    check: "isToshi"
  },
  {
    name: "Cipher",
    type: "injected",
    check: "isCipher"
  },
  {
    name: "imToken",
    type: "injected",
    check: "isImToken"
  },
  {
    name: "Status",
    type: "injected",
    check: "isStatus"
  },
  {
    name: "Tokenary",
    type: "injected",
    check: "isTokenary"
  },
  {
    name: "Google",
    type: "web",
    check: "isTorus"
  },
  {
    name: "Authereum",
    type: "web",
    check: "isAuthereum"
  }
];

export default providers;
