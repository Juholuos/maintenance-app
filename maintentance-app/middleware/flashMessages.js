const flashMessage = (req, res, next) => {
  res.locals.flashMessages = {
    success: req.flash('success'),
    error: req.flash('error'),
  };
  next();
};

module.exports = flashMessage;
