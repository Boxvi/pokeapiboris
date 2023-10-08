export function Vista() {
    return (
        <div className="m-5 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="max-h-96 rounded-lg bg-gray-200">
                <article
                    className="h-96 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                >
                    <img
                        alt="VERSION 1"
                        src="../version1.png"
                        className="rounded-[10px] h-72 w-full object-cover"
                    />

                    <div className="rounded-[10px] bg-white p-4 mt-3 ">
                        <div style={{textAlign: "center"}}>
                            <a
                                className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                href="/version_uno"
                            >
                            <span
                                className=" block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                                VERSION 1
                            </span>
                            </a>
                        </div>
                    </div>
                </article>

            </div>
            <div className="h-96 rounded-lg bg-gray-200">

                <article
                    className="h-96 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                >
                    <img
                        alt="Office"
                        src="../version2.png"
                        className="rounded-[10px] h-72 w-full object-cover"
                    />

                    <div className="rounded-[10px] bg-white p-4 mt-3 ">
                        <div style={{textAlign: "center"}}>
                            <a
                                className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                href="/version_dos"
                            >
                            <span
                                className=" block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                                VERSION 2
                            </span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}

export default Vista;
