
//    function autoFill() {
//	document.getElementById("q").placeholder = " Search the Catalogue";
//	}
//	window.onload=autoFill;

/* Change the Behaviour of the New Search Link so that it opens Summon in existing window so users can carry on searching.*/  

function summonback() {
const summonlink = "<a target='_self' href='https://rca.summon.serialssolutions.com/search'>New Search</a>";
document.getElementById('Quicksearch_NEWSEARCH').innerHTML = summonlink;
}
window.onload=summonback;


