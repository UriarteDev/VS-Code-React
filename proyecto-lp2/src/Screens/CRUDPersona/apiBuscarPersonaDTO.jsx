
export const fetchPersonaById = (id) => {
    return fetch(`http://localhost:8080/persona/find/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
        }
        return response.json();
      })
      .catch(error => {
        //console.error('La persona no fue encontrada:', error);
        throw error;
      });
  };