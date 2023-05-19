import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Sejarah(props:any){
    return (
        <Modal
        {...props} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4>
                            Sejarah Pembentukan
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p >
                    Dibentuk pada 17 Februari 2013. Kami bergerak sebagai lembaga pendidikan yang menyediakan guru les terdekat seperti Kota Cilegon, 
                    Kota Serang,Tangerang, Tangerang Selatan, Kabupaten Tangerang, Kabupaten Serang, Kabupaten Lebak dan Kabupaten Pandeglang.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
    );
}