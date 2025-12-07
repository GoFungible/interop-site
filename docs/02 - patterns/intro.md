---
sidebar_position: 1
---

import CodeShowcase from '@site/src/components/basic/CodeShowcase';

# Principles
---

A token is a vehicle to capture and transfer some kind of value. As a consequence, it must adhere to some fundamental principles:

## REQUIRED (applies to all Fungible Tokens)

* **MUST Capture value as expected**: (Token Value)<br/>
** token should be able to capture the underlying value: speculative, reputational, external price, intrinsic value<br/>
** token should be able to protect against whales manipulation<br/>

* **MUST Protect value restricted to marked forces** (Token Integrity): <br/>
** **Protect investor from Issuer Misuse**<br/>
**** prevent issuer minting unexpected tokens <br/>
**** prevent issuer creating tokens in networks out of expected scope<br/>
**** manage the token variables to reflect the reality of the aggregated token<br/>
**** notify users in changes of token behaviour and allow withdraw witout lose of value<br/>
** **Token Security**: Protect stakeholders from attack<br/>
**** protect token ownership<br />
**** prevent attacks and vulnerabilities<br/>
**** protect provder disaster recovery mechanisms<br />

* **MUST Make value available** (Token Usability)<br/>
** **Token Distribution**: Provide the desired network presence to issuer<br/>
**** token should be able to be created in any EVM enhanced network<br/>
**** allow issuers moving to the desired network<br/>
**** allow holders moving to the desired network<br/>
**** allow decentralized intertoken communications<br/>

* **MUST allow holders about governance decisions**<br/>
** **Token Transparency**: Provide to holders all details about the token<br/>
**** provide consolidated data <br/>
** **Token Reporting**: Provide to holders all details about the token<br/>

## OPTIONAL (decided by issuer):

* **CAN Token Privacy**: Hide token operations to external observers<br/>
** optionally hide transactions<br/>

* **CAN Token Compliance**: Comply with regulatory requirements<br/>
** optionally require KYC<br/>
