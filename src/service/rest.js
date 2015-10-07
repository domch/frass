/**
 * A service
 *
 */
define(
[
],
function ()
{
    "use strict";


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
                //contentType: "application/json;charset=UTF-8",
                data: pData
            });
        }
    }


    return module;
});