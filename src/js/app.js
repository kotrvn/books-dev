import renderCards from './renderCards.js';
import modals from './modals.js';
import cart from './cart.js';



// function init(books) {
//     createCards(books);
//     openPopup(books);
//     bookFilter(books);
//     addToCart(books);
//     checkCart();
//     renderCart();
//     closePopup();
//     // toggleFiltersMenu();
//     // toggleMobileMenu();
// }

const toggleMobileMenu = () => {
    document.querySelector('.burger').addEventListener('click', function () {
        document.querySelector('#nav').classList.toggle('main-nav--open');
        document.querySelector('.main-nav__toggler').classList.toggle('burger--close');
    });
}


const toggleFiltersMenu = () => {
    document.querySelector('#filters-trigger').addEventListener('click', function () {
        document.querySelector('#filters').classList.toggle('filters--open');
    });
}

const init = (books) => {
    renderCards(books);
    const hash = getHash(books);
    modals.openPopup(hash);
    cart.add(hash);
    toggleMobileMenu();
    toggleFiltersMenu();
}

const getHash = (books) => {
    let hash = {}
    books.forEach(item => {
        hash = {
            ...hash,
            [item.uri]: item
        }
    })

    return hash
}

const getData = () => {
    fetch('./books/data.json').then(r => r.json().then((response) => {
        init(response);
    }));
}

getData();

const cart = {};
