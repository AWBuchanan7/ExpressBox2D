# ExpressBox2D
A simple of implementation of kripken/box2d.js in the express.js framework.

For more information see:

* github.com/kripken/box2d.js
* github.com/expressjs/express

ExpressBox2D is essentially the original Box2D testbed in an HTML5 canvas as seen in kripken/box2d.js, implemented in a Node.js/Express.js/Jade stack. Some changes you will notice in this project:

* The different Box2D demos can be cycled through with the 'Next Canvas' / 'Prev Canvas' buttons.
* Each demo is associated with a URL (for example you can browse to localhost:3000/box2d/pyramid).

# Using ExpressBox2D
To install dependencies:
<code>npm install</code>

To start the application:
<code>npm start</code>

And browse to localhost:3000 or localhost:3000/box2D.
Either or will pull up the first Box2D demo stored in public/worlds (the demos are sorted alphabetically currently but see routes/index.js to change that order or add more demos).



