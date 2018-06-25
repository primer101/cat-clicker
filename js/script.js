'use strict';

(() => {
  const model = {
    activeCat: null,
    adminMode: false,
    cats: [{
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
        URL: 'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480',
        counter: 0
      }
    ]
  };

  const octopus = {

    init: () => {
      model.activeCat = model.cats[0];
      viewMenu.init();
      viewCat.init();
      viewFormAdmin.init();
    },

    getActiveCat: () => model.activeCat,

    setActiveCat: (cat) => model.activeCat = cat,

    getCats: () => model.cats,

    incClickCounter: () => ++model.activeCat.counter,

    getAdminMode: () => model.adminMode,

    setAdminMode: (mode) => model.adminMode = mode,

    setDataActiveCat: (name, url, click) => {
      model.activeCat.name = name;
      model.activeCat.URL = url;
      model.activeCat.counter = click;
      viewMenu.render();
      viewCat.render();
    }

  };

  const viewMenu = {

    list: document.querySelector('#list-cats'),
    btnAdmin: document.querySelector('#btn-admin'),
    btnCancel: document.querySelector('#btn-cancel'),

    init: () => {
      viewMenu.btnAdmin.addEventListener('click', () => {
        octopus.setAdminMode(!octopus.getAdminMode());
        viewMenu.render();
        viewFormAdmin.render();
      });

      viewMenu.btnCancel.addEventListener('click', () => {
        octopus.setAdminMode(false);
        viewMenu.render();
        viewFormAdmin.render();
      });
      viewMenu.render();
    },

    render: () => {
      viewMenu.list.textContent = '';
      octopus.getCats().forEach((cat) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = cat.name;
        li.appendChild(btn);
        btn.addEventListener('click', () => {
          octopus.setActiveCat(cat);
          viewCat.render();
          viewFormAdmin.render();
        });
        viewMenu.list.appendChild(li);
      });

      if (octopus.getAdminMode()) {
        viewMenu.btnAdmin.textContent = 'Deactive Admin';
        viewMenu.btnAdmin.classList.add('btn-admin');
      } else {
        viewMenu.btnAdmin.textContent = 'Active Admin';
        viewMenu.btnAdmin.classList.remove('btn-admin');
      }
    },
  };

  const viewCat = {

    paraName: document.querySelector('.cat-name'),
    imgCat: document.querySelector('.img-cat'),
    spanCountCat: document.querySelector('#count-cat'),

    init: () => {
      const containerCat = document.querySelector('.content-cat');
      containerCat.addEventListener('click', () => {
        viewCat.spanCountCat.textContent = octopus.incClickCounter();
        viewFormAdmin.render();
      });
      viewCat.render();
    },

    render: () => {
      viewCat.paraName.textContent = octopus.getActiveCat().name;
      viewCat.imgCat.setAttribute('src', octopus.getActiveCat().URL);
      viewCat.imgCat.setAttribute('alt', `Cat ${octopus.getActiveCat().name}`);
      viewCat.spanCountCat.textContent = octopus.getActiveCat().counter;
    }
  };

  const viewFormAdmin = {
    init: () => {
      this.form = document.querySelector('#form-admin');
      this.frmInputName = document.querySelector('#name');
      this.frmInputUrl = document.querySelector('#url');
      this.frmInputClick = document.querySelector('#click');
      this.form.addEventListener('submit', (event) => {
        octopus.setDataActiveCat(this.form.elements['name'].value,
          this.form.elements['url'].value, this.form.elements['click'].value);
        event.preventDefault();
      });
      viewFormAdmin.render();
    },

    render: () => {
      this.frmInputName.value = octopus.getActiveCat().name;
      this.frmInputUrl.value = octopus.getActiveCat().URL;
      this.frmInputClick.value = octopus.getActiveCat().counter;
      if (octopus.getAdminMode()) {
        this.form.style.visibility = 'visible';
      } else {
        this.form.style.visibility = 'hidden';
      }

    }
  };

  octopus.init();

})();
