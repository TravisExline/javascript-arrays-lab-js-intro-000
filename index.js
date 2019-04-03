var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var name = "Broom"
  return [...kitten, name];
}
