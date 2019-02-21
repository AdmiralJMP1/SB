function profilePage(req, res) {
  if(req.isAuthenticated()) {
    res.render('profile', {
      isAuthenticated: true,
      firstName: req.user.firstName,
      secondName: req.user.secondName,
    });
  } else {
    res.redirect('/signin');
  }

}

export default profilePage;