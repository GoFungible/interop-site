---
sidebar_position: 10
---

import JSONTable from '@site/src/components/ui/JSONTable';
import auditor_software from "/static/data/auditor_software.json"

# Auditing Software


<JSONTable theadData={Object.keys(auditor_software[0])} tbodyData={auditor_software}/>
