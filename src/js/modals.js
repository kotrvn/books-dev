const modals = {
    createPopap(book) {
        document.querySelector('.modal__content .popup__img').setAttribute('src', `books/thumb/${book.uri}.jpg`);
        document.querySelector('.modal__content .popup__img').setAttribute('alt', book.name);
        document.querySelector('.modal__content .product__title').textContent = book.name;
        document.querySelector('.modal__content .product__descr p').textContent = book.desc;
        document.querySelector('.modal__content .btn--price .price').textContent = `${book.price} ₽`;
        document.querySelector('.product__actions button').setAttribute('data-id', book.uri);
        document.querySelector('#modal-book-view').classList.add('modal--open');
        document.querySelector('.page').classList.add('js-modal-open');
    },
    openPopup(hash) {
        const catalog = document.querySelector('[data-catalog]');

        if (catalog) {
            catalog.addEventListener('click', e => {
                e.preventDefault();
                const id = e.target.closest('.card').dataset.id;
                modals.createPopap(hash[id]);
                modals.closePopup();
            })

            
        }

        
    },
    closePopup() {
        if (document.querySelector('.page').classList.contains('js-modal-open')) {
            document.querySelector('.modal__close').addEventListener('click', function (e) {
                document.querySelector('#modal-book-view').classList.remove('modal--open');
                document.querySelector('.page').classList.remove('js-modal-open');
            });
        } else {
            return;
        }
    }
}

export default modals;