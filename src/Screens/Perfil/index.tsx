import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { ConvertTypeInSvg, Type } from '../../utils/typeSvg';
import patternImage from '../../assets/patternPerfil.png';
import { PerfilCard } from './PerfilCard';

import {
    Container,
    Header,
    Title,
    UserInfo,
    Visual,
    Avatar,
    BorderType,
    Info,
    Name,
    UserName,
    Description,
    Pattern,
    Cards,
} from './styles';

interface userProps {
    name: string;
    username: string;
    description: string;
    avatar?: string;
    userType: Type;
    borderType?: Type;
}

export function Perfil() {

    const theme = useTheme();

    const user: userProps = {
        name: 'Ruan Pablo',
        username: '@Nappylityzz',
        description: '🧬 Just a steel user',
        avatar: 'https://i.pinimg.com/564x/62/8f/f2/628ff26a35cb2cb6ee5a76a6f12990b3.jpg',
        userType: 'ghost',
        borderType: 'ghost',
    }

    const borderType = {
        type: user.borderType,
        size: 24,
        color: theme.colors.type[user.borderType],
    }

    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.black} style={'light'} translucent={false} />

            <Header type={user.userType}>
                <Feather name="user" size={32} color={theme.colors.white} />
                <Title type={user.userType}>Perfil</Title>
            </Header>

            <UserInfo>
                <Visual type={user.borderType}>
                    {user.avatar != '' && <Avatar source={{ uri: user.avatar }} />}

                    <BorderType>
                        {user.borderType != 'normal' && ConvertTypeInSvg(borderType)}
                    </BorderType>
                </Visual>

                <Info>
                    <Name>Ruan Pablo</Name>
                    <UserName>@Nappylityzz</UserName>
                    <Description>🧬 Just a psychic user</Description>
                    <Pattern source={patternImage} />
                </Info>
            </UserInfo>

            <Cards>
                <PerfilCard type='fire' phasesCompleted={2} totalEssences={8} />
                <PerfilCard type='ghost' phasesCompleted={2} totalEssences={8} />
                <PerfilCard type='grass' phasesCompleted={2} totalEssences={8} />
                <PerfilCard type='psychic' phasesCompleted={2} totalEssences={8} />
                <PerfilCard type='water' phasesCompleted={2} totalEssences={8} />
                <PerfilCard type='fairy' phasesCompleted={2} totalEssences={8} />
                <PerfilCard type='dark' phasesCompleted={2} totalEssences={8} />
                {/* ... */}
            </Cards>
        </Container>
    );
}