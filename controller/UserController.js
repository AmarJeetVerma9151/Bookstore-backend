import User from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = "amar1090"



export const singup = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        const users = await User.findOne({ email })
        if (users) {
            return res.status(400).json({ message: "User already exists" })
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = await User.create({
            fullname: fullname,
            email: email,
            password: hashPassword,
            role: role
        })

        res.status(200).json({ message: "User created successfully", success: true, createUser })
    } catch (error) {
        // console.log("Error:", error:error.message);
        res.status(500).json({ message: "Internal server error", success: false, error: error.message })

    }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ message: "Invalid email or password", success: false });
        }

        const matchPassword = await bcryptjs.compare(password, user.password);
        if (!matchPassword) {
            return res.json({ message: "Invalid email or password", success: false });
        }
        if (user.role != role) {
            return res.json({ message: "Invalid role", success: false });
        }

        const token = jwt.sign({ _id: user._id }, JWT_SECRET);

        return res.json({
            message: "Login successfully",
            success: true,
            token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};




export const update = async (req, res) => {
    const { fullname, password } = req.body
    try {
        const id = req.user._id
        if (password) {
            var hashPassword = await bcryptjs.hash(password, 10)
        }
        const update = await User.findByIdAndUpdate(id, { $set: { fullname, password: hashPassword } })
        if (update) {
            res.json({ message: "User updated successfully", update })
        } else {
            res.json({ message: "User not found", update })
        }
    } catch (error) {
        res.json({ msg: "error", error: error.message })
    };
}

export const deleteuser = async (req, res) => {
    try {
        const userId = req.user._id
        const deleteUser = await User.findByIdAndDelete(userId)
        if (deleteUser) {
            res.json({ message: "User deleted successfully", deleteUser })
        } else {
            res.json({ msg: "error in deleteing user", success: false, error: error.message })
        }
    } catch (error) {
        res.json({ msg: "error" })
    }
}