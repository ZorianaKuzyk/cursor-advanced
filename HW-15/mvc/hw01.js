// оголошення змінних
const priceMilk = 15.678;
const priceMeat = 123.965;
const priceCheese = 90.2345;

// логічні операції
const maxNumber = Math.max(priceMilk, priceMeat, priceCheese);
const minNumber = Math.min(priceMilk, priceMeat, priceCheese);
const totalAmount = priceMilk + priceMeat + priceCheese;
const priceWithoutKopecks =
  Math.floor(priceMilk) + Math.floor(priceMeat) + Math.floor(priceCheese);
const sumRounded100 = Math.round(totalAmount / 100) * 100;
const totalAmountFloor = Math.floor(totalAmount);
const booleanValue = Math.floor(totalAmount) % 2 ? false : true;
const moneyClient = 500;
const sumLast = Math.round((moneyClient - totalAmount) * 100) / 100;
const averageValuePrices = totalAmount / 3;
//
const customerDiscount = Math.round(Math.random() * 101);
const customerDiscountSum = Math.round(totalAmount * customerDiscount) / 100;
const netProfit =
  Math.round((totalAmount / 2 - customerDiscountSum) * 100) / 100;

export { maxNumber };
