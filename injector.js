var tag = document.createElement('script');
tag.src = "emotes.js";
var lastScript = document.getElementsByTagName('script').length -1;
var lastScriptTag = document.getElementsByTagName('script')[lastScript];
lastScriptTag.parentNode.insertBefore(tag, lastScriptTag);