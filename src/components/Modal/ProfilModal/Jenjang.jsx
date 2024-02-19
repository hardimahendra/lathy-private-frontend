import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Jenjang = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Jenjang Pendidikan</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Tersedia untuk semua jenjang pendidikan mulai dari TK/PAUD, SD, SLTP, SLTA, Mahasiswa dan untuk umum. Dengan slogan “Makin Belajar, Makin Pintar”, kami berkomitmen untuk mengantarkan siswa-siswi kami ke jenjang prestasi yang lebih
          baik, dan lebih baik lagi.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Jenjang;
