//bài 1
var s = 0;
var n = 0;
while (s < 10000) {
  n++;
  s += n;
}
console.log(n);
document.querySelector("#txt-ket-qua-bai-1").innerHTML = n;

// bài 2
document.querySelector("#btn-tinh-tong").addEventListener("click", function () {
  var xValue = document.querySelector("#txt-x").value * 1;
  var nValue = document.querySelector("#txt-n").value * 1;
  var sum = 0;
  for (var i = 1; i <= nValue; i++) {
    var tam = xValue * i;
    sum += tam;
  }
  document.querySelector("#txt-ket-qua-bai-2").style.display = "block";
  document.querySelector("#txt-ket-qua-bai-2").innerHTML = sum;
});

// bài 3

function tinhGiaiThua() {
  var nValueGiaiThua = document.querySelector("#txt-n-giai-thua").value * 1;
  var giaiThua = 1;
  for (var i = 1; i <= nValueGiaiThua; i++) {
    giaiThua *= i;
  }
  document.querySelector("#txt-ket-qua-bai-3").style.display = "block";
  document.querySelector(
    "#txt-ket-qua-bai-3"
  ).innerHTML = `Giai thừa của ${nValueGiaiThua} là ${giaiThua}`;
}

// bài 4
document.querySelector("#btn-tao-div").addEventListener("click", function () {
  //   console.log("yes");
  var contentHTML = "";
  for (var i = 1; i <= 10; i++) {
    // var content = `<div >${i}</div>`;
    if (i % 2 == 0) {
      var content = `<div style="background: red">${i}</div>`;
    } else {
      var content = `<div style="background: blue">${i}</div>`;
    }
    contentHTML += content;
  }
  document.querySelector("#hien-thi-the-div").innerHTML = contentHTML;
});

//bài 5
document
  .querySelector("#btn-so-nguyen-to")
  .addEventListener("click", function () {
    var soNguyeToValue = document.querySelector("#txt-so-nguyen-to").value * 1;
    console.log(soNguyeToValue);
  });
