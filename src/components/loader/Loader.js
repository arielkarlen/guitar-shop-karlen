import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="grow" />
      <p className="text-center">Cargando...</p>
    </div>
  );
};

export default Loader;
