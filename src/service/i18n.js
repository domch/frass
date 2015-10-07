/**
 * A service
 *
 */
define(
[
    'common/Utils',
    '_res/i18n/lang',
    '_libs/moment/min/moment-with-locales.min',
    '_libs/numeraljs/min/numeral.min',
    '_libs/numeraljs/min/languages.min'
],
function (Utils, LangFile, moment, numeral)
{
    "use strict";

    //moment.locale(Utils.getLocale());
    //numeral.language(Utils.getLocale());
    var langFile = LangFile[Utils.getLocale()];


    var module =
    {
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
            return langFile[pKey];
        }
    }


    return module;
});