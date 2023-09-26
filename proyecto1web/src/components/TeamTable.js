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

const TeamTable = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // elementos por página

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedTeams = props.equipos.slice(startIndex, endIndex);

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
          {displayedTeams.map((equipo, index) => (
            <tr key={equipo.id} className="table-row">
              <td className="table-cell">
                <img
                  src={equipo.team.logo}
                  alt= "Equipo"
                  className="table-icon"
                />
                {equipo.team.name}
              </td>
              <td className="table-cell">{equipo.team.country}</td>
              <td className="table-cell">{equipo.team.founded}</td>
              <td className="table-cell">{equipo.venue.name}</td>
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
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;  Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= props.equipos.length}
        >
          Siguiente  &gt;
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle} ariaHideApp={false}>
        {selectedTeam && (
            <div>
            {/* Sección "Detalles del Equipo" */}
            <div className="team-details-section">
                <div className="team-details-right">
                <h2 className="modal-text">Detalles del Equipo</h2>
                <p className="modal-text">Nombre equipo: {selectedTeam.team.name}</p>
                <p className="modal-text">País: {selectedTeam.team.country}</p>
                <p className="modal-text">Fundado: {selectedTeam.team.founded}</p>
                </div>
                <div className="team-details-left">
                <img className="team-details-left" src={selectedTeam.team.logo} alt="Equipo" />
                </div>
            </div>
            <hr className="divider" />
            {/* Sección "Detalles del Estadio" */}
            <div className="stadium-details-section">
                <div className="stadium-details-right">
                <h2 className="modal-text">Detalles del Estadio</h2>
                <p className="modal-text">Estadio: {selectedTeam.venue.name}</p>
                <p className="modal-text">Dirección: {selectedTeam.venue.address}</p>
                <p className="modal-text">Ciudad: {selectedTeam.venue.city}</p>
                <p className="modal-text">Capacidad: {selectedTeam.venue.capacity}</p>
                <p className="modal-text">Gramilla: {selectedTeam.venue.surface}</p>
                </div>
                <div className="stadium-details-left">
                <img className="stadium-details-left"src={selectedTeam.venue.image}alt="Estadio" />
                </div>
            </div>
            </div>
        )}
        </Modal>


    </div>
  );
};

export default TeamTable;

