import jwt from "jsonwebtoken";

/// Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }

    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }
    next();
  } catch (error) {
        console.error('Auth error:', error.message);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authAdmin;
