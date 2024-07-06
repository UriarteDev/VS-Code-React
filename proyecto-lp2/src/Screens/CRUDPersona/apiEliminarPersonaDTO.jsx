
export const deletePersona = (id) => {
    return fetch(`http://localhost:8080/persona/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
        }
        //console.log('Persona eliminada.');
        return response.status;
      })
      .catch(error => {
        //console.error('Error al eliminar a la persona:', error);
        throw error;
      });
  };
  