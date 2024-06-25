var startDate = new Date("July 01, 2020 00:01");
var endDate = new Date("November 30, 2020 23:59");
var msg = "<a href='https://moodle.rca.ac.uk/course/view.php?id=9&section=4' target='_blank' style='color:#0066cc'>Find out how to Reserve & Collect from the Neutral Zone, Kensington</a>";

var todayDate = new Date();

if (todayDate >= startDate && todayDate <= endDate) {
   var wrappedmsg = '<div id="systemMsg" class="systemMsg" style="padding:5px; text-align:center; background:#fff; width:100%; font-size:large">' + msg + '<span style="float:right; text-align:right;"></span></div>';
   jQuery('#content').prepend(wrappedmsg);
}
