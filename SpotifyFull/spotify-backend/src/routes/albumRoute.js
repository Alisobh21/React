import  {addAlbum,listAlbum,removeAlbum} from '../controllers/albumController.js'
import express from 'express'
import upload from '../middleware/multer.js'

const albumRoute = express.Router();

albumRoute.post('/add',upload.single('image'),addAlbum)
albumRoute.get('/list',listAlbum)
albumRoute.post('/remove',removeAlbum)



export default albumRoute