
export const fetchProductoById = (id) => {
    return fetch(`http://localhost:8080/producto/find/${id}`,{
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
        //console.error('El Producto no fue encontrada:', error);
        throw error;
      });
  };