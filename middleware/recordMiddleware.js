const fs = require("fs");
const path = require("path");
function recordMiddleware(req, res, next) {
  // 获取url,ip
  let { url, ip } = req;
  // 将信息保存在文件中access.log
  fs.appendFileSync(
    path.resolve(__dirname, "../access.log"),
    `${url} ${ip}\r\n`,
  );
  next();
}

module.exports = { recordMiddleware };
