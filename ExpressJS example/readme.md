# Simple Express.js Server Example

This is a basic example of a web server built using Express.js, perfect for college students learning web development.

## What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Project Structure
- `server.js` - Main server file containing all the code
- `readme.md` - Documentation (you're reading it!)

## Code Explanation
The server code does the following:
1. Imports Express.js and creates an application instance
2. Sets up a port number (3000)
3. Creates a route for the root path ('/') that:
   - Responds with "Hello, World!"
   - Logs "res sended" to the console when accessed
4. Starts the server and listens on port 3000

## How to Run
1. Make sure you have Node.js installed
2. Open terminal in the project directory
3. Run `node server.js`
4. Visit `http://localhost:3000` in your browser

## Expected Output
- Browser will display: "Hello, World!"
- Console will show:
  - "Server is running on http://localhost:3000"
  - "Open http://localhost:3000 too see some change"
  - "res sended" (each time you refresh the page)

## Next Steps
Try modifying the code to:
- Add more routes
- Return different types of responses
- Add error handling
- Implement middleware
