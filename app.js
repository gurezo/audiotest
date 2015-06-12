function runNotification(num){
    //チャイム音再生
    //var oto = document.getElementById('sound-file');
  
    var oto = new Audio('chime.mp3');
  
    oto.play();
    
    //$("#sound-file").get(0).play();
}

/*
window.onload = function() {
  runNotification(0);
}
*/

window.addEventListener("click", function() {
  runNotification(0);
});

/*
window.addEventListener("load", function() {
  console.log("Hello World!");
});

*/