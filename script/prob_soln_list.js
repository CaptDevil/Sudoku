export let puzzle = [
    [0,0,0,2,6,0,7,0,1],
    [6,8,0,0,7,0,0,9,0],
    [1,9,0,0,0,4,5,0,0],
    [8,2,0,1,0,0,0,4,0],
    [0,0,4,6,0,2,9,0,0],
    [0,5,0,0,0,3,0,2,8],
    [0,0,9,3,0,0,0,7,4],
    [0,4,0,0,5,0,0,3,6],
    [7,0,3,0,1,8,0,0,0]
];

export let sol = [
    [4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,1,7,4,3,6,2,8],
    [5,1,9,3,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9]
];

/**
 * let max = 3, min = 0;

let r = Math.floor(Math.random()*(max-min+1))+min;
let p,s;
let puz = new Array();

//Puzzle list

puz[0] = {
    question: [
        [0,0,0,2,6,0,7,0,1],
        [6,8,0,0,7,0,0,9,0],
        [1,9,0,0,0,4,5,0,0],
        [8,2,0,1,0,0,0,4,0],
        [0,0,4,6,0,2,9,0,0],
        [0,5,0,0,0,3,0,2,8],
        [0,0,9,3,0,0,0,7,4],
        [0,4,0,0,5,0,0,3,6],
        [7,0,3,0,1,8,0,0,0]
    ],
    solution: [
        [4,3,5,2,6,9,7,8,1],
        [6,8,2,5,7,1,4,9,3],
        [1,9,7,8,3,4,5,6,2],
        [8,2,6,1,9,5,3,4,7],
        [3,7,4,6,8,2,9,1,5],
        [9,5,1,7,4,3,6,2,8],
        [5,1,9,3,2,6,8,7,4],
        [2,4,8,9,5,7,1,3,6],
        [7,6,3,4,1,8,2,5,9]
    ]
};

puz[1] = {
    question: [
        [1,0,0,4,8,9,0,0,6],
        [7,3,0,0,5,0,0,4,0],
        [4,6,0,0,0,1,2,9,5],
        [3,8,7,1,2,0,6,0,0],
        [5,0,1,7,0,3,0,0,8],
        [0,4,6,0,9,5,7,1,0],
        [9,1,4,6,0,0,0,8,0],
        [0,2,0,0,4,0,0,3,7],
        [8,0,3,5,1,2,0,0,4]
    ],
    solution: [
        [1,5,2,4,8,9,3,7,6],
        [7,3,9,2,5,6,8,4,1],
        [4,6,8,3,7,1,2,9,5],
        [3,8,7,1,2,4,6,5,9],
        [5,9,1,7,6,3,4,2,8],
        [2,4,6,8,9,5,7,1,3],
        [9,1,4,6,3,7,5,8,2],
        [6,2,5,9,4,8,1,3,7],
        [8,7,3,5,1,2,9,6,4]
    ]
};

puz[2] = {
    question: [
        [0,0,0,0,0,0,2,0,0],
        [0,8,0,0,0,7,0,9,0],
        [6,0,2,0,0,0,5,0,0],
        [0,7,0,0,6,0,0,0,0],
        [0,0,0,9,0,1,0,0,0],
        [0,0,0,0,2,0,0,4,0],
        [0,0,5,0,0,0,6,0,3],
        [0,9,0,4,0,0,0,7,0],
        [0,0,6,0,0,0,0,0,0]
    ],
    solution: [
        [9,5,7,6,1,3,2,8,4],
        [4,8,3,2,5,7,1,9,6],
        [6,1,2,8,4,9,5,3,7],
        [1,7,8,3,6,4,9,5,2],
        [5,2,4,9,7,1,3,6,8],
        [3,6,9,5,2,8,7,4,1],
        [8,4,5,7,9,2,6,1,3],
        [2,9,1,4,3,6,8,7,5],
        [7,3,6,1,8,5,4,2,9]
    ]
};

puz[3] = {
    question: [
        [0,0,0,8,0,0,0,0,0],
        [4,0,0,0,1,5,0,3,0],
        [0,2,9,0,4,0,5,1,8],
        [0,4,0,0,0,0,1,2,0],
        [0,0,0,6,0,2,0,0,0],
        [0,3,2,0,0,0,0,9,0],
        [6,9,3,0,5,0,8,7,0],
        [0,5,0,4,8,0,0,0,1],
        [0,0,0,0,0,3,0,0,0]
    ],
    solution: [
        [3,1,5,8,2,7,9,4,6],
        [4,6,8,9,1,5,7,3,2],
        [7,2,9,3,4,6,5,1,8],
        [9,4,6,5,3,8,1,2,7],
        [5,7,1,6,9,2,4,8,3],
        [8,3,2,1,7,4,6,9,5],
        [6,9,3,2,5,1,8,7,4],
        [2,5,7,4,8,9,3,6,1],
        [1,8,4,7,6,3,2,5,9]
    ]
}

// puzzle selection

switch(r){
    case 0:
        p = puz[0].question;
        s = puz[0].solution;
        break;
    case 1:
        p = puz[1].question;
        s = puz[1].solution;
        break;
    case 2:
        p = puz[2].question;
        s = puz[2].solution;
        break;
    case 3:
        p = puz[3].question;
        s = puz[3].solution;
        break;
}

console.log(r);

export let puzzle = p;
export let sol = s;


 */