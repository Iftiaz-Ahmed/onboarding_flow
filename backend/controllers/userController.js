import userModel from "../models/userModel.js";

// Route for user signup

const loginUser = async (req, res) => {
    try {

        const {email, password} = req.body;

        // Checking if user exists
        const exists = await userModel.findOne({email});

        if (exists) {
            if (password == exists.password) {
                return res.json({success: true, data: exists});
            } else {
                return res.json({success: false, message: "Already a user, but password doesn't match!"});
            }
        }

        if (password.length < 8) {
            return res.json({success: false, message: "Password can't be less than 8 characters"});
        }

        const newUser = new userModel({
            email,
            password,
            aboutMe: "",
            birthdate: null,
            address: null,
            activeStep: 0
        })

        const user = await newUser.save()

        res.json({success: true, data: user})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// User data update

const updateUserData = async (req, res) => {
    try {
      const { email, aboutMe, birthdate, address, activeStep } = req.body;
  
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required to update user.",
        });
      }
  
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found with this email.",
        });
      }
  
      user.aboutMe = aboutMe;
      user.birthdate = birthdate;
      user.address = address;
      user.activeStep = activeStep;
  
      const updatedData = await user.save();
  
      return res.json({
        success: true,
        message: "Data updated successfully!",
        data: updatedData,
      });
  
    } catch (error) {
      console.error("Update user error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Internal server error",
      });
    }
};
  

//user list

const userList = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.json({
            success:true,
            users
        });
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

export {loginUser, updateUserData, userList}