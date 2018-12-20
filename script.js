//var arr = document.getElementsByTagName("p");

//for (var x = 0; x < arr.length; x++) {
//  arr[x].innerHTML = "HELLO";
//}

//var arr2 = document.getElementsByTagName("title");

//for (var x = 0; x < arr2.length; x++) {
//  arr2[x].innerHTML = "HELLO";
//}

function move() {
  pos+=1;
  box.style.left=pos+"px";
}

var paragraphs = document.getElementsByTag("p");
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].onmouseover = function() {
    paragraphs[i].setInterval(move, 10);
  }
}
