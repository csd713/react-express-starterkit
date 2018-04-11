const express = require('express');

const app = express();

const PORT = 5000;

app.get('/api/user', (req, res) => {
	const users = [
		{ id: 1, firstName: "Akash", lastName: "A" },
		{ id: 2, firstName: "Akshay", lastName: "C" },
		{ id: 3, firstName: "Arvind", lastName: "N" },
		{ id: 4, firstName: "Rakshith", lastName: "N" },
		{ id: 5, firstName: "Sujay", lastName: "M" },
		{ id: 1, firstName: "Tejas", lastName: "G" }
	];

	res.json(users);
});

app.listen(PORT, () => {
	console.log(`Server started on  port ${PORT}`);
});