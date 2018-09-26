const express = require('express');
const path = require('path');
const trans = require('./server/routes');

const app = express();
trans(app);

app.use(express.static(path.join( __dirname, '/kelp-reviewer/src')));
// app.all("*", (req, res, next)=> {
//     res.sendFile(path.resolve("./kelp-reviewer/public/index.html"))
// });

app.listen(3000, function(){
    console.log("listening on 3000");
})