function countFrequency(arr) {
    let freq = {};

    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }

    return freq;
}

console.log(countFrequency([1,2,2,3,3,3]));