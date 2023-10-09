import {useMaterialTailwindController} from "../../context";
import {Avatar, Button, Typography} from "@material-tailwind/react";
import {Link, NavLink} from "react-router-dom";
import {HomeIcon} from "@heroicons/react/24/outline";
import TypeIcon from "../../utils/type-icon";

const icon = {
    className: "w-5 h-5 text-inherit",
};

export function Sidenav({brandImg, brandName, routes, index}) {

    const [controller, dispatch] = useMaterialTailwindController();
    const {sidenavColor, sidenavType, openSidenav} = controller;
    const sidenavTypes = {
        dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
        white: "bg-white shadow-lg",
        transparent: "bg-transparent",
    };

    return (
        <aside
            className={`${
                sidenavTypes[sidenavType]
            } ${
                openSidenav ? "translate-x-0" : "-translate-x-80"
            } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
            style={{maxHeight: "calc(100vh - 32px)", overflowY: "auto"}}
        >
            <div
                className={`relative border-b ${
                    sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
                }`}
            >
                <Link to="/" className="flex items-center gap-4 py-6 px-8">
                    <Avatar src={brandImg} size="sm"/>
                    <Typography
                        variant="h6"
                        color={sidenavType === "dark" ? "white" : "blue-gray"}
                    >
                        {brandName}
                    </Typography>
                </Link>

            </div>

            <div className="m-4">
                {routes.map(({count, next, previous, results}, key) => (
                    <ul key={key} className="mb-4 flex flex-col gap-1">

                        <li>
                            <NavLink to={`/version_dos/todos`}>
                                {({isActive}) => (
                                    <Button
                                        variant={isActive ? "gradient" : "text"}
                                        color={
                                            isActive
                                                ? sidenavColor
                                                : sidenavType === "dark"
                                                    ? "white"
                                                    : "blue-gray"
                                        }
                                        className="flex items-center gap-4 px-4 capitalize"
                                        fullWidth
                                    >
                                        <HomeIcon {...icon} />
                                        <Typography
                                            color="inherit"
                                            className="font-medium capitalize"
                                        >
                                            todos
                                        </Typography>
                                    </Button>
                                )}
                            </NavLink>
                        </li>

                        {results.map(({name, url}, key) => (
                            <li key={name}>
                                <NavLink to={`/version_dos/${name}`}>
                                    {({isActive}) => (
                                        <Button
                                            variant={isActive ? "gradient" : "text"}
                                            color={
                                                isActive
                                                    ? sidenavColor
                                                    : sidenavType === "dark"
                                                        ? "white"
                                                        : "blue-gray"
                                            }
                                            className="flex items-center gap-4 px-4 capitalize"
                                            fullWidth
                                        >
                                            <TypeIcon name={name}/>
                                            <Typography
                                                color="inherit"
                                                className="font-medium capitalize"
                                            >
                                                {name}
                                            </Typography>
                                        </Button>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

        </aside>
    )

}

Sidenav.defaultProps = {
    brandImg: "../logo.svg",
    brandName: "POKEDEX",
};

Sidenav.displayName = "/src/widgets/layout/sidnav";

export default Sidenav;
// /*
//         <aside
//             className={`${sidenavTypes[sidenavType]} ${
//                 openSidenav ? "translate-x-0" : "-translate-x-80"
//             } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
//         >
//             {/*<div*/}
{/*    className={`relative border-b ${*/
}
{/*        sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"*/
}
{/*    }`}*/
}
{/*>*/
}
{/*    <Link to="/" className="flex items-center gap-4 py-6 px-8">*/
}
{/*        /!*<Avatar src={brandImg} size="sm"/>*!/*/
}
{/*        <Typography*/
}
{/*            variant="h6"*/
}
{/*            color={sidenavType === "dark" ? "white" : "blue-gray"}*/
}
{/*        >*/
}
{/*            {routes}*/
}
{/*        </Typography>*/
}
{/*    </Link>*/
}

{/*</div>*/
}

{/*<div>*/
}
{/*    {index} - {routes.results}*/
}
{/*    hola*/
}
{/*</div>*/
}
//
// <div className="m-4">
//
//     {routes.map(({count, next, previous, results}, key) => (
//         <>
//         </>
//     ))}
//
//     <ul key={index}>
//         <li className="mx-3.5 mt-4 mb-2">
//             <Typography
//                 variant="small"
//                 color={sidenavType === "dark" ? "white" : "blue-gray"}
//                 className="font-black uppercase opacity-75"
//             >
//                 {routes}
//             </Typography>
//         </li>
//
//     </ul>
// </div>
//
// </aside>

