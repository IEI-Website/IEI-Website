var express = require('express')
var multer = require('multer')
var cors = require('cors')
var fs = require('fs');
var app = express();
const merge = require('easy-pdf-merge');

var responseNo = 1;
app.options('*', cors())

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','"Origin, X-Requested-With, Content-Type, Accept"');
  next();
});

app.post('/upload', (req, res) => {
  console.log("request body : ",req.files);
  const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      const dirName = "/home/kaliappan/Documents/work/college/IEI/IEI-Website/backend/docs/"+Date.now() + '-' + Math.round(Math.random() * 1E9)
    fs.mkdirSync(dirName);
    console.log(dirName);
      cb(null,dirName);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  
  const upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    console.log("request file : ", req.files);
    if (err instanceof multer.MulterError) {
      console.log("Err ",err)
      return
        } else if (err) {
          console.log("err", err)
      // An unknown error occurred when uploading.
    }
    // console.log("res",res)
    res.send({"ret":"success"})
    // Everything went fine.
  })
})




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + file.originalname
    );
  },
});

var dir = "public";
var subDirectory = "public/uploads/";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  fs.mkdirSync(subDirectory);
}

var mergepdffilesupload = multer({storage:storage})


app.post('/mergepdf',mergepdffilesupload.array('userDoc',2),(req,res) => {
  const files = []
  outputFilePath = dir+"/response/response_"+responseNo+".pdf";
  responseNo++;
  if(req.files){
    req.files.forEach(file => {
      console.log(file.path)
      var filePath = file.path;
      console.log(file.path)
      if (!filePath.endsWith(".pdf")){
        fs.rename(filePath,filePath+".pdf", () => {
          console.log("\nFile Renamed!\n");
        });        
        filePath = filePath+".pdf";
      }
      files.push(filePath)
    });

      merge(files,outputFilePath, function (err) {
          files.forEach(file => {
        fs.unlink(file, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log('File deleted!');
        });
        });
          if (err) {
              return console.log(err)
          }
          console.log('Success')
      });
}
  });

var server = app.listen(3000, ()=>{
    console.log("port used", server.address().port);
})