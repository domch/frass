

    var module = {
        guid: function () {
            function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        getLocale:function(){
            var queryParam = this.getParameterByName('locale');
            var defaultLang = (navigator.language || navigator.userLanguage).substring(0, 2);

            return queryParam && queryParam !== "" ? queryParam : defaultLang;
        },
        getParameterByName: function (pName){
            var name = pName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };



    export default module;