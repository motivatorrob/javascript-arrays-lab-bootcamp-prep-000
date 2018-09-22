// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

//above function shows that having return on  seperate line makes no difference on this occasion. Potentially because array is already defined outside of function?

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens,name]
}

function prependKitten(name) {
  return [kittens,...name]
}