import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/TeamTable.css';

const modalStyle = {
  content: {
    margin: 'auto',
    bottom: '150px',
    width: '600px',
    height: '450px',
    borderRadius: '25px',
    backgroundColor: '#A8DF94',
  },
};

const EventsTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const eventos = [
    {
      id: 1,
      casa: 'Equipo 1',
      c_goles: 1,
      visita:  'Estadio 1',
      v_goles: 2,
    },
    {
        id: 2,
        casa: 'Equipo 2',
        c_goles: 1,
        visita:  'Estadio 2',
        v_goles: 2,
    },
    // Agrega más eventos según tus necesidades
  ];

  const openModal = (evento) => {
    setSelectedTeam(evento);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTeam(null);
    setIsOpen(false);
  };

  return (
    <div className="team-table-container">
      <table className="team-table">
        <thead className="table-header">
          <tr>
            <th className="table-header-cell">Casa</th>
            <th className="table-header-cell">Goles</th>
            <th className="table-header-cell">Visita</th>
            <th className="table-header-cell">Goles</th>
            <th className="table-header-cell">Acción</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento, index) => (
            <tr key={evento.id} className="table-row">
              <td className="table-cell">
                <img
                  src="../logos/logo.png"
                  alt="Icono"
                  className="table-icon"
                />
                {evento.casa}
              </td>
              <td className="table-cell">{evento.c_goles}</td>
              <td className="table-cell">
                <img
                  src="../logos/logo.png"
                  alt="Icono"
                  className="table-icon"
                />
                {evento.visita}
              </td>
              <td className="table-cell">{evento.v_goles}</td>
              <td className="table-cell">
                <button
                  onClick={() => openModal(evento)}
                  className="button-ver-detalles"
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle} ariaHideApp={false}>
        {selectedTeam && (
            <div>
            {/* Sección "Detalles del evento" */}
            <div className="team-details-section">
                <div className="team-details-right">
                <h2 className="modal-text">Detalles del evento</h2>
                <p className="modal-text">Nombre evento: {selectedTeam.casa}</p>
                <p className="modal-text">País: {selectedTeam.c_goles}</p>
                <p className="modal-text">Fundado: {selectedTeam.visita}</p>
                </div>
                <div className="team-details-left">
                <img src="../logos/evento.png" alt="evento" />
                </div>
            </div>
            <hr className="divider" />
            {/* Sección "Detalles del Estadio" */}
            <div className="stadium-details-section">
                <div className="stadium-details-right">
                <h2 className="modal-text">Detalles del Estadio</h2>
                <p className="modal-text">Estadio: {selectedTeam.v_goles}</p>
                <p className="modal-text">Nombre: Nombre del estadio</p>
                <p className="modal-text">Dirección: Dirección del estadio</p>
                <p className="modal-text">Ciudad: Ciudad del estadio</p>
                <p className="modal-text">Capacidad: Capacidad del estadio</p>
                <p className="modal-text">Gramilla: Tipo de gramilla</p>
                </div>
                <div className="stadium-details-left">
                <img src="../logos/estadio.png" alt="Estadio" />
                </div>
            </div>
            </div>
        )}
        </Modal>


    </div>
  );
};

export default EventsTable;

