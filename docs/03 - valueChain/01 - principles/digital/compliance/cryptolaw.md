import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw from "/static/data/cryptolaw.json"

# Legal Framework

  <table>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Region</th>
			<th>Jurisdiction</th>
			<th>Date</th>
			<th>Document</th>
		</tr>
	
		{cryptolaw.map((data, index) => {
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
						<td nowrap="nowrap">{data.date}</td>
						<td><a href={data.url} target='_blank'>{data.doc}</a></td>
					</tr>
				)
			}
		})}
    
  </table>

