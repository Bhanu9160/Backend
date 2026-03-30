import jwt from "jsonwebtoken";

const SECRET = "mysecretkey";

const auth = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        // ✅ Check token exists
        if (!authHeader) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        // ✅ Extract token (remove "Bearer ")
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }

        // ✅ Verify token
        const decoded = jwt.verify(token, SECRET);

        req.user = decoded;
        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default auth;