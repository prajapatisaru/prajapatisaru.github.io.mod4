
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function (window) {
  var hellospeaker={};

  var speakword="Hello";
  hellospeaker. speak= function(names){
  console.log(speakword + " " + names);
}
window.hellospeaker=hellospeaker;
})(window);

(function (window) {
  var byespeaker={};

  var speakword="Good bye";
  byespeaker. speak= function(names){
  console.log(speakword+ " "+ names);
}
window.byespeaker=byespeaker;
})(window);

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);

  
  if (firstLetter == 'j'||firstLetter =='J') {
    console.log("Good Bye" + " " + names[i]);
  } else {
        console.log(" Hello" + " " + names[i]);

  }
}


