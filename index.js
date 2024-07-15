// index.js

function submitData(name, email) {
  const formData = {
      name: name,
      email: email
  };

  const configObject = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configObject)
      .then(response => response.json())
      .then(data => {
          appendIdToDOM(data.id);
      })
      .catch(error => {
          appendErrorToDOM(error.message);
      });
}

function appendIdToDOM(id) {
  // Example implementation: append the id to a DOM element
  const idElement = document.createElement('p');
  idElement.textContent = `New ID: ${id}`;
  document.body.appendChild(idElement);
}

function appendErrorToDOM(errorMessage) {
  // Example implementation: append the error message to a DOM element
  const errorElement = document.createElement('p');
  errorElement.textContent = `Error: ${errorMessage}`;
  document.body.appendChild(errorElement);
}

export { submitData }; // Exporting the function for testing purposes

  
