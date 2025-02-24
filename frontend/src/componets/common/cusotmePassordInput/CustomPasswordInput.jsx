import { useState } from "react";
import { Form ,InputGroup} from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './customePasswordInput.css';
import ErrorMessage from "../customeError/ErrorMessage";
function CustomPasswordInput({label='password',type='password' ,placeholder="Enter your password",value,onChange,name,icon,className,inputClassName,groupClassName,error}){
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return(
        <>
        <Form.Group controlId={`fromGroup-${name}`} className={`mb-3 ${groupClassName || ""}`}>
            {label &&<Form.Label className="input-label">{label}</Form.Label>}
            <InputGroup className="input-group-tag" >
            <Form.Control  type={showPassword ? "text" : "password"} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className={inputClassName}
            // className="border-end-0"
            ></Form.Control>
                {/* {type === 'password' && (
                    <InputGroup.Text onClick={handleTogglePassword} style={{ backgroundColor: 'white' }}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </InputGroup.Text>
                )} */}
                <span onClick ={handleTogglePassword} className="password-toggle-icon">{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                </InputGroup>
                <ErrorMessage message={error} /> {/* Show error below the input */}
        </Form.Group>
        </>
    )
}
export default CustomPasswordInput;