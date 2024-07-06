import React, { useEffect, useState } from 'react';


export const ListarProductos = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:8080/producto/find')
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}, statusText: ${response.statusText}');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          setError(error.message);
          console.error('There was an error fetching the data!', error);
        });
    }, []);

  return (
    
    <div className="container mb-5 mt-5">
      {error ? <p>Error: {error}</p> : null}
      <div className="card-container">
        {data.map(item => (
          <div key={item.id} className="card">
            <span className="card-header"></span>
            <div className="card-body">
              <h1 className="card-title">Tiendas Pepito</h1>
              <ul className="card-list">
                <li>{item.nomProducto}</li>
                <li>Costo: ${item.precio}</li>
                <li>Unidades: {item.stock}</li>
              </ul>
              <button type="button" className="card-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
