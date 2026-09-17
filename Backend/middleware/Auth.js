// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;

//   try {
//     jwt.verify(token, process.env.JWT_SECRET);
//     next();
//   } catch (error) {
//     res.json({ success: false, message: "Invalid Token" });
//   }
// };

// export default auth;

import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);
    console.log("JWT_SECRET EXISTS:", !!process.env.JWT_SECRET);

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("JWT VERIFIED:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("AUTH ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default auth;
