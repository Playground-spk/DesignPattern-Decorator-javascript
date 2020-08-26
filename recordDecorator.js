function worker(a, b) {
  console.log(a + b);
}

function recordDecorator(func) {
  wrapper.calls = [];

  function wrapper(...arr) {
    wrapper.calls.push(`record:${arr[0]},${arr[1]} `);
    return func.apply(this, arr);
  }

  return wrapper;
}

//test
worker = recordDecorator(worker);

worker(7, 9);
console.log(worker.calls);

worker(3, 5);
console.log(worker.calls);
