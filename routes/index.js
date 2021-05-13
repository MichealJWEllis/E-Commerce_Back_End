const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route Selected!</h1><h2>Please Select Route Correctly!</h2><ul><li>/categories</li><li>/products</li><li>/tags</li></ul>")
});

module.exports = router;