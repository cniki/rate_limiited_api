const rateLimitMap = new Map();

const RATE_LIMIT = 5;
const WINDOW_TIME = 60 * 1000; // 1 minute

const rateLimiter = (req, res, next) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ message: "user_id is required" });
  }

  const currentTime = Date.now();

  if (!rateLimitMap.has(user_id)) {
    rateLimitMap.set(user_id, []);
  }

  let userRequests = rateLimitMap.get(user_id);

  // Remove requests older than 1 min
  userRequests = userRequests.filter(
    (timestamp) => currentTime - timestamp < WINDOW_TIME
  );

  if (userRequests.length >= RATE_LIMIT) {
    return res.status(429).json({
      message: "Rate limit exceeded. Max 5 requests per minute."
    });
  }

  userRequests.push(currentTime);
  rateLimitMap.set(user_id, userRequests);

  next();
};

module.exports = rateLimiter;