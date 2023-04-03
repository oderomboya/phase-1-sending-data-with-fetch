
function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
  
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        appendToDom(object);
        console.log(object);
      })
      .catch(function(error) {
        let errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
        console.log(error.message);
      });
  }
  
