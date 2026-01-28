import {User} from "../models/userModel.js";
import bcrypt from"bcryptjs";
import jwt from "jsonwebtoken";

const hashPassword= async(password)=>{
    const salt =await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}
export const registerUser =async(userData)=>{
    const hashedPassword = await hashPassword(userData.password);
    const newUser = new User({  ...userData, password: hashedPassword});
    return await newUser.save();
}

export const loginUser= async(email,password)=>{
    const user = await User.findOne({email});
    if (!user) throw new Error("User not found");

    const isMatch =await bcrypt.compare(password,user.password);
    if (!isMatch) throw new Error ("invalid credentials");

    const token=jwt.sign(
       { id: user._id, email:user.email, role:user.role },
       
        process.env.JWT_SECRET,{ expiresIn:"1h"}
  );

    return { user, token };
};


export const updatePassword = async (id, oldPassword, newPassword) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  // בדיקה בטחונית: האם הוא יודע את הסיסמה הישנה?
  const isMatch = bcrypt.compareSync(oldPassword, user.password);
  if (!isMatch) throw new Error("Old password incorrect");

  user.password = await hashPassword(newPassword);
  return await user.save();
};



export const getAllUsers = ()=> User.find({});
export const getUserById = (id) => User.findById(id);
export const createUser = (data) => new User(data).save();
export const insertManyUsers = (data) => User.insertMany(data);
export const updateUser= (id ,data)=> User.findByIdAndUpdate(id, data, {new:true, runValidators:true});
export const deleteUser = (id)=>User.findByIdAndDelete(id);
export const deleteAllUsers = () => User.deleteMany({});

