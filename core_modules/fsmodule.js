const fs = require('fs');

// create file

fs.writeFile('demo.txt', 'hello, welcome to webskitters', function(err){

    if (err) {

        console.log(err)

    } else {

        console.log("file created succesfully")
    }
});

// read file

fs.readFile('demo.txt', 'utf-8', function(err, data){

    if (err) {

        console.log(err);

    } else {

        console.log('data', data);
    }

});

// update file

fs.appendFile('demo.txt', 'heelo welcome here, my name is suman', function(err){

    if (err) {

        console.log(err);

    } else {

        console.log("File updated successfully");
    }

})

//delete file

// fs.unlink( "demo.txt",function (err) {

//     if (err) {

//       console.log(err);

//     } else {

//       console.log("File deleted successfully");
//     }
//   }
// );



// path module

const path = require('path');

const pathobj = path.parse(__filename);

console.log(pathobj);
