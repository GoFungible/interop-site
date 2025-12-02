---
sidebar_position: 2
---

import JSONTable from '@site/src/components/ui/JSONTable';
import investors_inc from "/static/data/investors_inc.json"

# Incubators

Only incubators to prepare a private round, presale or some type of ICO crowdsale are included.

<JSONTable theadData={Object.keys(investors_inc[0])} tbodyData={investors_inc}/>