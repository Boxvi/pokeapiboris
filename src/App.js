import {Navigate, Route, Routes} from "react-router-dom";
import {Dashboard} from "./version_dos/layouts";
import Vista from "./vista/vista";
import VersionUno from "./version_uno/version-uno";

function App() {
    return (
        <Routes>

            <Route path={"/"} element={<Vista/>}/>
            <Route path={"/version_uno"} element={<VersionUno/>}/>
            <Route path={"/version_dos/*"} element={<Dashboard/>}/>


            {/*<Route path="/dashboard/*" element={<Dashboard />} />*/}
            <Route
                path="/version_dos/"
                element={<Navigate to="/version_dos/todos" replace />}
            />

        </Routes>
    );
}

export default App;
