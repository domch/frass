


var module =
{
    save: function(pKey, pData){
        localStorage[pKey] = JSON.stringify(pData);
    },
    load: function(pKey){
        return JSON.parse(localStorage[pKey]);
    }
};


module.exports = module;