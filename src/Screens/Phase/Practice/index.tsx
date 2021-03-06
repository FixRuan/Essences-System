import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { phaseProps } from '../../../utils/phasesArray';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Section } from './Section';
import { Bash } from '../../../components/Bash';
import { Options } from '../../../components/Options';
import { Command } from '../../../components/Bash/Command';
import { ProgressBullet } from '../../../components/ProgressBullet';
import { OptionButton } from '../../../components/Options/OptionButton';
import { Button } from '../../../components/Button';

import {
	Container,
	Header,
	Progress,
	Content,
	ButtonGroup,
} from './styles';



interface Props {
	phase: phaseProps;
}


export function Practice({ phase, }: Props) {
	const theme = useTheme();
	const navigation = useNavigation<any>();

	const bullets = [true, false, false, false, false];
	const [bullet, setBullet] = useState(bullets);

	function handleGoHome() {
		navigation.navigate('Home');
	}

	return (
		<Container>
			<StatusBar backgroundColor={theme.colors.black} style={'light'} translucent={false} />

			<Header>
				<TouchableOpacity onPress={handleGoHome}>
					<Feather name='arrow-left' size={36} color={theme.colors.secondary} />
				</TouchableOpacity>

				<Progress>
					{bullet.map((item, index) =>
						<ProgressBullet
							type={phase.essence_type}
							key={index}
							active={item}
						/>)
					}
				</Progress>
			</Header>

			<ScrollView>
				<Content>
					<Section
						title={'Bora Codar!'}
						description={'Nesse desafio você vai desenhar 6 essências com alguns comandos.'}
						type={phase.essence_type}
					/>

					<Section
						title={'Dicas!'}
						description={'Utilize os botões para criar as essências e use a essência “normal” para quebrar a linha'}
						type={phase.essence_type}
					/>

					<Bash type={phase.essence_type} title={'Objetivo do código'}>
						{phase.answers.map((option, index) =>
							<Command key={index} type={option} />)
						}
					</Bash>

					<Bash type={phase.essence_type} title={'Código atual'}>
						{phase.default_answer.map((option, index) =>
							<Command key={index} type={option} />)
						}
					</Bash>

					<Options type={phase.essence_type}>
						{phase.options.map((option, index) =>
							<OptionButton
								key={index}
								name={option.name}
								type={option.type}
							/>
						)}
					</Options>

					<ButtonGroup>
						<Button
							type='normal'
							title='Solução'
						/>

						<Button
							type={phase.essence_type}
							title='Compilar'
						/>
					</ButtonGroup>
				</Content>
			</ScrollView>
		</Container>
	);
}