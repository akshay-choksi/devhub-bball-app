import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';
import { ThemeProvider } from "react-native-rapi-ui";
import { ActivityIndicator, FlatList } from 'react-native';

export default App = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	// nested text
	const ReactText = () => {
		const [titleText, setTitleText] = useState("All Games");
		const bodyText = "A complete list of all games stats.";
	  
		const onPressTitle = () => {
		  setTitleText("Basketball Games");
		};
	  
		return (
		  <Text style={styles.baseText}>
			<Text style={styles.titleText} onPress={onPressTitle}>
			  {titleText}
			  {"\n"}
			  {"\n"}
			</Text>
			<Text numberOfLines={5}>{bodyText}</Text>
		  </Text>
		);
	  };
	  
	  const styles = StyleSheet.create({
		baseText: {
		  fontFamily: "Cochin"
		},
		titleText: {
		  fontSize: 20,
		  fontWeight: "bold"
		}
	  });
	  
	  export default ReactText;

	// gets games by year
	const getGames = async () => {
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
	  getGames();
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