import React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	const [isLoading, setLoading] = useState(true);
  	const [data, setData] = useState([]);
  	const getGames = async () => {
     	try {
     		const response = await fetch('http://35.153.97.187:8080/teams');
      		const json = await response.json();
      		setData(json.data);
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
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{isLoading ? <ActivityIndicator/> : (
        		<FlatList
          			data={data}
          			keyExtractor={({ id }, index) => id}
          			renderItem={({ item }) => (
            		<Text>{item.team_name}</Text>
          			)}
        		/>
      			)}
			</View>
		</Layout>
	);
}
