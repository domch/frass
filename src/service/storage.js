


    var module =
    {
        save: function(pKey, pData){
            window.localStorage[pKey] = JSON.stringify(pData);
        },
        load: function(pKey){
            return JSON.parse(window.localStorage[pKey]);
        }
    };






    export default module;