import React, { useEffect, useState } from 'react';

export const DatosPersona = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/persona/find')
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
        <div className="App">
      <h1>Datos de la API tutorias</h1>
      {error ? <p>Error: {error}</p> : null}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Primer Nombre:</strong> {item.primerNombre}</p>
            <p><strong>Segundo Nombre:</strong> {item.segundoNombre}</p>
            <p><strong>Apellido Paterno:</strong> {item.apellidoPaterno}</p>
            <p><strong>Apellido Materno:</strong> {item.apellidoMaterno}</p>
            <p><strong>DNI:</strong> {item.dni}</p>
            <p><strong>Estado:</strong> {item.estado ? 'Activo' : 'Inactivo'}</p>
            <p><strong>Activo:</strong> {item.activo ? 'Sí' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
