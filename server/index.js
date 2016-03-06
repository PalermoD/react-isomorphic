import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';

const app = express();

//view templates 
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static assets 
app.use(express.static(path.resolve(__dirname, '../dist')));


//routes
app.get('/', (request, response) => {
	response.render('app', {
		app: ReactDOMServer.renderToString(<App />)
	});
});

app.listen(3000, () => console.log('SERVER RUNNING'));
