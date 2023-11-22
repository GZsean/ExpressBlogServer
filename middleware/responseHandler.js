function sendResponse(res, status, message, data) {
  const response = {
    status,
    message,
    data,
  };
  res.status(status).json(response);
}

module.exports = { sendResponse };
