const withAuth = (req, res, next) => {
  // TODO: Remove the comment on Cookie once the session is working
  // const userId= req.session.userId;
  // const userId = Number(req?.cookies?.userId || "");
  const userId= req.session.userId;
  console.log("&&&&", userId);
  if (!userId) {
    res.redirect("/login");
  } else {
    // req.session.userId = userId;
    next();
  }
};
module.exports = withAuth;
