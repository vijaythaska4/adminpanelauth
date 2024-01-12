import UserSchema from "../Model/UserSchame.js"
import bcrypt from "bcrypt"

export default {
    Usercreate: async (req, res) => {
        try {
            const { body: { role, name, email, password, status, image } } = req;
            if (!name || !email || !password) {
                return res.status(400).json({ msg: "name, email, and password are required" });
            }
            const existingUser = await UserSchema.findOne({ $or: [{ email }, { password }] });
            if (existingUser) {
                return res.status(409).send('User with the provided email or password already exists.');
            }
            const hash = await bcrypt.hash(password, 10)
            const user = await UserSchema.create({ role, name, email, password: hash, status, image });
            return res.status(200).send({
                data: user,
                message: "User created successfully",
                success: true
            });
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                success: false,
                error: error.message
            });
        }
    },

    Usergetall: async (req, res) => {
        try {
            const user = await UserSchema.find({ role: 1 });
            return res.status(200).send({
                message: "All user get successfully",
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

    Usergetidby: async (req, res) => {
        try {
            const id = req.params.id
            const user = await UserSchema.findById(id);
            if (!user) {
                return res.status(404).send("No user found");
            }
            return res.status(200).send({
                message: "Get user by Id Successfully",
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

    Userupdate: async (req, res) => {
        try {
            const id = req.params.id
            const { body: { name, image, } } = req;

            const user = await UserSchema.findByIdAndUpdate({ id }, { name, image })
            if (!user) {
                return res.status(404).send('User not Found')
            }
            return res.status(200).send({
                message: 'Updated Succesfuly',
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

    statusupdate: async (req, res) => {
        try {
            const id = req.params.id

            const user = await UserSchema.updateOne({ _id: id }, { status: req.body.status }, { new: true })
            if (!user) {
                return res.status(404).send('User not Found')
            }
            return res.status(200).send({
                message: 'status Updated Succesfuly',
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
    userdelete: async (req, res) => {
        try {
            const id = req.params.id
            const user = await UserSchema.findByIdAndRemove(id)
            if (!user) {
                return res.status(404).send('User not Found')
            }
            return res.status(200).send({
                message: 'Deleted Succesfuly',
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
    Dashbord: async (req, res) => {
        try {
            const User = await AdminSchema.countDocuments();
            const category = await CategorySchema.countDocuments();
            const Subcategory = await SubcategorySchema.countDocuments();

            return res.status(200).send({
                User,
                category,
                Subcategory
            })

        } catch (error) {
            return res.status(500).send({
                message: 'Internal Server Error',
                error: error.message
            })

        }
    },
};
