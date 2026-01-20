import {User} from "../models/userModel.js";

export const getAllUsers = ()=> User.find({});
export const getUserById = (id) => User.findById(id);
export const createUser = (data) => new User(data).save();
export const insertManyUsers = (data) => User.insertMany(data);
export const updateUser= (id ,data)=> User.findByIdAndUpdate(id, data, {new:true, runValidators:true});
export const deleteUser = (id)=>User.findByIdAndDelete(id);
export const deleteAllUsers = () => User.deleteMany({});


//export const loginUser= 
