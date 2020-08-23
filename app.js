require("dotenv").config()
const express        = require("express")
const app            = express()
const port           = process.env.PORT || 5000
const mongoose       = require("mongoose")
const bodyParser     = require("body-parser")
const cookieParser   = require("cookie-parser")
const cors           = require("cors")

//Routes
const authRoutes            = require("./routes/auth")
const noticeRoutes          = require("./routes/notice")
const principalRoutes       = require("./routes/principal")
const staffRoutes           = require("./routes/staff")
const albumRoutes           = require("./routes/album")
const albumPhotosRoutes     = require("./routes/albumPhotos")
const albumVideosRoutes     = require("./routes/albumVideos")
const headerPhotosRoutes    = require("./routes/headerPhotos")
const footerPhotosRoutes    = require("./routes/footerPhotos")
const letsGetInspiredRoutes = require("./routes/letsGetInspired")
const contactRoutes         = require("./routes/contact")
const admissionRoutes       = require("./routes/admission")
const academicRoutes        = require("./routes/academic")
const aboutRoutes           = require("./routes/about")

//mongodb://localhost:27017/school

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("MONGODB CONNECTED!")
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use("/api", authRoutes)
app.use("/api", noticeRoutes)
app.use("/api", principalRoutes)
app.use("/api", staffRoutes)
app.use("/api", albumRoutes)
app.use("/api", albumPhotosRoutes)
app.use("/api", albumVideosRoutes)
app.use("/api", headerPhotosRoutes)
app.use("/api", footerPhotosRoutes)
app.use("/api", letsGetInspiredRoutes)
app.use("/api", contactRoutes)
app.use("/api", admissionRoutes)
app.use("/api", academicRoutes)
app.use("/api", aboutRoutes)

app.listen(port, () => console.log("Server Started!"))