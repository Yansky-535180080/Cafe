module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash("error_msg", "Login first please.");
      res.redirect("/users/login");
    },
  };
  