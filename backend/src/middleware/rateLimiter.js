import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // ✅ Skip rate limiting in development
    if (process.env.NODE_ENV !== "production") {
      return next();
    }

    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error.message);
    next(); // ✅ Don’t break your app if rate limit fails
  }
};

export default rateLimiter;
