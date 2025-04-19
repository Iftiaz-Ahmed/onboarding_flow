import componentModel from "../models/componentModel.js";

// Route for component update

const updateComponent = async (req, res) => {
    try {

        const {secondStep, thirdStep } = req.body;

        const component = await componentModel.findOne({ name: "components" });

        component.secondStep = secondStep;
        component.thirdStep = thirdStep;

        const updatedComponent = await component.save();

        res.json({success: true})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// Component List
const getComponent = async (req, res) => {
    try {
        const component = await componentModel.find({});
        res.json({
            success:true,
            component
        });
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

export {updateComponent, getComponent}