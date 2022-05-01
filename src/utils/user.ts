import { Type } from "./typeSvg";

interface userProps {
    name: string;
    username: string;
    description: string;
    avatar?: string;
    userType: Type;
    borderType?: Type;
}

export const user: userProps = {
    name: 'Ruan Pablo',
    username: '@Nappylityzz',
    description: '🧬 Just a rock user',
    avatar: 'https://i.pinimg.com/564x/62/8f/f2/628ff26a35cb2cb6ee5a76a6f12990b3.jpg',
    userType: 'rock',
    borderType: 'rock',
}