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

// Advanced
const calcStr = `Максимальна ціна: ${maxNumber}.\<br/\>
Мінімальна ціна: ${minNumber}.\<br/\>
Загальна сума всіх товарів: ${totalAmount}.\<br/\>
Сума товарів, цілих чисел, без копійок, округлена у меншу сторону: ${priceWithoutKopecks}.\<br/\>
Сума товарів, округлена до сотень: ${sumRounded100}.\<br/\> 
Сума товарів, округлена в меншу сторону: ${totalAmountFloor}.\<br/\>
Булеве значення: ${booleanValue}.\<br/\>  
Гроші клієнта: ${moneyClient}.\<br/\>
Випадкова знижка клієнта: ${sumLast}%.\<br/\>
Середнє значення цін округлене до другого знаку після коми: ${averageValuePrices.toFixed(
  2
)}.\<br/\>
Знижка клієнта: ${customerDiscount}%.\<br/\>
Сума знижки клієнта: ${customerDiscountSum}.\<br/\>
Чистий прибуток: ${netProfit}.\<br/\>`;

// вивід на веб-сторінку та консоль
console.log("Максимальна ціна: ", maxNumber);
console.log("Мінімальна ціна: ", minNumber);
console.log("Загальна вартість товарів: ", totalAmount);
console.log(
  "Загальна вартість товарів, без копійок, округлене у менший бік: ",
  priceWithoutKopecks
);
console.log("Сума товарів, округлена до сотень: ", sumRounded100);
console.log("Сума товарів, округлена в меншу сторону: ", totalAmountFloor);
console.log("Булеве значення: ", booleanValue);
console.log("Гроші клієнта: ", moneyClient);
console.log("Випадкова знижка клієнта: ", sumLast);
console.log(
  "Середнє значення цін округлене до другого знаку після коми: ",
  averageValuePrices.toFixed(2)
);
console.log("Знижка клієнта: ", customerDiscount, "%");
console.log("Сума знижки клієнта: ", customerDiscountSum);
console.log("Чистий прибуток: ", netProfit);
document.writeln(calcStr);
