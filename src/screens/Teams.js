import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>This is the Teams tab</Text>
			</View>
		</Layout>
	);
}
//getTeams
/*
const getTeams = () => {
	return fetch('http://35.153.97.187:8080/teams')
	.then(res => res.json())
	.then(data=> console.log(data))
//error catching 
.catch((error) => {
	console.error(error);
})
}

// return the data 
return (
    <div>
      <h1>Teams</h1>
      <div className='Team-container'>
        {getTeams.map((team) => (
          <div className='card'>
          </div>
        ))}
      </div>
    </div>
  );

*/












