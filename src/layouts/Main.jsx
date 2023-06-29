// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

//  assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav";

// helper functions
import { fetchData } from "../helpers";

export function mainLoader() {
    const userName = fetchData("userName")
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className="layout">
            <Nav userName={userName}></Nav>
            <main>
                <Outlet></Outlet>
            </main>
            <img src={wave} alt="wave" />
        </div>
    );
}

export default Main
    ;