import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const time=new Date();
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DayName = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var thisMonth=monthName[time.getMonth()];
var thisDate=time.getDate();
var thisDay=DayName[time.getDay()];


var newItemArray = [];
var workItemArray = [];

app.get("/", function(req, res) {
    const data = {
        title:"Today",
        newItemStorage: newItemArray,
        newWorkItemStorage: workItemArray,
        month:thisMonth,
        date:thisDate,
        day:thisDay,        
    };
    res.render("index.ejs",data);
});


app.get("/works", function(req, res) {
    const data = {
        title:"Works",
        newItemStorage: newItemArray,
        newWorkItemStorage: workItemArray,
        month:thisMonth,
        date:thisDate,
        day:thisDay,        
    };
    res.render("works.ejs",data);
});


app.post("/", (req, res) => {
    console.log("use index")
    newItemArray.unshift(req.body["newItem"]);
    console.log(newItemArray)
    res.redirect("/");
    
});


app.post("/works", (req, res) => {
    console.log("use work")
    workItemArray.unshift(req.body["newWorkItem"]);
    console.log(workItemArray)
    res.redirect("/works");
    
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

