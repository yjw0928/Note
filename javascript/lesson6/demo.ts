Promise.resolve()
    .then(() => {
        console.log(1);
        return Promise.resolve();
    })
    .then(() => {
        console.log();
    });

Promise.resolve()
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    });
