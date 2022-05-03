import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { Text } from 'react-native-rapi-ui';
import { useTable } from 'react-table'

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

	const data = React.useMemo(
		() => [
			{
				home: 'Home Team',
				home_score: 'Home Score',
			},
			{
				away: 'Away Team',
				away_score: 'Away Score',
			},
			{
				spread: 'Spread',
				value: 'Value',
			},
			{
				pick: 'Pick',
				level: 'Level',
				final_result: 'Final Result'
			}
		]
	)

	const columns = React.useMemo(
		() => [
			{
				Header: 'Home Team',
				accessor: 'home'
			},
			{
				Header: 'Home Score',
				accessor: 'home_score'
			},
			{
				Header: 'Away Team',
				accessor: 'away'
			},
			{
				Header: 'Away Score',
				accessor: 'away_score'
			},
			{
				Header: 'Spread',
				accessor: 'spread'
			},
			{
				Header: 'value',
				accessor: 'value'
			},
			{
				Header: 'Pick',
				accessor: 'pick'
			},
			{
				Header: 'Level',
				accessor: 'level'
			},
			{
				Header: 'Final Result',
				accessor: 'final_result'
			}
		]
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data })

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'left',
				justifyContent: 'left',
				marginTop: 20,
				marginLeft: 5
			}}>
			<Text>Games</Text>
			{isLoading ? <ActivityIndicator /> : (
				<Text>
					<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
						<thead>
							{headerGroups.map(headerGroup => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map(column => (
										<th
											{...column.getHeaderProps()}
											style={{
												borderBottom: 'solid 3px red',
												background: 'aliceblue',
												color: 'black',
												fontWeight: 'bold',
											}}
										>
											{column.render('Header')}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{rows.map(row => {
								prepareRow(row)
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map(cell => {
											return (
												<td
													{...cell.getCellProps()}
													style={{
														padding: '10px',
														border: 'solid 1px gray',
													}}
												>
													{cell.render('Cell')}
												</td>
											)
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
				</Text>
			)
			}
		</View>
	);
}


/*
{
  Data.filter(post => {
	if (query === '') {
	  return post;
	} else if (post.title.toLowerCase().includes(query.toLowerCase())) {
	  return post;
	}
  }).map((post, index) => (
	<div className="box" key={index}>
	  {post.title}
	  {post.author}
	  ))
}	);
	*/