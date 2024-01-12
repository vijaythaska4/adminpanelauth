import mongoose from "mongoose";

const UserSchame = mongoose.Schema({
    role: { type: Number, enum: [0, 1], default: 1 }, //0 admin, 1 users
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    image: { type: String }

}, { timestamps: true })
export default mongoose.model("Users", UserSchame)