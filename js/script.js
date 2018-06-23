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
      URL: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
      counter: 0
    },
    {
      name: 'Leon',
      URL: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
      counter: 0
    }
  ];

  const octopus = {
    activeCat: null,

    init: () => {
      octopus.activeCat = cats[0];
      viewMenu.init();
      viewCat.init();
    },

    getActiveCat: () => octopus.activeCat,

    setActiveCat: (cat) => octopus.activeCat = cat,

    incClickCounter: () => ++octopus.activeCat.counter
  };

  const viewMenu = {

    list: document.querySelector('#list-cats'),

    init: () => {
      viewMenu.renderMenu();
    },

    renderMenu: () => {
      cats.forEach((cat) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = cat.name;
        li.appendChild(btn);
        btn.addEventListener('click', () => {
          octopus.setActiveCat(cat);
          viewCat.renderCat();
        });
        viewMenu.list.appendChild(li);
      });
    }

  };

  const viewCat = {

    paraName: document.querySelector('.cat-name'),
    imgCat: document.querySelector('.img-cat'),
    spanCountCat: document.querySelector('#count-cat'),

    init: () => {
      const containerCat = document.querySelector('.content-cat');
      containerCat.addEventListener('click', () => viewCat.spanCountCat.textContent = octopus.incClickCounter());
      viewCat.renderCat();
    },

    renderCat: () => {
      viewCat.paraName.textContent = octopus.getActiveCat().name;
      viewCat.imgCat.setAttribute('src', octopus.getActiveCat().URL);
      viewCat.imgCat.setAttribute('alt', `Cat ${octopus.getActiveCat().name}`);
      viewCat.spanCountCat.textContent = octopus.getActiveCat().counter;
    }
  };

  octopus.init();

})();
