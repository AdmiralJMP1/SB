import Orders from '../model/orders';

function createOrderPage(req, res) {
  console.log(req.user.id);
  console.log(req.body.info);
  console.log(req.body.header);
  console.log(req.body.price);
  console.log(req.body.time);
  // let employer = false;
  // if(req.user.role === 1){
  //   employer = true;
  // }

  if(req.isAuthenticated() && req.user.role === 1) {
    let errors = "";
    if(req.body.price && !Number.isInteger(Number.parseInt(req.body.price))){
      errors += '1';
      // res.render('createOrder', { employer: employer });
    }
    if(req.body.time && !Number.isInteger(Number.parseInt(req.body.time))){
      errors += '2';
      // res.render('createOrder', { employer: employer });
    }
    if(!req.body.info || req.body.header === ""){
      errors += '3';
    }
    if(!req.body.header || req.body.header === "")
    {
      errors += '4';
    }
    if(errors.length !== 0){
      res.redirect('/create-order/' + errors);
      console.log("errors comes");
      return;
    }
    let data = {
      author: req.user.id,
      text: req.body.info,
      header: req.body.header,
      price: req.body.price !== "" ? Number.parseInt(req.body.price) : null,
      time: req.body.time !== "" ? Number.parseInt(req.body.time) : null,
    };
    console.log("adding");
    Orders.create(data).then(function (order) {
      if(order){
        res.redirect('/order/' + order.id);
      }
      else {
        errors = '0';
        res.redirect('/create-order/' + errors);
      }
    }).catch(function (err) {
      errors = '0';
      console.log(err);
      res.redirect('/create-order/' + errors);
    });
  } else {
    res.redirect('/create-order');
  }
}

export default createOrderPage;