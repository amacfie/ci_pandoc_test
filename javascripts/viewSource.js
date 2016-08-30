// create the "View source on Github" link by examining the URI
var parsedURI = parseUri(window.location.href);

var host = parsedURI.host;
var dir = parsedURI.directory;

var githubUsername = host.split(".")[0];
var githubReponame = dir.split("/")[1];

function setLink() {
    var fileName = $( "#viewSource" ).attr("href");

    var newLink = ("https://github.com/" + githubUsername + "/" +
                   githubReponame + "/blob/master/" + fileName);

    $( "#viewSource" ).attr("href", newLink);
}

$( document ).ready( setLink );
