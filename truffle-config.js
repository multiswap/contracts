module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  },
  compilers: {
    solc: {
      version: "0.6.12", // A version or constraint - Ex. "^0.5.0"
      //parser: "solcjs",  // Leverages solc-js purely for speedy parsing
      settings: {
        optimizer: {
          enabled: true,
          runs: 999999   // Optimize for how many times you intend to run the code
        },
        evmVersion: "istanbul"
      }
    }
  }
}