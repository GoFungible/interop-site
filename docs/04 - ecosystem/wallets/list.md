import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem_wallets from "/static/data/ecosystem_wallets.json"

# Wallets

<JSONTable theadData={["name", "url", "signing", "packaging", "tokens"]} tbodyData={ecosystem_wallets}/>


