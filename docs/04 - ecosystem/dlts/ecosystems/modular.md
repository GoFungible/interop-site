import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem from "/static/data/ecosystem_dlt_modular.json"

# Modular Ecosystem

  <table>
		<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
			<th>Name</th>
			<th>BuiltOn</th>
			<th>Consensus</th>
			<th>VM</th>
			<th>Language</th>
		</tr>
	
		{ecosystem.map((data, index) => {
			if (!data.name) {
				return (
					<tr style={{ textAlignVertical: "center",textAlign: "center", 'backgroundColor': '#fff7d9' }}>
						<th colspan='5'>{data.type}</th>
					</tr>
				)
			} else {
				return (
					<tr>
						<td><a href={data.url} target='_blank'>{data.name}</a></td>
						<td>{data.builtOn}</td>
						<td nowrap="nowrap">{data.consensus}</td>
						<td nowrap="nowrap">{data.vm}</td>
						<td nowrap="nowrap">{data.language}</td>
					</tr>
				)
			}
		})}
    
  </table>