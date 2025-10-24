import jwt from "jsonwebtoken";

/// Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }

    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized access" });
  }
};

export default authAdmin;
