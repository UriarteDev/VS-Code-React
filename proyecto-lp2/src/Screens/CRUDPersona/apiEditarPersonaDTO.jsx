
export const updatePersona = (personaDTO, id) => {
    return fetch(`http://localhost:8080/persona/update/${id}`, {
      method: 'PUT',
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
      //console.log('Persona actualizada:', data);
      return data;
    })
    .catch(error => {
      //console.error('Error actualizando persona:', error);
      throw error;
    });
  };
  