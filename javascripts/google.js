---
---

var parsedURI = parseUri(window.location.href);

// address of site for use in Google search
var domainroot = parsedURI.protocol + "://" + parsedURI.authority + 
    "{{site.baseurl}}";

// set up search box to go to Google
function loadGoogle() {
    $("#google").on( "submit", function() {
        $( "#hiddenField" ).val(
            "site:" + domainroot + " " + $( "#textField" ).val()
        );
    });
    // remove placeholder text on first focus
    //$("#textField").on( "focus", function() {
	//	if ($("#textField").val() == "Search this document"){
	//		$("#textField").val(""); 
	//	}
	//});

};

$( document ).ready(loadGoogle);
