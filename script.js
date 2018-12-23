//var arr = document.getElementsByTagName("p");

//for (var x = 0; x < arr.length; x++) {
//  arr[x].innerHTML = "HELLO";
//}

//var arr2 = document.getElementsByTagName("title");

//for (var x = 0; x < arr2.length; x++) {
//  arr2[x].innerHTML = "HELLO";
//}

//function move(box) {
//  document.write(box.style.left);
//}

var paragraphs = document.getElementsByTagName("p");
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].onmouseover = function() {
    console.log("!");
  }
}
