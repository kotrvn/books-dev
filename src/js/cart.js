const cart = {
    add(hash) {
        const catalog = document.querySelector('[data-catalog]');

        if (catalog) {
            catalog.addEventListener('click', e => {
                e.preventDefault();
                const id = e.target.closest('.btn').dataset.id;
                console.log(id)
            })
        }
        
    },

    remove() {
        
    },
    display() {

    }
}


// function addToCart(book) {
//     let button = this.dataset.id
//     console.log(button)
// }

export default cart;