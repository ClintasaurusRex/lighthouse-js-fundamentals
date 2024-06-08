const judgeVegetable = function (vegetables, metric) {
    let highest = 0;
    let submitter = '';
    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i][metric] > highest) {
            highest = vegetables[i][metric];
            submitter = vegetables[i].submitter;
        }
    }
    return submitter;
}

let vegetablesInput = [
    {
        submitter: "Old Man Franklin",
        redness: 10,
        plumpness: 5
    },
    {
        submitter: "Sally Tomato-Grower",
        redness: 2,
        plumpness: 8
    },
    {
        submitter: "Hamid Hamidson",
        redness: 4,
        plumpness: 3
    }
]

console.log(judgeVegetable(vegetablesInput, 'redness'));
console.log(judgeVegetable(vegetablesInput, 'plumpness'));