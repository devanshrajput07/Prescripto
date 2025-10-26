import doctorModel from "../models/doctorModel.js";

// Change Doctor Availability
const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });

    res.status(200).json({ success: true, message: "Availability changed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Doctor List
const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password -__v -email");
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { changeAvailability, doctorList };
