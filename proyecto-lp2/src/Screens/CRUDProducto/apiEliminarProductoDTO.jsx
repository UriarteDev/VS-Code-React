
export const deleteProducto = (id) => {
    return fetch(`http://localhost:8080/producto/delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
        }
        //console.log('producto eliminado.');
        return response.status;
      })
      .catch(error => {
        //console.error('Error al eliminar el producto:', error);
        throw error;
      });
  };
  