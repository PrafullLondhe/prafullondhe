const boxes = document.querySelectorAll('.box');
const totalPriceElement = document.querySelector('.total-price');
let totalPrice = 0;

boxes.forEach(box => {
    const radio = box.querySelector('input[type="radio"]');
    const priceElement = box.querySelector('.price');

    box.addEventListener('click', () => {
        boxes.forEach(b => {
            b.classList.add('closed');
            b.classList.remove('open');
        });

        box.classList.remove('closed');
        box.classList.add('open');
        radio.checked = true;

       
        const price = parseInt(priceElement.textContent.replace('₹', '').trim());
        totalPrice = price;
        totalPriceElement.textContent = `Total Price: ₹${totalPrice}`;
    });
});
