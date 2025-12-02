---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_vc from "/static/data/investors_vc.json"

# VCs

Only investors in tokens are included.

<JSONTable theadData={Object.keys(investors_vc[0])} tbodyData={investors_vc}/>