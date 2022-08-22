import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Create a connection to the database and the version we want to use
  const jateDb = await openDB("jate", 1);
  // Create a new transaction and specify the "jate" database and data privileges
  const tx = jateDb.transaction("jate", "readwrite");
  // Open up the desired object store
  const store = tx.objectStore("jate");
  // Use the .add() method on the store and pass in the content
  const request = store.add({ jate: conten });
  // Get a confirmation of the request
  const result = await request;
  console.log("Data has been saved to the database");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();