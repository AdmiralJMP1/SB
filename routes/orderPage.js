import Orders from '../model/orders';
import Users from '../model/users';

function orderPage(req, res) {
  const id = req.params.id;
  loadOrderInfo(id).then(function(info) {
    console.log(info);
    if (info) {
      res.render('order', {
        header: info.header,
        author: info.author,
        price: info.price,
        time: info.time,
        text: info.text,
      });
    }
    else {
      res.status('404',).render('404');
    }
  });
}

async function loadOrderInfo(id) {
  const order = await Orders.findByPk(id);
  if(order){
    const author = await Users.findByPk(order.author);
    if(author){
      const info = {
        header: order.header,
        author: author.firstName + " " + author.secondName,
        price: order.price,
        time: order.time,
        text: order.text,
      };
      return info;
    }
  }
  return false;
}

export default orderPage;
