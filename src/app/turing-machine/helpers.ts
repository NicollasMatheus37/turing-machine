export class MachineActions {
    state: string | number = "";
    entrySimbol: string = "";
    nextSate: string | number = "";
    writeSimbol: string = "";
    direction: string = "";
}

export class MultiplicationExample {
    symbols = ['*', '_', '->', 'a'];
    states = ['->', '0', '1', '2', '3', '4', '5', '6'];
    actions = [
        {
            state: '->',
            entrySimbol: '*',
            nextSate: '->',
            writeSimbol: '*',
            direction: 'E',
        },
        {
            state: '->',
            entrySimbol: '_',
            nextSate: '->',
            writeSimbol: '_',
            direction: 'E',
        },
        {
            state: '->',
            entrySimbol: '->',
            nextSate: '0',
            writeSimbol: '_',
            direction: 'D',
        },
        {
            state: '->',
            entrySimbol: 'a',
            nextSate: '->',
            writeSimbol: '*',
            direction: 'E',
        },
        {
            state: '0',
            entrySimbol: '*',
            nextSate: '1',
            writeSimbol: '->',
            direction: 'D',
        },
        {
            state: '0',
            entrySimbol: '_',
            nextSate: '6',
            writeSimbol: '_',
            direction: 'D',
        },
        {
            state: '1',
            entrySimbol: '*',
            nextSate: '1',
            writeSimbol: '*',
            direction: 'D',
        },
        {
            state: '1',
            entrySimbol: '_',
            nextSate: '2',
            writeSimbol: '_',
            direction: 'D',
        },
        {
            state: '2',
            entrySimbol: '*',
            nextSate: '3',
            writeSimbol: 'a',
            direction: 'D',
        },
        {
            state: '2',
            entrySimbol: '_',
            nextSate: '->',
            writeSimbol: '_',
            direction: 'E',
        },
        {
            state: '3',
            entrySimbol: '*',
            nextSate: '3',
            writeSimbol: '*',
            direction: 'D',
        },
        {
            state: '3',
            entrySimbol: '_',
            nextSate: '4',
            writeSimbol: '_',
            direction: 'D',
        },
        {
            state: '4',
            entrySimbol: '*',
            nextSate: '4',
            writeSimbol: '*',
            direction: 'D',
        },
        {
            state: '4',
            entrySimbol: '_',
            nextSate: '5',
            writeSimbol: '*',
            direction: 'E',
        },
        {
            state: '5',
            entrySimbol: '*',
            nextSate: '5',
            writeSimbol: '*',
            direction: 'E',
        },
        {
            state: '5',
            entrySimbol: '_',
            nextSate: '5',
            writeSimbol: '_',
            direction: 'E',
        },
        {
            state: '5',
            entrySimbol: 'a',
            nextSate: '2',
            writeSimbol: 'a',
            direction: 'D',
        },
        {
            state: '6',
            entrySimbol: '*',
            nextSate: '6',
            writeSimbol: '_',
            direction: 'D',
        },
        {
            state: '6',
            entrySimbol: '_',
            nextSate: '6',
            writeSimbol: '->',
            direction: 'PARA',
        },
    ];
}

// export class SubtractionExample {
//     symbols = [];
//     states = [];
//     actions = [
//         {
//             state: "",
//             entrySimbol: "",
//             nextSate: "",
//             writeSimbol: "",
//             direction: "",
//         },
//         {
//             state: "",
//             entrySimbol: "",
//             nextSate: "",
//             writeSimbol: "",
//             direction: "",
//         },
//         {
//             state: "",
//             entrySimbol: "",
//             nextSate: "",
//             writeSimbol: "",
//             direction: "",
//         },
//         {
//             state: "",
//             entrySimbol: "",
//             nextSate: "",
//             writeSimbol: "",
//             direction: "",
//         },
//         {
//             state: "",
//             entrySimbol: "",
//             nextSate: "",
//             writeSimbol: "",
//             direction: "",
//         }
//     ];
// }