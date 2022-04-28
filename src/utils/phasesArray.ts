import { Type } from "./typeSvg";

export type phaseProps = {
    id: string;
    name: string;
    description: string;
    type: string;
    essence_type: Type;
}



export const phases: phaseProps[] = [
    {
        id: '1',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'fire'
    },
    {
        id: '2',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'water'
    },
    {
        id: '3',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'poison'
    },
    {
        id: '4',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'bug'
    },
    {
        id: '5',
        type: 'practice',
        name: 'Introdução',
        description: 'Entenderemos o básico de T.I e como tudo se conecta com programação.',
        essence_type: 'rock'
    }
]