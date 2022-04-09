var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var uuidv4 = require('uuid/v4');

var registration_form = fs.readFileSync('/home/kaliappan/Documents/work/college/IEI/IEI-Website/pages/register/index.js');

var curr_id = uuidv4();
console.log(curr_id);
var upload_path = "home/kaliappan/Documents/work/college/IEI/documents/";

http.createServer(function (req, res) {
    if (req.url == '/uploadform'){
        res.writeHead(200);
        res.write(registration_form);
        return res.end();
    }
    else if (req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = upload_path+uuidv4();

            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('File uploaded and moved !!!');
                alert("Form submitted successfully !!!");
                res.end();
            });
        });
    }
}).listen(8086);
