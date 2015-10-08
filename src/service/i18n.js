
var Utils = require('../Utils.js'),
    moment = require('moment'),
    numeral = require('numeral');


//moment.locale(Utils.getLocale());
//numeral.language(Utils.getLocale());
var langFile = LangFile[Utils.getLocale()];


var module =
{
    langFile: null,

    init: function(pLangFile){
        module.langFile = pLangFile[Utils.getLocale()];
    },
    formatDate: function(pDate, pOptions){
        if(moment(pDate).isValid()){
            return moment(pDate).format("DD-MM-YYYY");
        }else return pDate;
    },
    formatNumber: function(pNumber, pOptions){
        return numeral(pNumber).format('0,0');
    },
    formatCurrency: function(pCurrency, pOptions){
        return numeral(pCurrency).format('0,0$');
    },
    formatPercentage: function(pPercentage, pOptions){
        return numeral(pPercentage).format('0,0%');
    },
    get: function(pKey, pOptions){
        return module.langFile[pKey];
    }
};


module.exports = module;