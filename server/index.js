import express from 'express';

const app = express();

app.get('/', (request, response) => {
	response.send('Hello world from express');
});

app.listen(3000, () => console.log('SERVER RUNNING'));
