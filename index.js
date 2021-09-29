let http = require('http');
let employee = require("./Employee")
let employeeName = require("./EmployeeNames")
let totalSalary = require("./totalSalary.js")
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8089

//Create Web Server using CORE API
var server = http.createServer((req,res) => {

    if(req.url == '/'){
        res.write("<h1>Welcome To Lab Exercise 03</h1>")
        res.end()
    }
    // http://localhost:/name
    if(req.url == '/employee'){
        let e = JSON.stringify(employee, null, 5)
        res.write(e)
        res.end()
    }
    if (req.url === '/employee/names') {
        let eN = JSON.stringify(employeeName, null, 5)
        res.write(eN)
        res.end()
    }
    if (req.url === '/employee/totalsalary') {
        let Ts = JSON.stringify(totalSalary, null, 5)
        res.write(Ts)
        res.end()

    }

}).listen(port)

//server.listen(8088)

console.log('Server running at port http://localhost:' + port)