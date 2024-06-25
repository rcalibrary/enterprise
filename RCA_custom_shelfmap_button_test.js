
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


// ShelfMap
jQuery(document).ready(function() {
  
  var validSMLocs=["1:ONSHELF","1:REFERENCE","1:QR","1:PAMPHLET","1:PER_CURR","1:OVERSIZE","1:EAP","1:DYSLEXIA","1:FUELRCA","1:CRLCC","CRL Core Collection - Library Study Room","zReference Material"];
  var pathname = window.location.pathname;
  var bibid = pathname.match(/SD_ILS:.*[0-9]/).toString().replace('SD_ILS:','');

  jQuery('tr.detailItemsTableRow td.detailItemsTable_CALLNUMBER').each(function () {              
       var Loc = jQuery(this).parent().find('td.detailItemsTable_LOCATION').text();    
       Loc = Loc.replace(/^\s+|\s+$/g, '');
       console.log(Loc);
       if(validSMLocs.indexOf(Loc) !== -1) {      
          console.log("Matched!");
          //jQuery( "<span id='shelfmap'><a href='https://app.shelfmap.co.uk/fp/fp?icode=44RCA&id=" + bibid + "' target='_blank' class='ShelfMap_anchor' title='Show item on ShelfMap'><img src='https://iainrca.github.io/summon/v2.svg' alt='ShelMap drop pin' height = '75px' width='75px'/>View Shelf Location</a></span></br>").insertAfter( jQuery(this) );
          //jQuery(this).append( "<span id='shelfmap'><a href='https://app.shelfmap.co.uk/fp/fp?icode=44RCA&id=" + bibid + "' target='_blank' class='ShelfMap_anchor' title='Show item on ShelfMap' style='float:right'><img src='https://iainrca.github.io/summon/v2.svg' alt='ShelMap drop pin' height = '75px' width='75px' style='float:right'/>View Shelf Location</a></span></br>" );         
          jQuery(this).append( "<span id='shelfmap'><a href='https://app.shelfmap.co.uk/fp/fp?icode=44RCA&id=" + bibid + "' target='_blank' class='ShelfMap_anchor' title='Show item on ShelfMap' style='float:right'>View Shelf Location</a></span></br>" );         
 
       }  
     });
 
});

  
