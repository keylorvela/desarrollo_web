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

const EventsTable = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedEvent, setselectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // elementos por página

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedEvents = props.eventos.slice(startIndex, endIndex);

  const openModal = (evento) => {
    setselectedEvent(evento);
    setIsOpen(true);
  };

  const closeModal = () => {
    setselectedEvent(null);
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
        <p/>
        <tbody>
          {displayedEvents.map((evento, index) => (
            <tr key={evento.id} className="table-row">
              <td className="table-cell">
                <img
                  src={evento.teams.home.logo}
                  alt="Evento"
                  className="table-icon"
                />
                {evento.teams.home.name}
              </td>
              <td className="table-cell">{evento.goals.home}</td>
              <td className="table-cell">
                <img
                  src={evento.teams.away.logo}
                  alt="Icono"
                  className="table-icon"
                />
                {evento.teams.away.name}
              </td>
              <td className="table-cell">{evento.goals.away}</td>
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
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;  Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= props.eventos.length}
        >
          Siguiente  &gt;
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle} ariaHideApp={false}>
        {selectedEvent && (
            <div>
            
                <div className="details-up">
                <p className="modal-text"><b>Liga:</b>{selectedEvent.league.name}</p>
                <p className="modal-text"><b>Fecha:</b>{new Date(selectedEvent.fixture.date).toLocaleDateString()}</p>
                <p className="modal-text"><b>Temporada:</b>{selectedEvent.league.season}</p>
                </div>
            
            <hr className="divider" />
            <div className="match-details-section">
            <div className="match-details">
                <img src={selectedEvent.teams.home.logo} alt="evento" />
                </div>
                <h2 className="modal-text">{selectedEvent.teams.home.name}</h2>
                <h2  className="modal-text">{selectedEvent.goals.home}</h2 >
                <h2>-</h2 >
                <h2  className="modal-text">{selectedEvent.goals.away}</h2 >
                <h2 className="modal-text">{selectedEvent.teams.away.name}</h2>
                <img src={selectedEvent.teams.away.logo} alt="evento" />
            </div>
           
                <div className="details-down">
                <p className="modal-text"><b>Estado:</b>{selectedEvent.fixture.status.long}</p>
                <p className="modal-text"><b>Estadio:</b>{selectedEvent.fixture.venue.name}</p>
                <p className="modal-text"><b>Arbrito:</b> N/A </p>
                </div>
         
            </div>
        )}
        </Modal>


    </div>
  );
};

export default EventsTable;

