async function isUp(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res.ok;
  } catch (err) {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { isUp };
