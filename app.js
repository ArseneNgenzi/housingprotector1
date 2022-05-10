const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/themes/constra/index.html'));
});

app.use(express.static("themes/constra")); // use files directly inside ``node_modules``
app.use(express.static("themes/constra/plugins"));


app.use('/', router);
app.listen(process.env.port || 4000);
// Log
console.log('started on port 4000');