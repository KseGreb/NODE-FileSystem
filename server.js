
//READING

// const fs = require('fs');
// const data = fs.readFile('index.html', function(err, data){
//     if(err) throw err;
//     console.log(data.toString())
// })


//CREATE A NEW FILE

// const fs = require('fs');
// fs.writeFile('newFile.html', "This is my new file", function(err){
//     if(err) throw err;
// console.log("new file created")})



//APPENDING NEW INFORMATION

// const fs = require('fs');
// fs.appendFile('newFile.html', 'This is a new phrase I had added', function(err){
//     if(err) throw err;
//     console.log('new info added')
// })


//DELETING FILE


// const fs = require('fs');
// fs.unlink('newFile.html', function(err){
//     if(err) throw err;
//     console.log("File deleted")
// })




const http = require('http');
const fs = require('fs');


const server = http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data){
        res.write(data);
        res.end()
    })

})


server.listen(3000);
console.log("it's working")