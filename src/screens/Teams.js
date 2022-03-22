import React from 'react';
import { View,FlatList, ActivityIndicator } from 'react-native';
import { Layout, Text, Section, SectionContent, Picker } from 'react-native-rapi-ui';

export default function ({ navigation }) {
    /*
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
    */
    const [pickerValue, setPickerValue] = React.useState(null);
    const items = [
        { label: 'American', value: 'Amer' },
        { label: 'Atlantic Coastal Conference', value: 'ACC' },
        { label: 'Atlantic 10', value: 'A10' },
    ];

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
            <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent>
                <View>
                    <Text style={{ marginBottom: 10 }}>Picker</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="Choose your Conference"
                        onValueChange={(val) => setPickerValue(val)}
                    />
                </View>
            </SectionContent>
        </Section>
		</Layout>
    );
}

/*
//Add a teams 'Section'
<Section>
    <SectionContent>
        <Text> NCAA DI Teams </Text>
    </SectionContent>
</Section>
;
//

//Conferences Picker
const Forms = () => {
    const [pickerValue, setPickerValue] = React.useState(null);
    const items = [
        { label: 'American', value: 'Amer' },
        { label: 'Atlantic Coastal Conference', value: 'ACC' },
        { label: 'Atlantic 10', value: 'A10' },
    ];
    return (
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent>
                <View>
                    <Text style={{ marginBottom: 10 }}>Picker</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="Choose your Conference"
                        onValueChange={(val) => setPickerValue(val)}
                    />
                </View>
            </SectionContent>
        </Section>
    );
};

export default Forms;
*/