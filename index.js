const fs = require('fs');
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const activities = require("./activities.json");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function(req, res) {
    fs.writeFile(
        __dirname + "/data.text", req.body.activity, function () {
            res.send("投稿完了");
    });
});

app.post("/update", function(req, res){
    activities[0].activity = req.body.updatedActivity;
    res.send(activities);
});

app.post("/delete", function(req, res){
    activities.splice(req.body.number,1);
    res.send(activities);
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});