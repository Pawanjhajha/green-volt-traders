import { Button } from "react-bootstrap";
import LoaderButton from "./LoaderButton";

function SubmitButton({ type = 'submit', size, className = 'w-100', children, loading = false }) {
    //the children prop is special type prop <P>hello</p> then the hello automatically pass as the prop of children
    return (
        <>
         {/* disabled={loading} ye propetry disabled=true hone par login button ko disable . false hone par button ko show karegi */}
        <Button type={type} size={size} className={className} disabled={loading}>
            {loading ? <LoaderButton loading={loading} text={children} /> : children}
        </Button>
        </>
    );
}
export default SubmitButton;