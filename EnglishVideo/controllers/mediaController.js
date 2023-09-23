const Media = require("../models/Media");

exports.getAll = async (req, res) => {
  try {
    const media = await Media.find()
    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error)
  }
};


exports.create = async (req, res) => {
  const { name } = req.body
  let videosPath = []

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      videosPath.push('/' + video.path)
    }
  }

  try {
    const createdMedia = await Media.create({
      name,
      videos: videosPath
    })
    res.json({ message: "Media success fulie in the world ", createdMedia })
  } catch (error) {
    console.log(error);
    res.status(400).json(error)



  }
}
// 24:53 video