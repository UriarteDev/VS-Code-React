import React from 'react'

const ProductoEliminar = ({ show, onCancel, onConfirm }) => {
  return (
        show && (
            <div className="modal d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Confirmar eliminación</h5>
                </div>
                <div className="modal-body">
                    <p>¿Estás seguro de que deseas eliminar este Producto?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
                    <button type="button" className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
                </div>
                </div>
            </div>
            </div>
        )
    )
}

export default ProductoEliminar