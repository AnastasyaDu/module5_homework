let map = new Map();

map.set("привет", "string");

map.set(10, "number");

map.set(false, "boolean");

map.forEach((value, key) => {
    console.log(`<< Ключ - ${key}, значение - ${value} >>.`);
});
