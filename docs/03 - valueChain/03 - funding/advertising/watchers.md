import JSONTable from '@site/src/components/ui/JSONTable';
import data from "/static/data/funding_ICOWatchers.json"

# Crowdsale Watchers

  <table>
		<tr>
			<td>Name</td>
			<td>Plans</td>
			<td>Free</td>
		</tr>
	
		{data.map((data, index) => {
			return (
				<tr>
					<td><a href={data.url} target='_blank'>{data.name}</a></td>
					<td>{data.plans}</td>
					<td>{data.free}</td>
				</tr>
			)
		})}
    
  </table>
