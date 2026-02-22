"use strict";

const path = require("path");

const Plugin = {};

Plugin.addAdminScript = async function({ router, middleware }) {
  router.get('/admin/plugins/searchable-groups.js', middleware.admin.buildHeader, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.js'));
  });
};

module.exports = Plugin;
