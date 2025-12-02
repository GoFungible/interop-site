import JSONTable from '@site/src/components/ui/JSONTable';
import cryptolaw_funding_issuer from "/static/data/cryptolaw_funding_issuer.json"

# for Issuers

## Requirements

- Remote Company Formation

- Company Formation Costs

- CryptoLaw

- License Costs


## Requirements per Jurisdiction

  <table>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Region</th>
			<th>Jurisdiction</th>
			<th>Remote Company Formation</th>
			<th>Company Formation Cost</th>
			<th>CryptoLaw</th>
			<th>License Cost</th>
		</tr>
	
		{cryptolaw_funding_issuer.map((data, index) => {
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
						<td>{data.remoteFormation}</td>
						<td>{data.formationCost}</td>
						<td>{data.cryptolaw}</td>
						<td>{data.licenseCost}</td>
					</tr>
				)
			}
		})}
    
  </table>