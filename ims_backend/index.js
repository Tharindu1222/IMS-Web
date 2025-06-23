const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const servicesController = require('./controller/servicesController')
const adminController = require('./controller/adminController')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config();

const app = express()

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://imscoatings.lk'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log('DB Err.')
    } else {
        console.log('DB Connected.')
    }
});


app.get('/hello', (req, res) => {
    return res.send('Hello')
})


app.post('/api/services', upload.single('image'), servicesController.addServices)
app.get('/api/services', servicesController.getServices)
app.delete('/api/services/:id', servicesController.deleteService)
app.put('/api/services/:id', upload.single('image'), servicesController.updateService)
app.get('/api/slider', servicesController.getSlider)

app.get('/admin/admins', adminController.getAdmins)
app.post('/admin/add', adminController.addAdmins)
app.post('/admin/login', adminController.loginAdmin)



app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend Running At Port ${process.env.PORT || 5000}`)
})