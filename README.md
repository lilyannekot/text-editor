# Text Editor

## Project Description

This project entailed building a text editor that runs in the browser but can also be installed on your computer and function offline. 

## Table of Contents

- [Languages and Technology Used](#languages-and-technology-used)
- [Deployed Link](#deployed-link)
- [Project Demonstration](#project-demonstration)
- [Code Snippet](#code-snippet)
- [Author Links](#author-links)

## Languages and Technology Used

- CSS
- JavaScript
- Node.js
- Webpack
- Manifest

## Deployed Link

The deployed text editor can be found [HERE](https://frozen-everglades-89026.herokuapp.com/)!

## Project Demonstration

The following demonstration shows the ability to create a new user and how they are returned when you GET all users.

![Project Demo](public/assets/social-network-api-gif.gif)

## Code Snippet

The code below displays the logic added to the putDb method that accepts text inputted into the editor and adds the content to the database.

```
export const putDb = async (content) => {
  // Create a connection to the database and the version we want to use
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the "jate" database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store
  const store = tx.objectStore('jate');
  // Use the .add() method on the store and pass in the content
  const request = store.add({ content: content });
  // Get a confirmation of the request
  const result = await request;
  console.log("Data has been saved to the database");
};
```

## Author Links

- [GitHub](https://github.com/lilyannekot)
- [LinkedIn](https://www.linkedin.com/in/lilykot/)
