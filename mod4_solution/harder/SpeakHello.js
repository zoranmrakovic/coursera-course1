// Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function(window) {

var helloSpeaker = {};
var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
// Exposed the 'helloSpeaker' object to the global scope.
window.helloSpeaker = helloSpeaker;

})(window)