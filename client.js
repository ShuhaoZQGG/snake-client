// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: '50542'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('QGG connected!')
    conn.write('Name: QGG')
    /*
    setTimeout(() => conn.write('Move: up'), 2000)
    setTimeout(() => conn.write('Move: down'), 4000)
    setTimeout(() => conn.write('Move: left'), 6000)
    setTimeout(() => conn.write('Move: right'), 8000)
    setTimeout(() => conn.write('Move: up'), 3000)
    setTimeout(() => conn.write('Move: up'), 9000)
    setInterval(() => conn.write('Move: up'), 1000)
    */
  });

  conn.on("data", (data)=> {
    console.log(data);
    
  })

  return conn;
};


module.exports =  {
  connect
};