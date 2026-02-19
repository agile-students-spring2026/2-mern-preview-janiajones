#!/usr/bin/env node

// import the express app
const server = require('./app')
require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env

// which port to listen for HTTP(S) requests
const port = process.env.PORT || 3000

server.get("/api/about", (req, res) => {
  res.json({
    paragraphs: [
      "Hi! My name is Jania Jones and I am a senior studying Computer Science at NYU with a minor in Chinese. I am interested in interactive media applications and applying my technical skills to creative projects. In my junior year I had the amazing oppurtunity to work as a research assistant in Abu Dhabi for an IM professor there. This experience taught me a lot about how applicable CS is to a number of different industries and helped me gain a better perspective for a career I might enjoy in the future.",
      "Outside of the classroom I enjoy reading, hiking, and film photography. My favorite book of all time in Hunger Games: Catching Fire by Suzanne Collins and my favorite movie is Twilight. Although I mostly enjoy hiking for the vibes, one of my goals this year is to go on a high-adrenaline hike where I cross off one of my biggest fears: heights!! We will see if I actually achieve this goal though... Additionally, I currently work at a photo lab near campus, 5R Photo Lab, where I develop, edit, and print analog film. I worked at 5R since freshman year and it has taught me a lot about business, customer satisfaction, and problem solving."
    ],
    imageUrl: "http://localhost:5002/public/pic.png"
  });
});


// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}
