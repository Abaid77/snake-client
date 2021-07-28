const net = require("net");
// establishes connection to game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.123', // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(`Server: ${message}`)
  });

  return conn;
};

module.exports = {
  connect
}