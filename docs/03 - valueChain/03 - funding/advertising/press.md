import JSONTable from '@site/src/components/ui/JSONTable';
import data from "/static/data/funding_press.json"

# Press

<JSONTable theadData={Object.keys(data[0])} tbodyData={data}/>