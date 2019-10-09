/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCards.js */ \"./src/js/renderCards.js\");\n/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals.js */ \"./src/js/modals.js\");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.js */ \"./src/js/cart.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// function init(books) {\r\n//     createCards(books);\r\n//     openPopup(books);\r\n//     bookFilter(books);\r\n//     addToCart(books);\r\n//     checkCart();\r\n//     renderCart();\r\n//     closePopup();\r\n//     // toggleFiltersMenu();\r\n//     // toggleMobileMenu();\r\n// }\r\n\r\nconst toggleMobileMenu = () => {\r\n    document.querySelector('.burger').addEventListener('click', function () {\r\n        document.querySelector('#nav').classList.toggle('main-nav--open');\r\n        document.querySelector('.main-nav__toggler').classList.toggle('burger--close');\r\n    });\r\n}\r\n\r\n\r\nconst toggleFiltersMenu = () => {\r\n    document.querySelector('#filters-trigger').addEventListener('click', function () {\r\n        document.querySelector('#filters').classList.toggle('filters--open');\r\n    });\r\n}\r\n\r\nconst init = (books) => {\r\n    Object(_renderCards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(books);\r\n    const hash = getHash(books);\r\n    _modals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openPopup(hash);\r\n    _cart_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add(hash);\r\n    toggleMobileMenu();\r\n    toggleFiltersMenu();\r\n}\r\n\r\nconst getHash = (books) => {\r\n    let hash = {}\r\n    books.forEach(item => {\r\n        hash = {\r\n            ...hash,\r\n            [item.uri]: item\r\n        }\r\n    })\r\n\r\n    return hash\r\n}\r\n\r\nconst getData = () => {\r\n    fetch('./books/data.json').then(r => r.json().then((response) => {\r\n        init(response);\r\n    }));\r\n}\r\n\r\ngetData();\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cart = {\r\n    add(hash) {\r\n        const catalog = document.querySelector('[data-catalog]');\r\n\r\n        if (catalog) {\r\n            catalog.addEventListener('click', e => {\r\n                e.preventDefault();\r\n                const id = e.target.closest('.btn').dataset.id;\r\n                console.log(id)\r\n\r\n            })\r\n        }\r\n        \r\n    },\r\n\r\n    remove() {\r\n        \r\n    },\r\n    display() {\r\n\r\n    }\r\n}\r\n\r\n\r\n// function addToCart(book) {\r\n//     let button = this.dataset.id\r\n//     console.log(button)\r\n// }\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack:///./src/js/cart.js?");

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modals = {\r\n    createPopap(book) {\r\n        document.querySelector('.modal__content .popup__img').setAttribute('src', `books/thumb/${book.uri}.jpg`);\r\n        document.querySelector('.modal__content .popup__img').setAttribute('alt', book.name);\r\n        document.querySelector('.modal__content .product__title').textContent = book.name;\r\n        document.querySelector('.modal__content .product__descr p').textContent = book.desc;\r\n        document.querySelector('.modal__content .btn--price .price').textContent = `${book.price} ₽`;\r\n        document.querySelector('.product__actions button').setAttribute('data-id', book.uri);\r\n        document.querySelector('#modal-book-view').classList.add('modal--open');\r\n        document.querySelector('.page').classList.add('js-modal-open');\r\n    },\r\n    openPopup(hash) {\r\n        const catalog = document.querySelector('[data-catalog]');\r\n\r\n        if (catalog) {\r\n            catalog.addEventListener('click', e => {\r\n                e.preventDefault();\r\n                const id = e.target.closest('.card').dataset.id;\r\n                modals.createPopap(hash[id]);\r\n                modals.closePopup();\r\n\r\n                console.log(e.target)\r\n            })\r\n\r\n            \r\n        }\r\n\r\n        \r\n    },\r\n    closePopup() {\r\n        if (document.querySelector('.page').classList.contains('js-modal-open')) {\r\n            document.querySelector('.modal__close').addEventListener('click', function (e) {\r\n                document.querySelector('#modal-book-view').classList.remove('modal--open');\r\n                document.querySelector('.page').classList.remove('js-modal-open');\r\n            });\r\n        } else {\r\n            return;\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (modals);\n\n//# sourceURL=webpack:///./src/js/modals.js?");

/***/ }),

/***/ "./src/js/renderCards.js":
/*!*******************************!*\
  !*** ./src/js/renderCards.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst renderCards = (books) => {\r\n    const catalog = document.querySelector('[data-catalog]');\r\n    const cardTemplate = document.querySelector('[data-template=\"card\"]');\r\n    const cardFragment = document.createDocumentFragment();\r\n    \r\n\r\n    if (cardTemplate) {\r\n        books.forEach(book => {\r\n            const newCard = cardTemplate.content.cloneNode(true);\r\n            newCard.querySelector('.card').setAttribute('data-id', book.uri);\r\n            newCard.querySelector('.card__title').textContent = book.name;\r\n            newCard.querySelector('.card__price').textContent = `${book.price} ₽`;\r\n            newCard.querySelector('.card__img').setAttribute('src', `books/thumb/${book.uri}.jpg`);\r\n            newCard.querySelector('.card__img').setAttribute('alt', book.name);\r\n            newCard.querySelector('.card__buy').setAttribute('data-id', book.uri);\r\n\r\n            if (book.new) {\r\n                let newBook = document.createElement('span');\r\n                newBook.classList.add('card__new');\r\n                newBook.textContent = 'new';\r\n                newCard.querySelector('.card__title').appendChild(newBook);\r\n            }\r\n\r\n            cardFragment.appendChild(newCard);\r\n            catalog.appendChild(cardFragment);\r\n        });\r\n\r\n    } else {\r\n        return;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCards);\n\n//# sourceURL=webpack:///./src/js/renderCards.js?");

/***/ })

/******/ });