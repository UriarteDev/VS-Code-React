
export const createProducto = (productoDTO) => {
    return fetch(`http://localhost:8080/producto/create`, {
      method: 'POST',
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
      //console.log('producto creado:', data);
      return data;
    })
    .catch(error => {
      //console.error('Error al crear el producto:', error);
      throw error;
    });
  };