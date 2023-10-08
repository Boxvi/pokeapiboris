export function Home() {
    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}

export default Home;


// import StatisticsCard from "../../widgets/cards/statistics-card";
// import React, {Suspense, startTransition} from "react";
// import {Typography} from "@material-tailwind/react";
// import statisticsCardsData from "../../data/statistics-cards-data";
// import {fetchData} from "../../utils/fetchData";
//
//  const apiData = fetchData("https://api.coinstats.app/public/v1/coins?skip=0&limit=500&currency=USD")
//
// export function Home() {
//
//
//     const data = apiData.read();
//
//     return (
//         <div className="mt-12">
//             <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
//
//                 <Suspense fallback={<div>Loading...</div>}>
//                     {data.coins?.map((coin) => (
//                         <>
//                             <StatisticsCard
//                                 key={coin.id}
//                                 {...coin}
//                                 title={coin.name}
//                                 icon={coin.icon}
//                                 value={coin.availableSupply}
//                                 footer={
//                                     <Typography className="font-normal text-blue-gray-600">
//                                         <strong className={'green'}>{coin.price} %</strong>
//                                         &nbsp;{coin.symbol}
//                                     </Typography>
//                                 }
//                             />
//                         </>
//                     ))}
//                 </Suspense>
//             </div>
//         </div>
//     )
// }
//
//
