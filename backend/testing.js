const logo=require('../frontend/src/images/logo.png')

const myCloud = cloudinary.v2.uploader.upload(logo, {
    folder: "avatars",
    width: 150,
    crop: "scale",
});
  
  console.log(myCloud.folder);