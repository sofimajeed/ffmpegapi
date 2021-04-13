const express = require('express')
const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')
const multer = require('multer')
const bodyParser = require('body-parser')
const pathtoPublic = path.join(__dirname, "../Public");
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.json())
const fileUpload = require("express-fileupload");
const ffmpeg = require("fluent-ffmpeg");
app.use(express.static(pathtoPublic));



var storage = multer.diskStorage({
  destination: function (req, file, cb) {
        cb(null, '../Public/Uploads')
      },
      filename: function (req, file, cb) {
cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
})



//Mp42Mp3


// var uploadMp4 = multer({storage:storage})

//         app.post('/convert2mp3',uploadMp4.single('file'),(req,res,next) => {
//                 if(req.file){
//                         var output = Date.now() + "output.mp4"
                
//                         exec(`ffmpeg -i ${req.file.path} ${output}`, (error, stdout, stderr) => {
//                                 if (error) {
//                                         console.log(`error: ${error.message}`);
//                                         return;
//                                     }
//                                     else{
//                                             console.log("file is converted")
//                                             res.download(output,(err) => {
//                                                 if(err) throw err
                                
//                                                 fs.unlinkSync(req.file.path)
//                                                 fs.unlinkSync(output)
                                
//                                                 next()
                                
//             })
//         }
//         })
//     }
// })





//Trim Video
// var uploadVideo = multer({storage:storage})

//         app.post('/trim',uploadVideo.single('file'),(req,res,next) => {
//                 if(req.file){
//                         var output = Date.now() + "output.mp4"
                
//                         exec(`ffmpeg -i ${req.file.path}  -ss ${req.body.start} -to ${req.body.end}  ${output}`, (error, stdout, stderr) => {
//                                 if (error) {
//                                         console.log(`error: ${error.message}`);
//                                         return;
//                                     }
//                                     else{
//                                             console.log("file is converted")
//                                             res.download(output,(err) => {
//                                                 if(err) throw err
                                
//                                                 fs.unlinkSync(req.file.path)
//                                                 fs.unlinkSync(output)
                                
//                                                 next()
                                
//             })
//         }
//         })
//     }
// })








//Make Gif
// var uploadVideo2 = multer({storage:storage})

//         app.post('/gif',uploadVideo2.single('file'),(req,res,next) => {
//                 if(req.file){
//                         var output = Date.now() + "output.gif"
                
//                         exec(`ffmpeg -i ${req.file.path}  -ss ${req.body.start} -to ${req.body.end}  -vf "fps=10,scale=320:-2:flags=lanczos" ${output}`, (error, stdout, stderr) => {
//                                 if (error) {
//                                         console.log(`error: ${error.message}`);
//                                         return;
//                                     }
//                                     else{
//                                             console.log("file is converted")
//                                             res.download(output,(err) => {
//                                                 if(err) throw err
                                
//                                                 fs.unlinkSync(req.file.path)
//                                                 fs.unlinkSync(output)
                                
//                                                 next()
                                
//             })
//         }
//         })
//     }
// })





//Trim Video
// var uploadVideo3 = multer({storage:storage})

//         app.post('/trimconcat',uploadVideo3.single('file'),(req,res,next) => {
//                 if(req.file){
//                         var output = Date.now() + "output.mp4"
                
//                         exec(`ffmpeg -i ${req.file.path} -filter_complex \
//                         "[0:v]trim=duration=3[av];[0:a]atrim=duration=3[aa];\
//                          [0:v]trim=start=4:end=5,setpts=PTS-STARTPTS[bv];\
//                          [0:a]atrim=start=4:end=5,asetpts=PTS-STARTPTS[ba];\
//                          [av][bv]concat[cv];[aa][ba]concat=v=0:a=1[ca];\
//                          [0:v]trim=start=8,setpts=PTS-STARTPTS[dv];\
//                          [0:a]atrim=start=8,asetpts=PTS-STARTPTS[da];\
//                          [cv][dv]concat[outv];[ca][da]concat=v=0:a=1[outa]" -map [outv] -map [outa] ${output}`, (error, stdout, stderr) => {
//                                 if (error) {
//                                         console.log(`error: ${error.message}`);
//                                         return;
//                                     }
//                                     else{
//                                             console.log("file is converted")
//                                             res.download(output,(err) => {
//                                                 if(err) throw err
                                
//                                                 fs.unlinkSync(req.file.path)
//                                                 fs.unlinkSync(output)
                                
//                                                 next()
                                
//             })
//         }
//         })
//     }
// })






//Add Text

// var uploadVideo4 = multer({storage:storage})

//         app.post('/text',uploadVideo4.single('file'),(req,res,next) => {
//                 if(req.file){
//                         var output = Date.now() + "output.mp4"
                
//                         exec(`ffmpeg -i ${req.file.path} -vf "drawtext=text='Centered Text':x=(w-text_w)/2:y=(h-text_h)/2:fontsize=24:fontcolor=white" -c:a copy ${output}
//                         `, (error, stdout, stderr) => {
//                                 if (error) {
//                                         console.log(`error: ${error.message}`);
//                                         return;
//                                     }
//                                     else{
//                                             console.log("file is converted")
//                                             res.download(output,(err) => {
//                                                 if(err) throw err
                                
//                                                 fs.unlinkSync(req.file.path)
//                                                 fs.unlinkSync(output)
                                
//                                                 next()
                                
//             })
//         }
//         })
//     }
// })










//Create Poster

var uploadVideo3 = multer({storage:storage})

        app.post('/poster',uploadVideo3.single('file'),(req,res,next) => {
                if(req.file){
                        var output = Date.now() + "output.jpg"
                
                        exec(`ffmpeg -i ${req.file.path} -ss ${req.body.start} -vframes 1 -q:v 2 ${output}`, (error, stdout, stderr) => {
                                if (error) {
                                        console.log(`error: ${error.message}`);
                                        return;
                                    }
                                    else{
                                            console.log("file is converted")
                                            res.download(output,(err) => {
                                                if(err) throw err
                                
                                                fs.unlinkSync(req.file.path)
                                                fs.unlinkSync(output)
                                
                                                next()
                                
            })
        }
        })
    }
})









//Video from Images
//  var imglist = ""

// var imglistFilePath = '../Public/Uploads/' + Date.now() + 'imglist.txt'

// var imgoutputFilePath = Date.now() + 'output.mp4'

// const imgvideoFilter = function(req, file, cb) {
//       if (!file.originalname.match(/\.(jpg)$/)) {
//             req.fileValidationError = 'Only video files are allowed!';
//             return cb(new Error('Only video files are allowed!'), false);
//           }
//           cb(null, true);
//         };

// var imguploadVideos = multer({storage:storage,fileFilter:imgvideoFilter})
        
        
// app.post('/mergeimg',imguploadVideos.array('files',1000),(req,res) => {
//       if(req.files){
        
//               req.files.forEach(file => {
            
//                       imglist += `file ${file.filename}`
//                       imglist += "\n"
            
//                   });
            
//                   var writeStream = fs.createWriteStream(imglistFilePath)
            
//                   writeStream.write(imglist)
            
//                   writeStream.end()
            
//                   exec(`ffmpeg -i ${imglistFilePath} ${imgoutputFilePath}`, (error, stdout, stderr) => {
                
//                           if (error) {
//                                   console.log(`error: ${error.message}`);
//                                   return;
//                               }
//                               else{
//                                       console.log("videos are successfully merged")
//                                   res.download(outputFilePath,(err) => {
//                                           if(err) throw err
                            
//                                           req.files.forEach(file => {
//                   fs.unlinkSync(file.path)                    
//               });

//               fs.unlinkSync(imglistFilePath)
//               fs.unlinkSync(outputFilePath)



//           })
//       }

//       })
//   }
// })








//Video Merge

// var list = ""

// var listFilePath = '../Public/Uploads/' + Date.now() + 'list.txt'

// var outputFilePath = Date.now() + 'output.mp4'

// const videoFilter = function(req, file, cb) {
//       if (!file.originalname.match(/\.(mp4)$/)) {
//             req.fileValidationError = 'Only video files are allowed!';
//             return cb(new Error('Only video files are allowed!'), false);
//           }
//           cb(null, true);
//         };

// var uploadVideos = multer({storage:storage,fileFilter:videoFilter})
        
        
// app.post('/merge',uploadVideos.array('files',1000),(req,res) => {
//       if(req.files){
        
//               req.files.forEach(file => {
            
//                       list += `file ${file.filename}`
//                       list += "\n"
            
//                   });
            
//                   var writeStream = fs.createWriteStream(listFilePath)
            
//                   writeStream.write(list)
            
//                   writeStream.end()
            
//                   exec(`ffmpeg -safe 0 -f concat -i ${listFilePath} -c copy ${outputFilePath}`, (error, stdout, stderr) => {
                
//                           if (error) {
//                                   console.log(`error: ${error.message}`);
//                                   return;
//                               }
//                               else{
//                                       console.log("videos are successfully merged")
//                                   res.download(outputFilePath,(err) => {
//                                           if(err) throw err
                            
//                                           req.files.forEach(file => {
//                   fs.unlinkSync(file.path)                    
//               });

//               fs.unlinkSync(listFilePath)
//               fs.unlinkSync(outputFilePath)



//           })
//       }

//       })
//   }
// })












// //Video conversion

// app.use(
//     fileUpload({
//         useTempFiles: true,
//         tempFileDir: "/Public/Uploads/",
//     })
// );
// ffmpeg.setFfmpegPath("C:/users/ffmpeg/bin/ffmpeg.exe");

// ffmpeg.setFfprobePath("C:/users/ffmpeg/bin");

// ffmpeg.setFlvtoolPath("C:/users/flvtool");

// app.post("/convert", (req, res) => {
//     let to = req.body.to;
//     let file = req.files.file;
//     let fileName = `output.${to}`;
//     console.log(to);
//     console.log(file);
  
//     file.mv("../Public/Uploads" + file.name, function (err) {
//       if (err) return res.sendStatus(500).send(err);
//       console.log("File Uploaded successfully");
//     });
  

//     ffmpeg("../Public/Uploads" + file.name)
//       .withOutputFormat(to)
//       .on("end", function (stdout, stderr) {
//         console.log("Finished");
//         res.download(__dirname + fileName, function (err) {
//           if (err) throw err;
  
//           fs.unlink(__dirname + fileName, function (err) {
//             if (err) throw err;
//             console.log("File deleted");
//           });
//         });
//         fs.unlink("../Public/Uploads" + file.name, function (err) {
//           if (err) throw err;
//           console.log("File deleted");
//         });
//       })
//       .on("error", function (err) {
//         console.log("an error happened: " + err.message);
//         fs.unlink("../Public/Uploads" + file.name, function (err) {
//           if (err) throw err;
//           console.log("File deleted");
//         });
//       })
//       .saveToFile(__dirname + fileName);
//   });













app.listen(PORT,() => {
    console.log(`App is listening on Port ${PORT}`)
})