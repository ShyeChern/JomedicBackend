module.exports = (app) => {
  
    
    var adminC = require('../app/controller/JomMedic/Admin/adminController');
    //app.post -- "post" can be change to "get" 
  //                              adminfunction is function name created and exported in controller
    app.post('/adminquery',adminC.adminfunction);

    var customerC = require('../app/controller/JomMedic/Customer/customerController');
    app.post('customerquery',customerC.custfunction);

    var eWalletC = require('../app/controller/JomMedic/e_Wallet/ewalletController');
    app.post('ewalletquery',eWalletC.ewallfunction);
    
    var providerC = require('../app/controller/JomMedic/Provider/providerController');
    app.post('providerquery',providerC.providerfunction);
    
  };