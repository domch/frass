
    import Utils from '../Utils'
    import moment from  '../_libs/moment/min/moment-with-locales.min';
    //import numeral from '../_libs/numeraljs/min/numeral.min';


    var module =
    {
        files: [],
        langFile: null,

        appendFile: function(pLangFile)
        {
            this.files.push(pLangFile);
            module.langFile = this.files.reduce(function(pCumulator, pCurrent)
            {
                for(var key in pCurrent[Utils.getLocale()])
                    if(pCurrent[Utils.getLocale()].hasOwnProperty(key))
                        pCumulator[key] = pCurrent[Utils.getLocale()][key];
                return pCumulator;
            }, {});
        },

        formatDate: function(pDate, pOptions){
            if(moment(pDate).isValid()){
                return moment(pDate).format("DD-MM-YYYY");
            }else return pDate;
        },
        /*
        formatNumber: function(pNumber, pOptions){
            return numeral(pNumber).format('0,0');
        },
        formatCurrency: function(pCurrency, pOptions){
            return numeral(pCurrency).format('0,0$');
        },
        formatPercentage: function(pPercentage, pOptions){
            return numeral(pPercentage).format('0,0%');
        },
        */
        get: function(pKey, pOptions){
            return langFile[pKey] ? langFile[pKey] : pKey;
        },
        getLocale: function(){
            return Utils.getLocale();
        }
    };




    export default module;