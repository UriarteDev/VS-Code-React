import React, { useEffect, useState } from 'react';
import {updatePersona} from './CRUDPersona/apiEditarPersonaDTO';
import {fetchPersonaById} from './CRUDPersona/apiBuscarPersonaDTO';
import {createPersona} from './CRUDPersona/apiCrearPersonaDTO';
import { deletePersona } from './CRUDPersona/apiEliminarPersonaDTO'; 
import ClienteEditar from './ClienteEditar';
import ClienteEliminar from './ClienteEliminar';
import NavBar from '../components/NavBar';

const Cliente = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchById, setSearchById] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newPersona, setNewPersona] = useState({
    primerNombre: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    dni: '',
    estado: true,
    activo: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8080/persona/find')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
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
  };


  /*     ***********     FUNCION PARA ELIMINAR A LA PERSONA    ***********     */
  const handleDelete = id => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    deletePersona(confirmDeleteId)
      .then(status => {
        //console.log(`Persona eliminada con ID ${confirmDeleteId}`);
        setData(prevData => prevData.filter(person => person.id !== confirmDeleteId));
        setConfirmDeleteId(null);
      })
      .catch(error => {
        //console.error('Error al eliminar persona:', error);
        setConfirmDeleteId(null);
      });
  };

  const handleCancelDelete = () => {
    setConfirmDeleteId(null);
  };
  /* ***********   FIN DE LA FUNCION PARA ELIMINAR A LA PERSONA    *********** */





  /* ***********    FUNCION PARA ACTUALIZAR A LA PERSONA    *********** */
  const handleUpdate = () => {

    if (!editData) return;

    updatePersona(editData, editData.id)
    .then(response => {
      //console.log('Persona actualizada:', response);
      setShowEditModal(false);

      setData(prevData => prevData.map(person => person.id === response.id ? { ...person, ...response } : person));
    })
    .catch(error => {
      //console.log('Error al actualizar a la persona', error);
    })
  };

  const handleEdit = id => {
    const selectedPerson = data.find(person => person.id === id);
    setEditData(selectedPerson);
    setShowEditModal(true);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    const parsedValue = value === 'true' ? true : value === 'false' ? false : value;

    setEditData(prevData => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };
  /* ***********   FIN DE LA FUNCION PARA ACTUALIZAR A LA PERSONA    *********** */


  /*     ***********     FUNCION PARA BUSCAR A LA PERSONA    ***********     */
  const handleSearchInputChange = e => {
    //console.log(`Searching for persona with ID: ${searchById}`);
    setSearchById(e.target.value);
  };

  const handleSearch = () => {
    if (!searchById) return;

    fetchPersonaById(searchById)
      .then(persona => {
        setData([persona]);
      })
      .catch(error => {
        setError(error.message);
        //console.error('Persona no encontrada:', error);
      });
  }
  /* ***********   FIN DE LA FUNCION PARA BUSCAR A LA PERSONA    *********** */



  /*     ***********     FUNCION PARA CREAR A LA PERSONA    ***********     */
  const handleCreate = () => {
    if (!newPersona.primerNombre || !newPersona.apellidoPaterno || !newPersona.dni) {
      setErrorMessage('Por favor completar los campos.');
      return;
    }
    createPersona(newPersona)
      .then((createPersona) =>{
        //console.log('Persona creada ', createPersona);
        setSuccessMessage('Persona creada exitosamente.');
        setNewPersona({
          primerNombre: '',
          segundoNombre: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          dni: '',
          estado: true,
          activo: true,
        });
        setShowEditModal(false);
        fetchData();
      })
      .catch((error) =>{
        //console.log('Error al crear a la persona', error);
      });
  };

  const handleInputChangeNewPersona = e => {
    const { name, value} = e.target;
    setNewPersona(prevPersona =>({
      ...prevPersona,
      [name]:value,
    }));
  };

  /* ***********   FIN DE LA FUNCION PARA CREAR A LA PERSONA    *********** */
  return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <NavBar/>
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <h1 className="mb-4">Datos de la API tutorias</h1>
          {error ? <p>Error: {error}</p> : null}
          {(successMessage || errorMessage) && (
            <div className={`alert ${successMessage ? 'alert-success' : 'alert-danger'}`}>
              {successMessage || errorMessage}
            </div>
          )}
          <div className="mb-3 d-flex align-items-start">
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Buscar por ID"
              value={searchById}
              onChange={handleSearchInputChange}
            />
            &nbsp;
            <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
            &nbsp;
            <button className="btn btn-info ml-2" onClick={() => {
              setEditData(null);
              setShowEditModal(true);}}>Crear</button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Apellido Paterno</th>
                  <th>Apellido Materno</th>
                  <th>DNI</th>
                  <th>Estado</th>
                  <th>Activo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.primerNombre}</td>
                    <td>{item.segundoNombre}</td>
                    <td>{item.apellidoPaterno}</td>
                    <td>{item.apellidoMaterno}</td>
                    <td>{item.dni}</td>
                    <td>{item.estado ? 'Activo' : 'Inactivo'}</td>
                    <td>{item.activo ? 'Sí' : 'No'}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm mr-2"
                      onClick={() => handleEdit(item.id)}>Editar</button>&nbsp;
                      <button className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal de Edición */}
      <ClienteEditar
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={editData ? handleUpdate : handleCreate}
        editData={editData || newPersona}
        handleInputChange={editData ? handleInputChange : handleInputChangeNewPersona}
        />
      {/* Modal de Eliminación */}
      <ClienteEliminar
        show={confirmDeleteId !== null}
        onCancel={handleCancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
    </body>
    </html>
  )
}

export default Cliente