import * as userService from "../services/userService.js";


export const getAllUsersController = async(req, res)=>{
    try{
        const users=await userService.getAllUsers();
        res.json(users);
    }catch(err){ res.status(500).json({message:err.message});}
};

export const getUserByIdController = async(req, res )=>{
    try{
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({message:"User not found"})
        res.json(user);
    }catch(err){res.status(500).json({ message:err.message});}
}

export const createUserController = async (req, res)=>{
    try{
        const newUser =await userService.createUser(req.body);
        res.status(201).json(newUser);
    }catch(err){res.status(400).json({message:"validation error: " + err.message});}
};
export const insertManyUsersController = async (req, res) => {
  try {
    const users = await userService.insertManyUsers(req.body);
    res.json(users);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const updateUserController = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.json(updated);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const deleteUserController = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const deleteAllUsersController = async (req, res) => {
  try {
    await userService.deleteAllUsers();
    res.json({ message: "All users deleted" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};


export const registerController = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const changePasswordController = async (req, res) => {
  try {
    const { id, oldPassword, newPassword } = req.body;
    await userService.updatePassword(id, oldPassword, newPassword);
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// קונטרולרים עתידיים
export const loginController = (req, res) => res.status(501).json({ message: "Not implemented yet" });
