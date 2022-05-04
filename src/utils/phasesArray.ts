import { Type } from "./typeSvg";



export type phaseProps = {
    id: string;
    name: string;
    description: string;
    type: string;
    essence_type: Type;
    answers: Type[];
}



export const phases: phaseProps[] = [
    {
        id: '1',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'fire',
        answers: [
            'ground',
            'fire',
            'fire',
            'fire',
            'normal',
            'fire',
            'fire',
            'fire',
            'ground',
        ]
    },
    {
        id: '2',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'water',
        answers: [
            'ice',
            'water',
            'water',
            'water',
            'normal',
            'water',
            'water',
            'water',
            'ice',
        ]
    },
    {
        id: '3',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'poison',
        answers: [
            'bug',
            'poison',
            'poison',
            'poison',
            'normal',
            'poison',
            'poison',
            'poison',
            'bug',
        ]
    },
    {
        id: '4',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'bug',
        answers: [
            'grass',
            'bug',
            'bug',
            'bug',
            'normal',
            'bug',
            'bug',
            'bug',
            'grass',
        ]
    },
    {
        id: '5',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'rock',
        answers: [
            'fire',
            'rock',
            'rock',
            'rock',
            'normal',
            'rock',
            'rock',
            'rock',
            'fire',
        ]
    },
    {
        id: '6',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'electric',
        answers: [
            'fairy',
            'electric',
            'electric',
            'electric',
            'normal',
            'electric',
            'electric',
            'electric',
            'fairy',
        ]
    },
    {
        id: '7',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'grass',
        answers: [
            'bug',
            'grass',
            'grass',
            'grass',
            'normal',
            'grass',
            'grass',
            'grass',
            'bug',
        ]
    },
    {
        id: '8',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'ice',
        answers: [
            'water',
            'ice',
            'ice',
            'ice',
            'normal',
            'ice',
            'ice',
            'ice',
            'water',
        ]
    },
    {
        id: '9',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'fighting',
        answers: [
            'psychic',
            'fighting',
            'fighting',
            'fighting',
            'normal',
            'fighting',
            'fighting',
            'fighting',
            'psychic',
        ]
    },
    {
        id: '10',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'psychic',
        answers: [
            'dark',
            'psychic',
            'psychic',
            'psychic',
            'normal',
            'psychic',
            'psychic',
            'psychic',
            'dark',
        ]
    },
    {
        id: '11',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'ground',
        answers: [
            'fire',
            'ground',
            'ground',
            'ground',
            'normal',
            'ground',
            'ground',
            'ground',
            'fire',
        ]
    },
    {
        id: '12',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'flying',
        answers: [
            'dragon',
            'flying',
            'flying',
            'flying',
            'normal',
            'flying',
            'flying',
            'flying',
            'dragon',
        ]
    },
    {
        id: '13',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'ghost',
        answers: [
            'flying',
            'ghost',
            'ghost',
            'ghost',
            'normal',
            'ghost',
            'ghost',
            'ghost',
            'flying',
        ]
    },
    {
        id: '14',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'dragon',
        answers: [
            'flying',
            'dragon',
            'dragon',
            'dragon',
            'normal',
            'dragon',
            'dragon',
            'dragon',
            'flying',
        ]
    },
    {
        id: '15',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'fairy',
        answers: [
            'electric',
            'fairy',
            'fairy',
            'fairy',
            'normal',
            'fairy',
            'fairy',
            'fairy',
            'electric',
        ]
    },
]