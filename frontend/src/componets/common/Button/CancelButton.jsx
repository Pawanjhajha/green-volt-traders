import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CancelButton({ link, onClick, className = "m-2", size = "sm" }){
    return (
        <>
            {link && (
                <Link to={link} >
                    <Button variant="outline-secondary" size={size} className={className}>Cancel</Button>
                </Link>
            )}
            {/* use the both conditon if we want to move another paget then pass the link & if only close the model then noly pass the onClick event */}
            {onClick && (
                <Button variant="outline-secondary" size={size} className={className} onClick={onClick}>Cancel</Button>
            )}
        </>
    );
}
export default CancelButton;