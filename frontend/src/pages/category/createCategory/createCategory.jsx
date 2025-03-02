import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import CustomInput from '../../../componets/common/customeInput/CustomInput';
import './CreateCategory.css';
import { useState } from "react";
import SubmitButton from "../../../componets/common/Button/SubmitButton";
import CancelButton from "../../../componets/common/Button/CancelButton";
import { createCategory } from "../../../utils/service/AxiosApi";
import { ToastContainer, toast } from 'react-toastify';


function CreateCategory(){
    let [name,setName]=useState('');
    let [errors,setErrors]=useState({name:''});
    let [loading,setLoading]=useState(false);
    const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    const handleClose = () => {
        setName('');  // Clear the category name
        setErrors({ name: '' }); // Clear errors
        setShow(false); // Close modal
    };
    const handleShow = () => setShow(true);
    const create=async (name)=>{
        setLoading(true)//start loding
        // setErrors({name:""})
        try{
            const response=await createCategory({name:name})
            console.log(response.data,"reaponse")
            //response.statusCode is undefined because axios typically wraps responses inside a data object. So, statusCode is inside response.data.
            if (response?.data?.statusCode == 201) {
                toast.success(response?.data?.message, { position: 'top-right' });
                handleClose(); // Clear state and close modal on success
            }
        }catch(e){
            const errorMessage=e.response?.data?.message || "Failed to create category! Please try again. "
            if(e.response && e.response?.data){
               const {errors}=e.response?.data; 

               setErrors({name:errors?.name ? errors.name[0]:""})
            }
            toast.error(errorMessage, { position: "top-right" });
        }finally{
            setLoading(false);
            // setErrors({name:''})
            //  setShow(false)
        }
    }
    const handleSubmit=(e)=>{
        // setShow(false)
        e.preventDefault();
        create(name);
    }
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
                            <form onSubmit={handleSubmit}>  {/* Wrap inside a <form> */}
                                <CustomInput
                                    label="Category Name"
                                    type="text"
                                    placeholder="Enter category name"
                                    value={name}
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    error={errors.name}
                                />
                                <Modal.Footer>
                                    <CancelButton className="m-2" size="sm" onClick={handleClose}>
                                        Cancel
                                    </CancelButton>
                                    <SubmitButton 
                                        type="submit" 
                                        size="sm" 
                                        className="m-2" 
                                        loading={loading} 
                                    >
                                        Create
                                    </SubmitButton>
                                </Modal.Footer>
                            </form>
                        </Modal.Body>

            </Modal>
            </Col>
        </Row>
        {/* Toast Container (must be included in your app) */}
        <ToastContainer />
    </Container>
)
}
export default CreateCategory;