const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('NTBE Core Handled all requests and launched Toxic Bot.')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("server running")});
}
module.exports = keepAlive;