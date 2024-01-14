const isTest=true;
var settings={};

if(isTest){
     settings = {
        "baseUrl" : 'https://5fc9346b2af77700165ae514.mockapi.io',
        "perPay":12,
        "currency":"₺"
    }
}else{
     settings = {
        "baseUrl" : 'https://5fc9346b2af77700165ae514.mockapi.io',
        "perPay":12

    }
}
  
   
  
  export { settings };
  