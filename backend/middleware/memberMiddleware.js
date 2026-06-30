const memberMiddleware = (req, res, next) => {
  if (req.user.role !== "member") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Members only.",
    });
  }

  next();
};

module.exports = memberMiddleware;