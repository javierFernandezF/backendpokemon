const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try{
        const token = req.header("auth-token");
        if(!token) {
            return res.status(403).json({error: "Access denied."})
        }
    } catch (error) {
        return next(error)
    }
    
}

module.exports = { verifyToken };