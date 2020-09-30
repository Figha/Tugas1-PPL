const {
    incrementQty,
    decrementQty,
    recalSub,
    calDiscnt,
  } = require("../helpers");
  
  test("qty 1 + 1 = 2", () => {
    expect(incrementQty(1)).toBe(2);
  });

  test("qty 2 - 1 = 1", () => {
    expect(decrementQty(2)).toBe(1);
  });

  test("Subtotal 50000 dikalikan 2 jumlah barang = 100000", () => {
    expect(recalSub(25000, 2)).toBe(50000);
  });

  test("Subtotal dengan kode diskon", () => {
    expect(calDiscnt(250000, "Hello")).toBe(200000);
  });

  test("Subtotal tanpa kode diskon", () => {
    expect(calDiscnt(250000, "")).toBe(250000);
  });

  test("perkalian harga yang isinya string", () => {
    expect(recalSub("25000aaaaa", "2")).toBe("error");
  });
  