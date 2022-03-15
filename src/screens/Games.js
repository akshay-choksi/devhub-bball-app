import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { ThemeProvider } from "react-native-rapi-ui";
import { ActivityIndicator, FlatList } from 'react-native';

export default App = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
  
	const getMovies = async () => {
	   try {
		const response = await fetch('http://35.153.97.187:8080/schedule/games');
		const json = await response.json();
		setData(json.movies);
	  } catch (error) {
		console.error(error);
	  } finally {
		setLoading(false);
	  }
	}
  
	useEffect(() => {
	  getMovies();
	}, []);
  
	return (
	  <View style={{ flex: 1, padding: 24 }}>
		{isLoading ? <ActivityIndicator/> : (
		  <FlatList
			data={data}
			keyExtractor={({ id }, index) => id}
			renderItem={({ item }) => (
			  <Text>{item.title}, {item.releaseYear}</Text>
			)}
		  />
		)}
	  </View>
	);
  };