import {Routes, Route} from "react-router-dom";
import {Cog6ToothIcon} from "@heroicons/react/24/solid";
import {IconButton} from "@material-tailwind/react";
import {
    Configurator,
    DashboardNavbar,
    Footer,
    Sidenav
} from "../widgets/layout";
import {setOpenConfigurator, useMaterialTailwindController} from "../context";
import All from "../pages/dashboard/all";
import Types from "../pages/dashboard/types";
import {fetchData} from "../utils/fetchData";


const URL = process.env.REACT_APP_APIURL + 'type';

const API = fetchData(URL)

export function Dashboard() {
    const [controller, dispatch] = useMaterialTailwindController();
    const {sidenavType} = controller;

    const data = [API.read()];
    return (
        <div className="min-h-screen bg-blue-gray-50/50">

            <Sidenav
                routes={data}
            />

            <div className="p-4 xl:ml-80">
                <DashboardNavbar/>
                <Configurator/>
                <IconButton
                    size="lg"
                    color="white"
                    className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                    ripple={false}
                    onClick={() => setOpenConfigurator(dispatch, true)}
                >
                    <Cog6ToothIcon className="h-5 w-5"/>
                </IconButton>

                <Routes>
                    <Route path={'/todos'} element={<All/>}/>
                </Routes>

                <Routes>
                    {data.map(
                        ({previous, results}) => (
                            results.map(({name, url}) => (
                                // <Route exact path={name} element={<Types name={name} url={url}/>}/>
                                <Route path={name} element={<Types/>}/>
                            ))
                        )
                    )}

                </Routes>

            </div>
        </div>
    )
}

export default Dashboard;




