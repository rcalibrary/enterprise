var startDate = new Date("July 01, 2020 00:01");
var endDate = new Date("October 31, 2020 23:59");
var msg = "Hld message blah blah blah";

var todayDate = new Date();

if (todayDate >= startDate && todayDate <= endDate) {
   var wrappedmsg = '<div id="placeHold" class="ui-dialog-content ui-widget-content" style="padding:5px; text-align:center; background:#fff; width:100%; font-size:large">' + msg + '<span style="float:right; text-align:right;"></span></div>';
   jQuery('#content').prepend(wrappedmsg);
}
