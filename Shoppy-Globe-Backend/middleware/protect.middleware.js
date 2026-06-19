import jwt from "jsonwebtoken";

// middleware for protect private routes
export function protect(req, res, next) {
  try {
    // get authorization header
    const authHeader = req.headers.authorization;

    // check token is present or not
    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization token missing",
      });
    }

    // support both Bearer and JWT token format
    // example:
    // Bearer abc123
    // JWT abc123

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader.startsWith("JWT ")
        ? authHeader.split(" ")[1]
        : null;

    // if token format is wrong
    if (!token) {
      return res.status(401).json({
        message: "Invalid authorization format",
      });
    }

    // verify token using secret key
    const decoded = jwt.verify(token, process.env.SECURITY_KEY);

    // save user data in request object
    req.user = decoded;

    // go to next middleware or route
    next();
  } catch (err) {
    // show jwt error in terminal
    console.error("JWT Error:", err.message);

    // send error response
    return res.status(401).json({
      message: err.message,
    });
  }
}
