const renderCards = (books) => {
    const catalog = document.querySelector('[data-catalog]');
    const cardTemplate = document.querySelector('[data-template="card"]');
    const cardFragment = document.createDocumentFragment();
    

    if (cardTemplate) {
        books.forEach(book => {
            const newCard = cardTemplate.content.cloneNode(true);
            newCard.querySelector('.card').setAttribute('data-id', book.uri);
            newCard.querySelector('.card__title').textContent = book.name;
            newCard.querySelector('.card__price').textContent = `${book.price} ₽`;
            newCard.querySelector('.card__img').setAttribute('src', `books/thumb/${book.uri}.jpg`);
            newCard.querySelector('.card__img').setAttribute('alt', book.name);
            newCard.querySelector('.card__buy').setAttribute('data-id', book.uri);

            if (book.new) {
                let newBook = document.createElement('span');
                newBook.classList.add('card__new');
                newBook.textContent = 'new';
                newCard.querySelector('.card__title').appendChild(newBook);
            }

            cardFragment.appendChild(newCard);
            catalog.appendChild(cardFragment);
        });

    } else {
        return;
    }
}

export default renderCards;