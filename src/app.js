import { 
  incrementQty, 
  decrementQty,
  recalSub,
  calDiscnt,
} from './helpers.js';

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const subtotalText = document.querySelector("#subtotal");
const price = document.querySelector("#price");
const discountCode = document.querySelector("#code");
const confirmButton = document.querySelector("#confirmButton");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotalText.textContent = `Rp. ${recalSub(
    price.value,
    qtyInput.value
  )}`;
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotalText.textContent = `Rp. ${recalSub(
    price.value,
    qtyInput.value
  )}`;
});

confirmButton.addEventListener("click", () => {
  let subtotal = recalSub(price.value, qtyInput.value);
  let total = calDiscnt(subtotal, discountCode.value);
  subtotalText.textContent = `Rp. ${total}`;
});