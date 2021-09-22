// establishes a connection with the game server
const net = require("net");
const {host, port} = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host,// IP address here,
    port // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
 
  conn.on("connect", () => {
    console.log('QGG connected!');
    conn.write('Name: QGG');
    conn.write('Say: Hello Server')
  });

  conn.on("data", (data)=> {
    console.log(data);
  });

  return conn;
};


module.exports =  {
  connect
};