    import $ from '../_libs/jquery/dist/jquery.min';

    var module =
    {
        call: function (pAction, pMethod, pHeaders, pData) {
            return $.ajax({
                url: pAction,
                type: pMethod,
                cache: false,
                dataType: 'json',
                timeout: 60000,
                crossDomain: true,
                headers: pHeaders,
                data: pData
            });
        }
    };




    export default module;