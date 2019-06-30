import server from './server';

server.listen(3100, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});