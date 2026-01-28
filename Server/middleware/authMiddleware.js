import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // אמת את ה-token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // שמור את נתוני המשתמש ב-request
    req.user = decoded;
    
    // המשך לנתיב הבא
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Middleware להגנה על admin בלבד
export const adminMiddleware = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }
  next();
};
