const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  // Handle multiple connection
  connection.on("data", (data) => {
    connection.write("+PONG\r\n");

    // connection.end();
  });
  connection.on("end", () => {

    console.log("client disconnected");
  });
});

server.listen(6379, "127.0.0.1");
