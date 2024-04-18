const net = require("net");
let map = new Map();
// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer((connection) => {
    connection.on("data", (data) => {
        let args = data.toString().toLowerCase().split("\r\n");
        console.log("args",args);
        switch(args[2]){
            case "echo":
                console.log("Echoing");
                console.log("args[3]",args[3]);
                connection.write(args[3] + "\r\n" + args[4] + "\r\n");
                break;
            case "ping":
                console.log("Pinging");
                connection.write("+PONG\r\n");
                break;
            case "set":
                console.log("Set command");
                map.set(args[4], args[6]);
                if (args[3]) {
                    const cmd = args[8];
                    console.log("cmd",cmd)
                    if (cmd === 'px') {
                        const ms = parseInt(args[10]);
                        console.log("ms",ms);
                        setTimeout(() => {
                            console.log('delete', args[4]);
                            map.delete(args[4]);
                        }, ms);
                    }
    
                }
                connection.write("+OK\r\n");
                break;
            case "get":
                console.log("Get command");
                let val = map.get(args[4]);
                if(val === undefined){
                    connection.write("$-1\r\n");
                } else {
                    connection.write(`$${val.length}\r\n${val}\r\n`);
                }
                break;
            default:
                console.log("Command not found");
        }
    });
    console.log("Client connected");
  });

server.listen(6379, "127.0.0.1");
