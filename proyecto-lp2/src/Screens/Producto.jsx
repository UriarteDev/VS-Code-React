
import React, { useEffect, useState } from 'react';
import {updateProducto} from './CRUDProducto/apiEditarProductoDTO';
import {fetchProductoById} from './CRUDProducto/apiBuscarProductoDTO';
import {createProducto} from './CRUDProducto/apiCrearProductoDTO';
import { deleteProducto } from './CRUDProducto/apiEliminarProductoDTO'; 
import ProductoEditar from './ProductoEditar';
import ProductoEliminar from './ProductoEliminar';
import NavBar from '../components/NavBar';

const Producto = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [editData, setEditData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchById, setSearchById] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newProducto, setNewProducto] = useState({
    idProveedor: '',
    nomProducto: '',
    precio: '',
    stock: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8080/producto/find')
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
    deleteProducto(confirmDeleteId)
      .then(status => {
        //console.log(`Persona eliminada con ID ${confirmDeleteId}`);
        setData(prevData => prevData.filter(produc => produc.id !== confirmDeleteId));
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

    updateProducto(editData, editData.id)
    .then(response => {
      //console.log('Persona actualizada:', response);
      setShowEditModal(false);

      setData(prevData => prevData.map(product => product.id === response.id ? { ...product, ...response } : product));
    })
    .catch(error => {
      //console.log('Error al actualizar a la persona', error);
    })
  };

  const handleEdit = id => {
    const selectedProduct = data.find(product => product.id === id);
    setEditData(selectedProduct);
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

    fetchProductoById(searchById)
      .then(producto => {
        setData([producto]);
      })
      .catch(error => {
        setError(error.message);
        //console.error('Producto no encontrada:', error);
      });
  }
  /* ***********   FIN DE LA FUNCION PARA BUSCAR A LA PERSONA    *********** */



  /*     ***********     FUNCION PARA CREAR A LA PERSONA    ***********     */
  const handleCreate = () => {
    if (!newProducto.nomProducto || !newProducto.precio || !newProducto.stock) {
      setErrorMessage('Por favor completar los campos.');
      return;
    }
    createProducto(newProducto)
      .then((createProducto) =>{
        //console.log('Persona creada ', createPersona);
        setSuccessMessage('Producto creada exitosamente.');
        setNewProducto({
          idProveedor: '',
          nomProducto: '',
          precio: '',
          stock: '',
        });
        setShowEditModal(false);
        fetchData();
      })
      .catch((error) =>{
        //console.log('Error al crear a la persona', error);
      });
  };

  const handleInputChangeNewProducto = e => {
    const { name, value} = e.target;
    setNewProducto(prevProducto =>({
      ...prevProducto,
      [name]:value,
    }));
  };

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
          <h1 className="mb-4">Datos de los Productos</h1>
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
                  <th>Proveedor</th>
                  <th>Nombre Del Producto</th>
                  <th>Precio</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.idProveedor}</td>
                    <td>{item.nomProducto}</td>
                    <td>{item.precio}</td>
                    <td>{item.stock}</td>
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
      <ProductoEditar
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={editData ? handleUpdate : handleCreate}
        editData={editData || newProducto}
        handleInputChange={editData ? handleInputChange : handleInputChangeNewProducto}
        />
      {/* Modal de Eliminación */}
      <ProductoEliminar
        show={confirmDeleteId !== null}
        onCancel={handleCancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
    </body>
    </html>
  )
}

export default Producto