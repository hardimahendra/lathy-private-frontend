import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const Layanan = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Keutamaan Layanan</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Saat ini pelayanan yang kami sudah mencakup seluruh wilayah Banten. Dengan 70 lebih tenaga pendidik, kami mampu melayani semua peserta didik dengan optimal. Dalam perjalanan dan pengembangannya, Lathy Private terus menggali,
          mempelajari dan mengembangakan metode pembelajaran yang optimal untuk diterapkan pada peserta didik. Dari semua metode yang didapat, kami mengutamakan “Kenyamanan & Motivasi”. Metode tersebut menjadi materi wajib yang harus guru
          implementasikan.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Layanan;
