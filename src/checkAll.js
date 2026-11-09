const { isUp } = require("./ping");

async function checkAll(urls, timeoutMs = 5000) {
  const results = await Promise.all(urls.map((url) => isUp(url, timeoutMs)));
  return urls.filter((url, i) => results[i] === false);
}

module.exports = { checkAll };
