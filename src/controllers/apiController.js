const RequestLog = require("../models/RequestLog");

exports.handleRequest = async (req, res) => {
  try {
    const { user_id, payload } = req.body;

    const newRequest = await RequestLog.create({
      user_id,
      payload
    });

    res.json({
      message: "Request accepted",
      data: newRequest
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await RequestLog.aggregate([
      {
        $group: {
          _id: "$user_id",
          totalRequests: { $sum: 1 }
        }
      }
    ]);

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};