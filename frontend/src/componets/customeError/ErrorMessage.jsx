// import './ErrorMessage.css'
// const ErrorMessage = ({ message }) => {
//     if (!message) return null;
//     return (
//       <div className="error-container"> 
//       <p className="error-text">{message}</p>
//       </div>
//     )
//   };
  
//   export default ErrorMessage;

import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
    return (
      <div className={`error-container ${message ? "show-error" : ""}`}>
        <p className="error-text">{message || ""}</p> {/* Message won't take space when empty */}
      </div>
    );
};

export default ErrorMessage;
