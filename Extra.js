function recorrerArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

recorrerArray([1, 2, 3], function(num) {
    console.log("Numero:", num);
});
