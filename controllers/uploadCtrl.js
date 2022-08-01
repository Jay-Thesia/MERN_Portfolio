const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET,
  });
  
exports.postImage=(req, res) => {
    try {
      //
      console.log(req.files);
  
      if (!req.files || Object.keys(req.files).length == 0) {
        return res.status(400).send("no flies uploaded");
      }
  
      const file = req.files.file;
  
      if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({msg:"image is too big"});
      }
  
      if (
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/png" &&
        file.mimetype !== "image/gif" &&
        file.mimetype !== "image/svg+xml"&&
        file.mimetype !== "image/jpg"
      ) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "incorrect file format" });
      }
  
      cloudinary.v2.uploader.upload(
        file.tempFilePath,
        { folder: "Portfolio" },
        async (err, result) => {
          if (err) throw err;
  
          removeTmp(file.tempFilePath);
          res.json({ public_id: result.public_id, url: result.secure_url });
        }
      );
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }


exports.deleteImage=async (req, res) => {
    const { public_id } = req.body;
  
    try {
      if (!public_id) {
         return res.status(400).json({ msg: "no images selected" });
      }
  
      cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
        if (err) throw err;
        res.json({ msg: "image is deleted" });
      });
    } catch (err) {
      return res.status(500).json({ msg: error.message });
    }
  }

  const removeTmp = (path) => {
    fs.unlink(path, err => {
      if (err) throw err;
    });
  };
  