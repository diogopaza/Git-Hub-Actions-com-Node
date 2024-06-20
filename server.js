const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World DIOGO PAZA!');
});

const server = app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

setTimeout(() =>{    
    server.close()
    console.log("App concluído Teste de push 3");
}, 5000);




