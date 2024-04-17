const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
  // Handle multiple connection
  let args = data.toString().toLowerCase().split("\r\n");
        console.log(args);
        switch(args[2]){
            case "echo":
                console.log("Echoing");
                connection.write(args[3] + "\r\n" + args[4] + "\r\n");
                break;
            case "ping":
                console.log("Pinging");
                connection.write("+PONG\r\n");
                break;
            default:
                console.log("Command not found");
1
        }
  connection.on("end", () => {

    console.log("client disconnected");
  });
});

server.listen(6379, "127.0.0.1");
