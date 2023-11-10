import { User } from "../model/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next) =>{
    const {name, password, email,role } = req.body;

    if (!name || !password || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
  
    try {
      const user = new User({
        name: name,
        password: hash,
        email: email,
        role:role
      });
      const savedUser = await user.save();
      if (!savedUser) {
        return res
          .status(500)
          .json({ message: "cannot create there is some error" });
      }
  
      return res.status(201).json({ savedUser });
    } catch (error) {
     next(error)
    }
  };

  //login
  export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
  
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
  
      const token = jwt.sign({ id: validUser._id, role: validUser.role }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json({ ...rest, role: validUser.role ,token:token}); 
    } catch (error) {
      next(error);
    }
  };
  