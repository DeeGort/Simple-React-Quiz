export default function parsePath(path) {
    let result = [];
    for(let key in path) {
        const currentKey = path[key];
        let andArray = [];
        Object.keys(currentKey).forEach(k => {
            if (currentKey[k]) {
                andArray.push(k);
            }
        });
        result.push(andArray);
    }

    return result;
}