'use strict';

(() => {
  const cats = [{
    name: 'miau',
    URL: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    counter: 0
  },
  {
    name: 'meow',
    URL: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    counter: 3
  },
  {
    name: 'Peter',
    URL: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
    counter: 0
  },
  {
    name: 'Blackish',
    URL: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    counter: 0
  },
  {
    name: 'Leon',
    URL: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    counter: 0
  }
  ];

  let activeCat = cats[0];

  const list = document.querySelector('#list-cats');
  const containerCat = document.querySelector('.content-cat');
  const paraName = document.querySelector('.cat-name');
  const imgCat = document.querySelector('.img-cat');
  const spanCountCat = document.querySelector('#count-cat');

  cats.forEach((cat) => {
    const li = document.createElement('li');
    li.textContent = cat.name;
    li.addEventListener('click', () => {
      activeCat = cat;
      showCat( /*paraName, cat, imgCat, spanCountCat*/ );
    });
    list.appendChild(li);
  });

  containerCat.addEventListener('click', () => {
    const temp = ++activeCat.counter;
    spanCountCat.textContent = temp;
  });

  function showCat( /*paraName, cat, imgCat, spanCountCat*/ ) {
    paraName.textContent = activeCat.name;
    imgCat.setAttribute('src', activeCat.URL);
    imgCat.setAttribute('alt', `Cat ${activeCat.name}`);
    spanCountCat.textContent = activeCat.counter;
  }

  showCat();
})();
