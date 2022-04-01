import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	const [name, setName] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		names();
	}, [])

	const names = async () => {
		try {
			const response = await fetch('http://35.153.97.187:8080/schedule/games');
			const json = await response.json();
			setName(json.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<View>
			<Text>Games</Text>
			{isLoading ? <ActivityIndicator /> : (
				<SafeAreaView>
				<FlatList>
					data={name}
					keyExtractor={({ id }, index) => id}
					renderItem={({ item }) => (
						<Text>{item.pick}</Text>
					)}
				</FlatList>
				</SafeAreaView>
			)
			}
		</View>
	);
}
/*
		return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>Games:</Text>
				<FlatList>
					data={name}
					keyExtractor={({ id }, index) => id}
					renderItem={({ item }) => (
					<Text>{item.pick}</Text>
						)}
				</FlatList>
			</View>
		</Layout>
	);
	*/