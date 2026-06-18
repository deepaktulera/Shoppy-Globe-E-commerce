import jwt from "jsonwebtoken";

export function protect(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization token missing"
            });
        }

        // Supports both:
        // Authorization: Bearer <token>
        // Authorization: JWT <token>

        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader.startsWith("JWT ")
            ? authHeader.split(" ")[1]
            : null;

        if (!token) {
            return res.status(401).json({
                message: "Invalid authorization format"
            });
        }

        const decoded = jwt.verify(
            token,
            "Hello_World"
        );

        req.user = decoded;

        next();
    } catch (err) {
        console.error("JWT Error:", err.message);

        return res.status(401).json({
            message: err.message
        });
    }
}