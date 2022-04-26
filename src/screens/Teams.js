import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { Layout, Section, SectionContent,Text, Picker } from 'react-native-rapi-ui';

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

    const [showPicker, setShowPicker] = useState(false)
    const [pickerLabel, setPickerLabel] = useState('label');
    const [pickerValue, setPickerValue] = useState('value');
    const items = [
        { label: 'American', value: 'AAC has 1 championship.' },
        { label: 'Atlantic Coastal Conference', value: 'ACC has 10 championships.' },
        { label: 'Atlantic 10', value: 'A10 has 0 :/ ' },
    ];
//new additions
   

    const styles = StyleSheet.create({
      text:{
        fontSize:30,
        alignSelf: 'center',
        color: 'red'
      }
    })
    
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'left',
					justifyContent: 'left',
				}}
			>
				<Text>NCAA D1 Basketball Teams</Text>

               
			</View>
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

      {/* {
       showPicker&&  ( */}
      <View
				style={{
					fontSize: 100,
					alignItems: 'center',
					color: 'red',
				}}
			>
				 <Text> The {pickerValue} </Text> 
               
			</View>    
        )
            <Section style={{ marginHorizontal: 20, marginTop: 100 }}>
            <SectionContent>
                <View>
                    <Text style={{ marginBottom: 10 }}>Conferences</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        label = {pickerLabel}
                        placeholder="Choose your Conference..."
                        onValueChange={(value) => setPickerValue(value)}
                        onChange={(label) => setPickerLabel(label)}
                        // onClick ={(showPicker => true)}
                    />
                 
              
      </View>
            </SectionContent>
        </Section>
    
       


    {/* Trying to use data */}
        {/* <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id}, index) => id}
          renderItem={({ item }) => (
            <Text>{item.logoURL}, {item.abbr}</Text>
          )}
        />
      )}
    </View> */}

		</Layout>
    );
}

