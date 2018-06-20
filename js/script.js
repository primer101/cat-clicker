'use strict';

(function () {
  const names = ['miau', ' meow'];
  const paraNames = document.querySelectorAll('.cat-name');

  for (let index = 0; index < paraNames.length; index++) {
    paraNames[index].textContent = names[index];
  }
})();

var elements = document.querySelectorAll('.cat-content');

elements.forEach((element) => {
  element.addEventListener('click', (() => {
    let counter = 0;
    const counterSpan = findCounter(element);
    return () => counter = incCounter(counterSpan, counter);
  })(element));
});

// Find the span of cat's clicks counter to increment
function findCounter(element) {
  const id = element.id.slice(element.id.length - 1);
  return document.querySelector(`#count-cat-${id}`);
}

function incCounter(span, counter) {
  span.textContent = ++counter;
  return counter;
}
