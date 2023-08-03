

// Function to get contacts from Local Storage
export function getContactsFromLocalStorage() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  }
  
  // Function to update Local Storage with the current contacts array
  export function updateLocalStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
  