import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem_exchanges from "/static/data/ecosystem_exchanges.json"

# Exchanges

<JSONTable theadData={Object.keys(ecosystem_exchanges[0])} tbodyData={ecosystem_exchanges}/>
