function setTimeDecorator(func, delay) {
  return function () {
    setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function f(x) {
  console.log(x);
}

f = setTimeDecorator(f, 1000);

let f1000 = setTimeDecorator(alert, 1000);

f("x");
