const incrementQty = (qty) => parseInt(qty) + 1;

const decrementQty = (qty) => {
    if(parseInt(qty) - 1 == 0){
        return 1;
    } else {
        return parseInt(qty) - 1;
    }
};

const recalSub = (price, qty) => {
    return parseInt(price) * parseInt(qty);
};

const calDiscnt = (subtotal, code) => {
    if (code) {
        discount = subtotal - subtotal * 0.2;
    return discount;
  } else {
    return subtotal;
    }
};



module.exports = { 
    incrementQty, 
    decrementQty,
    recalSub,
    calDiscnt
};
