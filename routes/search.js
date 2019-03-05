import Orders from '../model/orders';

function searchPage(req, res) {
  const pageNumber = req.params.order;
  let offset = 0;
  let currentPage = 1;

  if(pageNumber) {
    if (!Number.isInteger(Number.parseInt(pageNumber)))
      res.redirect('/404');
    offset = (Number.parseInt(pageNumber) - 1) * 10;
    currentPage = Number.parseInt(pageNumber);
  }
  Orders.findAll({
    offset: offset,
    limit: 10,
    order: [['id', 'DESC']],
  }).then(function (orders) {
    if(orders.length === 0) {
      res.render('search', {
        orders: orders,
      }); // zero
    }
    else {
      const lastID = orders[orders.length - 1].id;
      createOrdersInfo(lastID, offset).then(function (ordersInfo) {
        res.render('search', {
          orders: orders,
          isFirstPage: ordersInfo.isFirstPage,
          isLastPage: ordersInfo.isLastPage,
          currentPage: currentPage,
        }); // ok
      });
    }
  }).catch(function () {
    res.redirect('404'); //some error 0_o
  });
}

async function createOrdersInfo (lastID, offset) {
  let isFirstPage = false;
  let isLastPage = false;

  if (offset === 0)
    isFirstPage = true;

  const minOrder = await Orders.findOne({
    order: ['id']
  });
  const minID = minOrder.id;

  if (minID === lastID) {
    isLastPage = true;
  }

  return  {
    isFirstPage: isFirstPage,
    isLastPage: isLastPage,
  };
}

export default searchPage;