import { Spinner } from "react-bootstrap";

function LoaderButton({ loading, text }) {
    //on this (<spiner> ) these brekit use to good practive when we retuen the multiple line jsx
    return (
        <>
            {loading ? (
                <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Logging in...
                </>
            ) : text ? text : "Save"}
        </>
    );
}
export default LoaderButton;
