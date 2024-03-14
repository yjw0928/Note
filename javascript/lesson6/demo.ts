Promise.reject('a').then(
    () => {},
    (v) => console.log(v)
);
