
export const updateProducto = (productoDTO, id) => {
    return fetch(`http://localhost:8080/producto/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoDTO),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      //console.log('producto actualizado:', data);
      return data;
    })
    .catch(error => {
      //console.error('Error actualizando producto:', error);
      throw error;
    });
  };
  