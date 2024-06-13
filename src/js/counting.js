// Add to cart
const plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  num = document.getElementById("num");
let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});
