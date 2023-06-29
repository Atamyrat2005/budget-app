// rrd imports
import { Form, NavLink } from "react-router-dom";

// library
import { FaTrash } from "react-icons/fa6";

// assets
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink to="/" aria-label="Go to home">
                <img src={logomark} alt="logomark" height={30} />
                <span>HomeBudget</span>
            </NavLink>
            {
                userName && (
                    <Form method="post" action="/logout" onSubmit={(event) => {
                        if(!confirm("Delete user and all  data?")){
                            event.preventDefault()
                        }
                    }}>
                        <button type="submit" className="btn btn--warning">
                            <span>Delete User <FaTrash width={20} /></span>
                        </button>
                    </Form>
                )
            }
        </nav>
    );
}

export default Nav;