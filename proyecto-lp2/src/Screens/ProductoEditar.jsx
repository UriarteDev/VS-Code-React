import React from 'react'

const ProductoEditar = ({ show, onClose, onSave, editData, handleInputChange }) => {
    if (!show) return null;
  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Editar Producto</h5>
          
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Id Proveedor :</label>
              <input type="text" className="form-control" name="idProveedor"
                value={editData.idProveedor}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Nombre del Producto :</label>
              <input type="text" className="form-control" name="nomProducto"
                value={editData.nomProducto}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Precio :</label>
              <input type="text" className="form-control" name="precio"
                value={editData.precio}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Stock :</label>
              <input type="text" className="form-control" name="stock"
                value={editData.stock}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-success" onClick={onSave}>
            Guardar Cambios
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductoEditar