const express = require('express');
const favicon = require('express-favicon');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});