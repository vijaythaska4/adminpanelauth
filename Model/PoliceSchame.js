import mongoose from 'mongoose'

const About = mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,

    },
    type: {
        type: String,
        enum: ["0", "1", "2"]
    }
})
export default mongoose.model("About", About)
