var cache = {};
const caching = (req, res, next) => {
  const key = req.url;
  if (cache[key]) {
    res.send("from cache");
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache[key] = body;
      res.sendResponse(body);
    };
    next();
  }
};

module.exports = caching;
