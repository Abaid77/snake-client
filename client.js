const net = require("net");
// establishes connection to game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: AB");
    // conn.write("Move: up")

  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
}