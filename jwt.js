const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = function (req, res, next) {
  const token = req.header.authorization.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid token.");
  }
};


const generateToken= (userData)=>{
    return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn:30})

}











module.exports = {jwtAuthMiddleware, generateToken};
