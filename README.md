# Social_Network_API   [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit/)
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


  ## Description

  Social Network API was created for UCF bootcamp class as an api for a larger social media network. The user will be able to get, push, put, and delete from the database using its api calls to users and thoughts. The application was designed to go along with learning and display student ability to utilize knowledge on JavaScript, mongodb, and mongoose.


  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)


  ## Installation <a id="installation"></a>

  N/A


  ## Usage <a id="usage"></a>

  To use the Social Network API, first, run 'npm i' to install the necessary node modules.
  
  Then run the application using 'node index.js' in the terminal to start the server.
  
  After, go into an API platform such as Insomnia or Postman. 
  
  Access the list of users or thoughts, of the database using the following GET URLs: "http://localhost:3001/api/users" and "http://localhost:3001/api/thoughts". 
  
  Add an id number after the previous links to get the results for a specific item in that category, for example: "http://localhost:3001/api/users/[ _id ]".
   
   Add to a user or a thought the database by using the same urls from above (without the id number) as a POST. 
   
   Update a specific item in any of the sections by adding an id number and making it a PUT.
   
   Delete a specific item in any section by adding an id number and making it a DELETE.

   Add a friend to a user by using the following POST URL: "http://localhost:3001/api/users/[ _id ]/friends".

   Delete a friend from a user by using the above URL and adding a id number for the friend to it.

   Add a rection to a thought by using the following POST URL: "http://localhost:3001/api/thoughts/[ _id ]/reactions".

   Delete a reaction from a thought using the same URL as above and adding the reaction id on the end.

   [Social Network API Walkthrough.webm](https://github.com/SienkC/Social_Network_API/assets/133715604/3979cb3d-fa90-45bb-8718-c343b43776b3)


  ## Credits <a id="credits"></a>

  Base code provided by the boot camp creators at [UCF Boot Camps](https://bootcamp.ce.ucf.edu/).


  ## License <a id="license"></a>

  Licensed under [MIT](LICENSE)


  ## Contributing <a id="contributing"></a>

  To contribute, fork the project into your GitHub account and create a pull request.


  ## Tests <a id="tests"></a>

  N/A


  ## Questions <a id="questions"></a>

  Github: [SienkC](https://github.com/SienkC)
  
  For any questions please reach out to me at sienkiewichc@gmail.com.
