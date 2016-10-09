// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function(window) {

var byeSpeaker = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
// Exposed the 'byeSpeaker' object to the global scope.
window.byeSpeaker = byeSpeaker;

})(window)