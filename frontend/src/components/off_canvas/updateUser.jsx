import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import Swal from 'sweetalert2'; 

function FormUserUpdate({user}) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,  
  });
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:8080/user/update/${user._id}`, formData)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: response.data.status,
            text: response.data.message,
            showCancelButton: false, 
            confirmButtonText: 'OK', 
            allowOutsideClick: false, 
          }).then((result) => {
            if (result.isConfirmed) {
              handleClose(); 
              window.location.reload(); 
            }
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: err.response.data.message,
          showCancelButton: false, 
          confirmButtonText: 'OK', 
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Atualizar um usuário</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleSubmitUpdate}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                Primeiro Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="first_name"
                value={formData.first_name} 
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Sobrenome
              </label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name" 
                value={formData.last_name} 
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FormUserUpdate;
