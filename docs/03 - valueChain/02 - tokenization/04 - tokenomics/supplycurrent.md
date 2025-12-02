import JSONTable from '@site/src/components/ui/JSONTable';
import current_supply from "/static/data/current_supply.json"

# Legal Tender Supply

  <table style={{textAlign: 'center'}}>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Region</th>
			<th>Jurisdiction</th>
			<th>Date</th>
			<th>Legal Tender Supply</th>
			<th>USD Equivalent</th>
		</tr>
	
		{current_supply.map((data, index) => {
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
						<td><a href={data.url} target='_blank'>{data.tender}</a></td>
						<td>{data.tenderusd}</td>
					</tr>
				)
			}
		})}
    
  </table>