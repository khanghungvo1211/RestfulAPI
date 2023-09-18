const express = require('express');
const bodyParser = require('body-parser');
let port = process.env.PORT || 3002;

const app = express();
app.use(bodyParser.json());
const noiDung = {
    "Truong:": "UIT",
    "DiaChi": "Thu Duc"
};

const noiDung2 = {
    "KTX:": "DHQG HCM",
    "DC": "Thu Duc",
    "Khu": "Khu A, Khu B"
};

app.get('/', (req, res) => {
    console.log('Sent school information successfully');
    res.send("hello myfriend");
})

app.get('/truong', (req, res) => {
    console.log('Sent school infor success');
    res.send(noiDung);
})

app.get('/ktx', (req, res) => {
    console.log('Sent school infor success');
    res.send(noiDung2);
})

app.listen(port, hostname, () => {
    console.log(`I'm listening on port ${port}`);
});