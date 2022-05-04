import { Type } from "./typeSvg";

export type phaseProps = {
    id: string;
    name: string;
    description: string;
    type: string;
    essence_type: Type;
    answers: Type[];
    default_answer: Type[];
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
        ],
        default_answer: [
            'ground',
            'fire',
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
        ],
        default_answer: [
            'ice',
            'water',
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
        ],
        default_answer: [
            'bug',
            'poison',
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
        ],
        default_answer: [
            'grass',
            'bug',
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
        ],
        default_answer: [
            'fire',
            'rock',
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
        ],
        default_answer: [
            'fairy',
            'electric',
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
        ],
        default_answer: [
            'bug',
            'grass',
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
        ],
        default_answer: [
            'water',
            'ice',
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
        ],
        default_answer: [
            'psychic',
            'fighting',
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
        ],
        default_answer: [
            'dark',
            'psychic',
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
        ],
        default_answer: [
            'fire',
            'ground',
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
        ],
        default_answer: [
            'dragon',
            'flying',
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
        ],
        default_answer: [
            'flying',
            'ghost',
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
        ],
        default_answer: [
            'flying',
            'dragon',
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
        ],
        default_answer: [
            'electric',
            'fairy',
        ]
    },
]