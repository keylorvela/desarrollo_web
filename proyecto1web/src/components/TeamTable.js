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

const TeamTable = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const equipos = [
    {
      id: 1,
      nombre: 'Equipo 1',
      pais: 'País 1',
      fundado: 2000,
      estadio: 'Estadio 1',
    },
    {
      id: 2,
      nombre: 'Equipo 2',
      pais: 'País 2',
      fundado: 1995,
      estadio: 'Estadio 2',
    },
    // Agrega más equipos según tus necesidades
  ];

  const openModal = (equipo) => {
    setSelectedTeam(equipo);
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
            <th className="table-header-cell">Nombre</th>
            <th className="table-header-cell">País</th>
            <th className="table-header-cell">Fundado</th>
            <th className="table-header-cell">Estadio</th>
            <th className="table-header-cell">Acción</th>
          </tr>
        </thead>
        <p/>
        <tbody>
          {equipos.map((equipo, index) => (
            <tr key={equipo.id} className="table-row">
              <td className="table-cell">
                <img
                  src="../logos/logo.png"
                  alt="Icono"
                  className="table-icon"
                />
                {equipo.nombre}
              </td>
              <td className="table-cell">{equipo.pais}</td>
              <td className="table-cell">{equipo.fundado}</td>
              <td className="table-cell">{equipo.estadio}</td>
              <td className="table-cell">
                <button
                  onClick={() => openModal(equipo)}
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
            {/* Sección "Detalles del Equipo" */}
            <div className="team-details-section">
                <div className="team-details-right">
                <h2 className="modal-text">Detalles del Equipo</h2>
                <p className="modal-text">Nombre equipo: {selectedTeam.nombre}</p>
                <p className="modal-text">País: {selectedTeam.pais}</p>
                <p className="modal-text">Fundado: {selectedTeam.fundado}</p>
                </div>
                <div className="team-details-left">
                <img src="../logos/equipo.png" alt="Equipo" />
                </div>
            </div>
            <hr className="divider" />
            {/* Sección "Detalles del Estadio" */}
            <div className="stadium-details-section">
                <div className="stadium-details-right">
                <h2 className="modal-text">Detalles del Estadio</h2>
                <p className="modal-text">Estadio: {selectedTeam.estadio}</p>
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

export default TeamTable;

