import {fetchData} from "../utils/fetchData";
import {Suspense} from "react";
import {Sidenav} from "../widgets/layout";
import {Route, Routes} from "react-router-dom";
import Types from "../pages/dashboard/types";
import All from "../pages/dashboard/all";


const URL = process.env.REACT_APP_APIURL + 'type';

const API = fetchData(URL)

export function Dashboard() {

    const data = [API.read()];
    return (
        <div className="min-h-screen bg-blue-gray-50/50">

            <Sidenav
                routes={data}
            />

            <div className="p-4 xl:ml-80">

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




