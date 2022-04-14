var express = require('express')
var multer = require('multer')
var cors = require('cors')
var app = express();

app.options('*', cors())

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','"Origin, X-Requested-With, Content-Type, Accept"');
  next();
});

app.post('/upload', (req, res) => {
  console.log("request body : ",res.data);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/home/kaliappan/Documents/work/college/IEI/IEI-Website/backend/docs/")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single('userFile')
  upload(req, res, function (err) {
    console.log("request file : ");
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

var server = app.listen(3000, ()=>{
    console.log("port used", server.address().port);
})