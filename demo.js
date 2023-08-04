var fs = require('fs');
var data = require('./data.json');
console.log(data.name); // here data act as object
fs.readFile('./data.json','utf-8', (err, data)=>{
   var data = JSON.parse(data);
    console.log(data.name); // here act as string
})

var data1 = {
  name: 'priyal Goel'
}

// fs.writeFile('data1.json', JSON.stringify(data1), (err)=>{
//   console.log("finished", err);
// });
