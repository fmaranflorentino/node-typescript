import app from './app';
import http from 'http';

const normalizePort = (val: any) => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  };

  
  
  const port = normalizePort(process.env.PORT || "3000");
  app.set("port", port);
  
  const server = http.createServer(app);

  export default server;
  