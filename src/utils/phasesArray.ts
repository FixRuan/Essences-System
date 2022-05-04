import { Type } from "./typeSvg";

type PhaseOptions = {
    type: Type,
    name: string,
}

export type phaseProps = {
    id: string;
    name: string;
    description: string;
    type: string;
    essence_type: Type;
    answers: Type[];
    default_answer: Type[];
    options: PhaseOptions[];
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
        ],
        options: [
            {
                type: 'fire',
                name: 'fire',
            },
            {
                type: 'water',
                name: 'water',
            },
            {
                type: 'ground',
                name: 'ground',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
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
        ],
        options: [
            {
                type: 'ice',
                name: 'fire',
            },
            {
                type: 'water',
                name: 'water',
            },
            {
                type: 'bug',
                name: 'bug',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
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
        ],
        options: [
            {
                type: 'bug',
                name: 'bug',
            },
            {
                type: 'poison',
                name: 'poison',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'fighting',
                name: 'fighting',
            },
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
        ],
        options: [
            {
                type: 'grass',
                name: 'grass',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'bug',
                name: 'bug',
            },
            {
                type: 'ice',
                name: 'ice',
            },
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
        ],
        options: [
            {
                type: 'fire',
                name: 'fire',
            },
            {
                type: 'water',
                name: 'water',
            },
            {
                type: 'rock',
                name: 'rock',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
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
        ],
        options: [
            {
                type: 'psychic',
                name: 'psychic',
            },
            {
                type: 'electric',
                name: 'electric',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'fairy',
                name: 'fairy',
            },
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
        ],
        options: [
            {
                type: 'bug',
                name: 'bug',
            },
            {
                type: 'grass',
                name: 'grass',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'poison',
                name: 'poison',
            },
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
        ],
        options: [
            {
                type: 'water',
                name: 'water',
            },
            {
                type: 'ice',
                name: 'ice',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'fighting',
                name: 'fighting',
            },
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
        ],
        options: [
            {
                type: 'psychic',
                name: 'psychic',
            },
            {
                type: 'fighting',
                name: 'fighting',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'poison',
                name: 'poison',
            },
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
        ],
        options: [
            {
                type: 'dark',
                name: 'dark',
            },
            {
                type: 'psychic',
                name: 'psychic',
            },
            {
                type: 'fire',
                name: 'fire',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
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
        ],
        options: [
            {
                type: 'fire',
                name: 'fire',
            },
            {
                type: 'ground',
                name: 'ground',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'poison',
                name: 'poison',
            },
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
        ],
        options: [
            {
                type: 'dragon',
                name: 'dragon',
            },
            {
                type: 'flying',
                name: 'flying',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: "flying",
                name: "flying",
            },
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
        ],
        options: [
            {
                type: 'flying',
                name: 'flying',
            },
            {
                type: 'ghost',
                name: 'ghost',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'electric',
                name: 'electric',
            },
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
        ],
        options: [
            {
                type: 'flying',
                name: 'flying',
            },
            {
                type: 'dragon',
                name: 'dragon',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'dark',
                name: 'dark',
            },
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
        ],
        options: [
            {
                type: 'electric',
                name: 'electric',
            },
            {
                type: 'fairy',
                name: 'fairy',
            },
            {
                type: 'normal',
                name: 'newLine',
            },
            {
                type: 'fighting',
                name: 'fighting',
            },
        ]
    },
]