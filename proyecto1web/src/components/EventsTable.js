import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/TeamTable.css';
import '../styles/ModalEvents.css';

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
      casa: 'Equipo1',
      c_goles: 1,
      visita:  'Estadio1',
      v_goles: 2,
    },
    {
        id: 2,
        casa: 'Equipo2',
        c_goles: 1,
        visita:  'Estadio2',
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
            
                <div className="details-up">
                <p className="modal-text">Liga: Lliga1</p>
                <p className="modal-text">Fecha:fecha1</p>
                <p className="modal-text">Temporadaa: temp1</p>
                </div>
            
            <hr className="divider" />
            <div className="match-details-section">
            <div className="match-details">
                <img src="../logos/evento.png" alt="evento" />
                </div>
                <h2 className="modal-text">{selectedTeam.casa}</h2>
                <h2  className="modal-text">{selectedTeam.c_goles}</h2 >
                <h2>-</h2 >
                <h2  className="modal-text">{selectedTeam.v_goles}</h2 >
                <h2 className="modal-text">{selectedTeam.visita}</h2>
                <img src="../logos/evento.png" alt="evento" />
            </div>
           
                <div className="details-down">
                <p className="modal-text">Estado: Fin</p>
                <p className="modal-text">Estadio: Estadio1</p>
                <p className="modal-text">Arbrito: A1</p>
                </div>
         
            </div>
        )}
        </Modal>


    </div>
  );
};

export default EventsTable;

