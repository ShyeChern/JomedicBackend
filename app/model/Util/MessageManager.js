'use strict';

/*
    1 = success
*/
var MM = function(msg){
    
    this.msj = msg.msj;
}

var ress;

MM.showMessage = function(msg,result){
    
    if(msg != null  ){
        switch(msg) {
            
            case 'ER_DUP_ENTRY':
                ress = {status : "duplicate"};
                result(ress);
            break;

            case 'ER_NO_DEFAULT_FOR_FIELD':
                ress = {status : "emptyValue"};
                result(ress);
            break;

            case 'B':
                ress = {status : "incompleteDataReceived"};
                result(ress);
            break;

            case 'F':
                ress = {status : "fail"};
                result(ress);
            break;

            case '1':
                ress = {status : "success"};
                result(ress);
            break;

            case 'TXN':
                ress = {status : "ERROR901"};
                result(ress);
            break;

            case 'balQ':
                ress = {status : "QUOTAFULL"};
                result(ress);
            break;

            case 'ALR':
                ress = {status : "ALREADYREGISTER"};
                result(ress);
            break;

            case 'ER_BAD_FIELD_ERROR':
                ress = {status : "COLUMNWRONG"};
                result(ress);
            break;

            case 'NE':
                ress = {status : "NOTFOUND"};
                result(ress);
            break;

            case 'TQN':
                ress = {status : "TOTALQNULL"};
                result(ress);
            break;

            case 'QN':
                ress = {status : "QUOTANULL"};
                result(ress);
            break;

            case 'EXDE':
                ress = {status : "EMAILXDE"};
                result(ress);
            break;

            case 'PXDE':
                ress = {status : "PASSWORDWRONG"};
                result(ress);
            break;

            default :
                ress = {status : msg};
                result(ress);
            break;
        }

    }
    
}





module.exports = MM;