import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import CustomInput from '../../../componets/common/customeInput/CustomInput';
import './CreateCategory.css';
import { useState } from "react";
import SubmitButton from "../../../componets/common/Button/SubmitButton";
import CancelButton from "../../../componets/common/Button/CancelButton";

function CreateCategory(){
    let [name,setName]=useState('');
    let [errors,setErrors]=useState({name:''});
    let [loading,setLoading]=useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return(
    <Container className="category-container">
        <Row className="justify-content-center">
            {/* justify-content-center use to center full row */}
            <Col >
            {/* <h1 style={{ textAlign: "center"}}>Create new Category</h1> */}
            {/* textAlign: "center" centers the text inside <h1>. */}
            <Button className='w-100 create-category' onClick={handleShow}>Create new Category</Button>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Create new Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CustomInput label="Category Name"
                type="text" 
                placeholder="Enter category name"
                value={name}
                name="name"
                onChange={(e)=>setName(e.target.value)}
                  error={errors.name} // Pass field-specific error
                />
                </Modal.Body>
                <Modal.Footer>
                {/* <CancelButton link='/product' className="m-2" size="sm"  onClick={handleClose}></CancelButton> */}
                <CancelButton  className="m-2" size="sm"  onClick={handleClose}></CancelButton>
                <SubmitButton type="submit" size="sm" className="m-2" loading={loading}>Create</SubmitButton>
                </Modal.Footer>
            </Modal>
            </Col>
        </Row>
    </Container>
)
}
export default CreateCategory;