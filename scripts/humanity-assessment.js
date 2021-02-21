/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */
window.onload = function() {
    /*your code*/

var humanityFactor =  Math.floor(Math.random() * (110 - 60 + 1)) + 60;

var theater = theaterJS(
  { autoplay: false, locale: "detect",
  "minSpeed": {
    "erase": 10,
    "type": 40
  },

  "maxSpeed": {
    "erase": 20,
    "type": 100
  }
})


theater
  .addActor('asad', { accuracy: 0.4 })
  .addScene('asad:Assessing your humanity . . . ', 500)
.addScene('asad:' + humanityFactor + " % ", 700)

 if (humanityFactor > 100) {
   theater.addScene('asad:It\'s been an <i>honor</i>. ', 600)
 }
if (humanityFactor > 69 && humanityFactor < 101) {
   theater.addScene('asad:Submission received. ', 600)
 }
if (69 == humanityFactor ) {
   theater.addScene('asad:<i>Nice</i>. Submission received. ', 600)
 }
if (69 > humanityFactor ) {
   theater.addScene('asad:Good-enough. Submission received. ', 600)
 }



document.querySelector("button").addEventListener(
  "click",
  function() {
    theater.play();
  },
  false
)
};