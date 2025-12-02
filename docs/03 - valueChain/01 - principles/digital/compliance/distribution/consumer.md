import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw_distribution_consumer from "/static/data/cryptolaw_distribution_consumer.json"

# for Consumers

## Requirements

- Payments


## Requirements per Jurisdiction

  <table>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Region</th>
			<th>Jurisdiction</th>
			<th>Payments</th>
		</tr>
	
		{cryptolaw_distribution_consumer.map((data, index) => {
			if (!data.jurisdiction) {
				return (
					<tr style={{ textAlignVertical: "center",textAlign: "center", 'backgroundColor': '#fff7d9' }}>
						<th colspan='6'>{data.region}</th>
					</tr>
				)
			} else {
				return (
					<tr>
						<td>{data.region}</td>
						<td>{data.jurisdiction}</td>
						<td>{data.payments}</td>
					</tr>
				)
			}
		})}
    
  </table>