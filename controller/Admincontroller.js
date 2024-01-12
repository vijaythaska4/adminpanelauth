import AdminSchame from "../Model/UserSchame.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
export default {

    Adminlogin: async (req, res) => {
        try {
            const admin = await AdminSchame.findOne({ email: req.body.email }, { role: 0 })
            if (!admin) {
                return res.status(401).json('Invalid Email')
            }
            // compare password with hashed password in database
            const validPass = await bcrypt.compareSync(req.body.password, admin.password);
            if (!validPass) {
                return res.status(401).json("invalid password");
            }
            let token = jwt.sign({ _id: admin._id }, process.env.SECRET_KEY, { expiresIn: "24h" })
            admin.token = token
            await admin.save()
            return res.status(200).send({
                message: 'Admin Login Successfully',
                data: admin,
                token: token
            })
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });

        }
    },

    Adminget: async (req, res) => {
        try {
            const user = await AdminSchame.find({ role: 0 });
            return res.status(200).send({
                message: "All Admin get successfully",
                data: user,
                success: true
            })
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },

    Adminupdate: async (req, res) => {
        try {
            const id = req.params.id
            const { body: { name, image, } } = req;
            const Admin = await AdminSchame.findByIdAndUpdate({_id:id }, { name, image } ,{new :true})
            if (!Admin) {
                return res.status(404).send('User not Found')
            }
            return res.status(200).send({
                message: 'Updated Succesfuly',
                data: Admin,
                success: true
            })
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });

        }
    },

    changepassword: async (req, res) => {
        try {
            const id = req.params.id
            const { currentPassword, newPassword, confirmPassword } = req.body
            const admin = await AdminSchame.findOne({ _id: id });

            if (!admin) {
                return res.status(404).send("Admin Not found")
            }
            const isPasswordMatch = await bcrypt.compare(currentPassword, admin.password)
            if (!isPasswordMatch) {
                return res.status(401).send("Incorrect current password")
            }
            if (newPassword !== confirmPassword) {
                return res.status(400).send("New Password and Confirm Password are not same")
            }
            const hashedNewPassword = await bcrypt.hash(newPassword, admin.password)
            admin.password = hashedNewPassword
            await admin.save()
            return res.status(200).json({
                message: "Password Updated Successfully"
            })

        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },
    Adminlogout: async (req, res) => {
        try {
            if (!req.user) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const logout = await AdminSchame.updateOne(
                { _id: req.user._id },
                {
                    $set: {
                        login_time: 0,
                    },
                    devceToken: "",
                }
            );
            if (!logout || logout.nModified === 0) throw new Error("User not found");
            return res.status(200).json({
                success: true,
                message: "Logout Successfully",
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    },

}