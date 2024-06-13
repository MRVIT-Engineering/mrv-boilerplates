import { server } from './router';

const PORT = 5001;

server.listen(PORT, () => {
  console.log('Server started listening on PORT ', PORT);
});
