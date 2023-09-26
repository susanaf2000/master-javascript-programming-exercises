function getFirstElementOfProperty(obj, key) {
    if(key in obj && Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key][0];
    } else {
        return undefined;
    }
}
