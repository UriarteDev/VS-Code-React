import React from 'react'

const ClienteEditar = ({ show, onClose, onSave, editData, handleInputChange }) => {
    if (!show) return null;
  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Editar Cliente</h5>
          
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Primer Nombre:</label>
              <input type="text" className="form-control" name="primerNombre"
                value={editData.primerNombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Segundo Nombre:</label>
              <input type="text" className="form-control" name="segundoNombre"
                value={editData.segundoNombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Apellido Paterno:</label>
              <input type="text" className="form-control" name="apellidoPaterno"
                value={editData.apellidoPaterno}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Apellido Materno:</label>
              <input type="text" className="form-control" name="apellidoMaterno"
                value={editData.apellidoMaterno}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>DNI:</label>
              <input type="text" className="form-control" name="dni"
                value={editData.dni}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Estado:</label>
              <select className="form-control" name="estado"
                value={editData.estado.toString()}
                onChange={handleInputChange}
              >
                <option value="false">Inactivo</option>
                <option value="true">Activo</option>
              </select>
            </div>
            <div className="form-group">
              <label>Activo:</label>
              <select className="form-control" name="activo"
                value={editData.activo.toString()}
                onChange={handleInputChange}
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
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

export default ClienteEditar