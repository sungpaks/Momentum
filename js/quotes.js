const quotes = [
	{
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		quote : "This too shall pass.",
		author : "Et hoc transibit",
	},
	{
		quote : "All we have is now.",
		author : "Anonymous",
	},
	{
		quote : "The less their ability, the more their conceit.",
		author : "Ahad Ha-am",
	},
	{
		quote : "I've failed over and over and over again in my life and that is why I successed.",
		author : "Michael Jordan",
	},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;