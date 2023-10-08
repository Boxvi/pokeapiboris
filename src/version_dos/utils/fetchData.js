const getSuspender = (promise) => {
    let status = "pending";
    let response;

    const suspender = promise
        .then((res) => {
            status = "success";
            response = res;
        })
        .catch((err) => {
            status = "error";
            response = err;
        });

    const read = () => {
        if (status === "pending") {
            throw suspender;
        } else if (status === "error") {
            throw response;
        } else {
            return response;
        }
    };

    return { read };
};

export function fetchData(url) {
    const promise = fetch(url)
        .then((response) => response.json())
        .then(
            (json) => json,
            (error) => {
                throw error; // Lanzar el error en caso de que ocurra
            }
        );

    return getSuspender(promise);
}
