import { useRouteError, Link, useNavigate } from "react-router-dom";


// library
import { FcHome } from "react-icons/fc";
import { GiExitDoor } from "react-icons/gi";

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <h1>Uh oh! We've got a problem</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button className="btn btn--dark" onClick={() => navigate(-1)}>
                <GiExitDoor width={10} />
                <span>Go Back</span>
                </button>
                <Link to="/" className="btn btn--dark">
                <FcHome width={10} />
                <span>Go Home</span>
                </Link>
            </div>
        </div>
    );
}

export default Error;