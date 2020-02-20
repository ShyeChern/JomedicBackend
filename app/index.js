module.exports = (app) => {
  
    // var frontLayerDefend = require('../app/controller/FLD');
    // app.post('/query',frontLayerDefend.securityCheckPost);
    
    var adminC = require('../app/controller/JomMedic/Admin/adminController');
    var customerC = require('../app/controller/JomMedic/Customer/customerController');
    var eWalletC = require('../app/controller/JomMedic/e_Wallet/ewalletController');
    var providerC = require('../app/controller/JomMedic/Provider/providerController');
    
  };