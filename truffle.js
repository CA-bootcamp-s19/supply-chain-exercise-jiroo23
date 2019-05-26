module.exports = {
//   compilers: {
//     solc: '0.4.25'
//   },  
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ganache: {
        host: "localhost",
        port: 7545,
        network_id: "*"
    }
  }
};
