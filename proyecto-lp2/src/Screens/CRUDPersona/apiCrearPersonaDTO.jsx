
export const createPersona = (personaDTO) => {
    return fetch(`http://localhost:8080/persona/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(personaDTO),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      //console.log('Persona creada:', data);
      return data;
    })
    .catch(error => {
      //console.error('Error al crear la persona:', error);
      throw error;
    });
  };