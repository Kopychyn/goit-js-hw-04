'use strict';

function getShippingCost(country) {
	const price = 10;
	let message = `Shipping to ${country} will cost `;
	const currency = " credits";
		switch (country) {
			case "China":
				return message + price * 10 + currency; 
			case "Chile":
				return message + price * 25 + currency;
			case "Australia":
				return message + price * 17 + currency;
			case "Jamaica":
				return message + price * 12 + currency;
			default: return "Sorry, there is no delivery to your country";
		}
};

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
