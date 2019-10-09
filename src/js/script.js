


ready(function () {

  function init(books) {
    createCards(books);
    openPopup(books);
    bookFilter(books);
    addToCart(books);
    checkCart();
    renderCart();
    closePopup();
    // toggleFiltersMenu();
    // toggleMobileMenu();
  }


  function createPopup(books, bookId) {
    const selectedBook = books.find(book => book.id === bookId);

    const imgSrc = selectedBook.thumb_url.substr(1);
    document.querySelector('.modal__content .popup__img').setAttribute('src', `${imgSrc}.jpg`);
    document.querySelector('.modal__content .popup__img').setAttribute('alt', selectedBook.name);
    document.querySelector('.modal__content .product__title').textContent = selectedBook.name;
    document.querySelector('.modal__content .product__descr p').textContent = selectedBook.desc;
    document.querySelector('.modal__content .btn--price .price').textContent = `${selectedBook.price} ₽`;
    document.querySelector('.product__actions button').setAttribute('data-id', selectedBook.id);
    document.querySelector('#modal-book-view').classList.add('modal--open');
    document.querySelector('.page').classList.add('js-modal-open');

  }

  function getFilteredBooks(type, books) {
    return books.filter(book => book.type === type);
  }

  function bookFilter(books) {
    document.querySelectorAll('.tabs__item').forEach(filter => {
      filter.addEventListener('click', function (e) {
        const catalog = document.querySelector('.catalog__books-list');
        catalog.innerHTML = '';
        const type = this.getAttribute('data-id');
        const filteredBooks = getFilteredBooks(type, books);
        createCards(filteredBooks);
        e.preventDefault();
      });
    });
  }


  let cart = [];

  function removeDublicate(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  function addToCart(books) {

    const catalog = document.querySelector('.catalog__books-list');

    if (catalog) {
      catalog.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', function (e) {
          const btnId = this.getAttribute('data-id');
          books.forEach(book => {
            if (btnId === book.id) {
              cart.push(book);
            }

          });


          
          cart = removeDublicate(cart);
          document.querySelector('.page-header__cart-num').textContent = cart.length;
          localStorage.setItem('cart', JSON.stringify(cart));
          console.log(cart)
        });

      });
    } else {
      return;
    }



  }

  function checkCart() {
    // Проверка наличия корзины в localstorage 
    if (localStorage.getItem('cart') != null) {
      cart = JSON.parse(localStorage.getItem('cart'));
      cart = removeDublicate(cart);
      document.querySelector('.page-header__cart-num').textContent = cart.length;
    } else {
      console.log('LOL')
    }

  }

  function renderCart() {
    // Добавляем товары на страницу корзины
    const cartTable = document.querySelector('.cart__table tbody');
    const cartTemplate = document.querySelector('.cart-product-template');
    const cartFragment = document.createDocumentFragment();
    cart = removeDublicate(cart);
    cart.forEach(book => {
      const newProduct = cartTemplate.content.cloneNode(true);
      newProduct.querySelector('.cart__product').setAttribute('data-id', book.id);
      newProduct.querySelector('.cart__item-name').textContent = book.name;
      newProduct.querySelector('.cart__item-price').textContent = `${book.price} ₽`;
      const imgSrc = book.thumb_url.substr(1);
      newProduct.querySelector('.cart__item-img').setAttribute('src', `${imgSrc}.jpg`);
      newProduct.querySelector('.cart__item-img').setAttribute('alt', book.name);
      newProduct.querySelector('.cart__product-del-btn').setAttribute('data-id', book.id);

      cartFragment.appendChild(newProduct);
      cartTable.appendChild(cartFragment);

      console.log(cart);
    });

    cartSum()
  }



  function cartSum() {
    const cartTitle = document.querySelector('.cart__title');

    cart.forEach(book => {
      cartTitle.textContent = `В корзине ${cart.length} товара(ов)`;

      console.log(book.price);

      let summPrice = summPrice + book.price;

      console.log(book.price);

      document.querySelector('#cart-products-price-num').textContent = `${summPrice} ₽`
    })

  }





  //   











  // ВНИМАНИЕ!
  // Нижеследующий код (кастомный селект и выбор диапазона цены) работает
  // корректно и не вызывает ошибок в консоли браузера только на главной.
  // Одна из ваших задач: сделать так, чтобы на странице корзины в консоли
  // браузера не было ошибок.

  // Кастомные селекты (кроме выбора языка)
  new Choices('.field-select:not(#lang) select.field-select__select', {
    searchEnabled: false,
    shouldSort: false,
  });
  // Кастомный селект выбора языка отдельно
  new Choices('#lang select.field-select__select', {
    searchEnabled: false,
    shouldSort: false,
    callbackOnCreateTemplates: function (template) {
      return {
        item: (classNames, data) => {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
              ${getLangInSelectIcon(data.value)} ${data.label.substr(0, 3)}
            </div>
          `);
        },
        choice: (classNames, data) => {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
              ${getLangInSelectIcon(data.value)} ${data.label}
            </div>
          `);
        },
      };
    }
  });
  function getLangInSelectIcon(value) {
    if (value == 'ru') return '<span class="field-select__lang-ru"></span>';
    else if (value == 'en') return '<span class="field-select__lang-en"></span>';
    return '<span class="field-select__lang-null"></span>';
  }

  // Выбор диапазона цен
  var slider = document.getElementById('price-range');
  noUiSlider.create(slider, {
    start: [400, 1000],
    connect: true,
    step: 100,
    range: {
      'min': 200,
      'max': 2000
    }
  });

});

function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
