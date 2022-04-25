import Bug from '../assets/Essences/bug.svg';
import Dark from '../assets/Essences/dark.svg';
import Dragon from '../assets/Essences/dragon.svg';
import Eletric from '../assets/Essences/eletric.svg';
import Fairy from '../assets/Essences/fairy.svg';
import Fighting from '../assets/Essences/fight.svg';
import Fire from '../assets/Essences/fire.svg';
import Flying from '../assets/Essences/flying.svg';
import Ghost from '../assets/Essences/ghost.svg';
import Grass from '../assets/Essences/grass.svg';
import Ground from '../assets/Essences/ground.svg';
import Ice from '../assets/Essences/ice.svg';
import Normal from '../assets/Essences/normal.svg';
import Poison from '../assets/Essences/poison.svg';
import Psychic from '../assets/Essences/psychic.svg';
import Rock from '../assets/Essences/rock.svg';
import Steel from '../assets/Essences/steel.svg';
import Water from '../assets/Essences/water.svg';

export type Type =
    "bug" | "dark" | "dragon" |
    "electric" | "fairy" | "fighting" |
    "fire" | "flying" | "ghost" |
    "grass" | "ground" | "ice" |
    "normal" | "poison" | "psychic" |
    "rock" | "steel" | "water";

interface SvgTypeProps {
    type: Type;
    color: string;
    size?: number;
}

export function ConvertTypeInSvg({ type, color, size }: SvgTypeProps) {
    switch (type) {
        case 'bug':
            return <Bug fill={color} width={size} />;
        case 'dark':
            return <Dark fill={color} width={size} />;
        case 'dragon':
            return <Dragon fill={color} width={size} />;
        case 'electric':
            return <Eletric fill={color} width={size} />;
        case 'fairy':
            return <Fairy fill={color} width={size} />;
        case 'fighting':
            return <Fighting fill={color} width={size} />;
        case 'fire':
            return <Fire fill={color} width={size} />;
        case 'flying':
            return <Flying fill={color} width={size} />;
        case 'ghost':
            return <Ghost fill={color} width={size} />;
        case 'grass':
            return <Grass fill={color} width={size} />;
        case 'ground':
            return <Ground fill={color} width={size} />;
        case 'ice':
            return <Ice fill={color} width={size} />;
        case 'normal':
            return <Normal fill={color} width={size} />;
        case 'poison':
            return <Poison fill={color} width={size} />;
        case 'psychic':
            return <Psychic fill={color} width={size} />;
        case 'rock':
            return <Rock fill={color} width={size} />;
        case 'steel':
            return <Steel fill={color} width={size} />;
        case 'water':
            return <Water fill={color} width={size} />;
        default:
            return <Normal fill={color} width={size} />;
    }
}