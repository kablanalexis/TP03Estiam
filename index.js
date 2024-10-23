const	http	=	require('http');
const	server	=	http.createServer((req,	res)	=>	{
				res.statusCode	=	200;
				res.setHeader('Content-Type',	'text/plain');
				res.end('Hello	World\n');
});
const	port	=	process.env.PORT	||	3000;
server.listen(port,	()	=>	{
				console.log(`Server	running	at	http://localhost:${port}/`);
});
2.	Create	a	`package.json`	file:
npm	init	-y
Generated	`package.json`	should	look	like	this:
{
		"name":	"hello-world-app",
		"version":	"1.0.0",
		"description":	"A	simple	Hello	World	Node.js	app",
		"main":	"index.js",
		"scripts":	{
				"start":	"node	index.js"
		},
		"author":	"Your	Name",
		"license":	"ISC"
}
