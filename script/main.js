import { puzzle, sol } from "./prob_soln_list.js";

let doc = [
    [document.getElementById('r0-c0'),
    document.getElementById('r0-c1'),
    document.getElementById('r0-c2'),
    document.getElementById('r0-c3'),
    document.getElementById('r0-c4'),
    document.getElementById('r0-c5'),
    document.getElementById('r0-c6'),
    document.getElementById('r0-c7'),
    document.getElementById('r0-c8')],

    [document.getElementById('r1-c0'),
    document.getElementById('r1-c1'),
    document.getElementById('r1-c2'),
    document.getElementById('r1-c3'),
    document.getElementById('r1-c4'),
    document.getElementById('r1-c5'),
    document.getElementById('r1-c6'),
    document.getElementById('r1-c7'),
    document.getElementById('r1-c8')],

    [document.getElementById('r2-c0'),
    document.getElementById('r2-c1'),
    document.getElementById('r2-c2'),
    document.getElementById('r2-c3'),
    document.getElementById('r2-c4'),
    document.getElementById('r2-c5'),
    document.getElementById('r2-c6'),
    document.getElementById('r2-c7'),
    document.getElementById('r2-c8')],

    [document.getElementById('r3-c0'),
    document.getElementById('r3-c1'),
    document.getElementById('r3-c2'),
    document.getElementById('r3-c3'),
    document.getElementById('r3-c4'),
    document.getElementById('r3-c5'),
    document.getElementById('r3-c6'),
    document.getElementById('r3-c7'),
    document.getElementById('r3-c8')],

    [document.getElementById('r4-c0'),
    document.getElementById('r4-c1'),
    document.getElementById('r4-c2'),
    document.getElementById('r4-c3'),
    document.getElementById('r4-c4'),
    document.getElementById('r4-c5'),
    document.getElementById('r4-c6'),
    document.getElementById('r4-c7'),
    document.getElementById('r4-c8')],

    [document.getElementById('r5-c0'),
    document.getElementById('r5-c1'),
    document.getElementById('r5-c2'),
    document.getElementById('r5-c3'),
    document.getElementById('r5-c4'),
    document.getElementById('r5-c5'),
    document.getElementById('r5-c6'),
    document.getElementById('r5-c7'),
    document.getElementById('r5-c8')],

    [document.getElementById('r6-c0'),
    document.getElementById('r6-c1'),
    document.getElementById('r6-c2'),
    document.getElementById('r6-c3'),
    document.getElementById('r6-c4'),
    document.getElementById('r6-c5'),
    document.getElementById('r6-c6'),
    document.getElementById('r6-c7'),
    document.getElementById('r6-c8')],

    [document.getElementById('r7-c0'),
    document.getElementById('r7-c1'),
    document.getElementById('r7-c2'),
    document.getElementById('r7-c3'),
    document.getElementById('r7-c4'),
    document.getElementById('r7-c5'),
    document.getElementById('r7-c6'),
    document.getElementById('r7-c7'),
    document.getElementById('r7-c8')],

    [document.getElementById('r8-c0'),
    document.getElementById('r8-c1'),
    document.getElementById('r8-c2'),
    document.getElementById('r8-c3'),
    document.getElementById('r8-c4'),
    document.getElementById('r8-c5'),
    document.getElementById('r8-c6'),
    document.getElementById('r8-c7'),
    document.getElementById('r8-c8')]
];

for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(puzzle[i][j]==0)
            doc[i][j].innerHTML = `<p id="correction"><input type="number" id="sr${i}-sc${j}"></p>`;
        else
            doc[i][j].innerHTML = `<p>${puzzle[i][j]}</p>`;
    }
}

let form = document.getElementById('form');

let answers = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(puzzle[i][j] == 0)
            answers[i][j] = document.getElementById(`sr${i}-sc${j}`);
        else
            answers[i][j] = puzzle[i][j];
    }
}

let a,b=0;

let msg = document.getElementById('msg');


form.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(typeof(answers[i][j]) != 'number')
                answers[i][j] = parseInt(answers[i][j].value);
        }
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            a = answers[i][j];
            if(a !== sol[i][j])
                doc[i][j].style = 'background-color: red';
            else
                b++;
        }
    }
    if(b == 81)
        location.href = "./congrats.html";
    else
        alert('Please complete the puzzle to move ahead.');
}
