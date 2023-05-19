import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Kenyamanan(props:any) {
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
                        Prioritas Kenyamanan
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    Kenyamanan adalah modal utama yang harus kami ciptakan agar siswa/i merasa senang, puas dan menikmati proses pembelajaran (Enjoying Method). 
                    Sedangkan Motivasi adalah bekal inti yang harus kami tanamkan dalam jiwa siswa/i kami untuk memicu daya fikir, mental, semangat dan kreativitas mereka untuk terus belajar dan mengembangkan dari apa yang mereka dapat selama proses belajar (Soul Method).
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
        </Modal>
    )
}