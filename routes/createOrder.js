function createOrderPage(req, res) {
  if(req.isAuthenticated()) {
    let employer = false;
    if(req.user.role === 1){
      employer = true;
    }
    let errorsCode = "";
    if(req.params.errors){
      errorsCode = req.params.errors;
    }
    let errors = [];
    for(let i = 0; i < errorsCode.length; i++){
      if(errorsCode[i] === '0'){
        errors = ['Ошибка при добавлении заказа, повторите ввод'];
        break;
      }
      if(errorsCode[i] === '1'){
        errors.push('Цена должна быть целым числом');
      }
      if(errorsCode[i] === '2'){
        errors.push('Срок должен быть целым числом');
      }
      if(errorsCode[i] === '3'){
        errors.push('Заполните описание заказа');
      }
      if(errorsCode[i] === '4'){
        errors.push('Введите название заказа');
      }
    }
    res.render('createOrder', {
      employer: employer,
      errors: errors
    });
  } else {
    res.redirect('/signin');
  }
}

export default createOrderPage;