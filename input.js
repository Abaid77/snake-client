const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

let connection;



const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w" || key === "W") {
    connection.write("Move: up")
  }
  if (key === "a" || key === "A") {
    connection.write("Move: left")
  }
  if (key === "s" || key === "S") {
    connection.write("Move: down")
  }
  if (key === "d" || key === "D") {
    connection.write("Move: right")
  }
  if (key === "q" || key === "Q") {
    connection.write("Say: Yo!")
  }
  if (key === "z" || key === "Z") {
    connection.write("Say: Lol")
  }
};

module.exports = { setupInput }