// Any future custom scripts can go here

// Initialize browser IndexedDB for storing recipe favorites
window.onload = () => {
  let request = window.indexedDB.open('recipeFavorites', 1);

  request.onerror = () => {
    console.log('Database failed to open');
  };

  request.onsuccess = () => {
    console.log('Database opened successfully');
  }

  request.onupgradeneeded = (e) {
    let db = e.target.result;

    let objectStore = db.createObjectStore('recipe', { keyPath: 'id', autoIncrement: false });

    objectStore.createIndex('title', 'title', { unique: true });

    console.log('Database setup complete');
  };
};
