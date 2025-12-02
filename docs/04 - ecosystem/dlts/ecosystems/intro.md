import JSONTable from '@site/src/components/ui/JSONTable';
import ecosystem from "/static/data/ecosystem_dlt_bitcoin.json"

# Network Patterns

Since the adveniment of Bitcoin in 2008, web3 infrastructure has been a hotspot for venture capital to invest. As a consequencem blockchain networks have evolved in almost any direction and with different protocols and patterns. Over the time, some protocols have consolidates making up ecosystems around the an initial based blockchain.

## Network Ecosystems

<div style={{overflowX : 'auto'}}>
	<table>
		<tr>
			<th rowspan="2">Currency</th>
			<th rowspan="2">Layer</th>
			<th rowspan="2">From</th>
			<th rowspan="2">Lang</th>
			<th rowspan="2">Ledger</th>
			<th rowspan="2">Consensus</th>
			<th colspan="2">Execution Environment</th>
		</tr>
		<tr>
			<th>VM</th>
			<th>Smart Contracts</th>
		</tr>
		<tr>
			<td><a href="https://bitcoin.org/en/" target="_blank">Bitcoin</a></td>
			<td>L1</td>
			<td>2008</td>
			<td>C++</td>
			<td>UTXO</td>
			<td>PoW</td>
			<td>Script</td>
			<td>BitcoinScript</td>
		</tr>
		<tr>
			<td><a href="https://ripple.com/" target="_blank">Ripple</a></td>
			<td>L1</td>
			<td>2012</td>
			<td>C++</td>
			<td>account</td>
			<td>XRP Ledger</td>
			<td></td>
			<td>Yes</td>
		</tr>
		<tr>
			<td><a href="https://ethereum.org/en/" target="_blank">Ethereum</a></td>
			<td>L1</td>
			<td>2013</td>
			<td>Go</td>
			<td>account</td>
			<td>PoS</td>
			<td>EVM</td>
			<td>Solidity</td>
		</tr>
		<tr>
			<td><a href="https://www.radixdlt.com/" target="_blank">Radix</a></td>
			<td>L1</td>
			<td>2013</td>
			<td></td>
			<td></td>
			<td>Cerberus</td>
			<td></td>
			<td>Scrypto</td>
		</tr>
		<tr>
			<td><a href="https://www.getmonero.org/" target="_blank">Monero</a></td>
			<td>L1</td>
			<td>2014</td>
			<td>C++</td>
			<td>UTXO</td>
			<td>PoW</td>
			<td>-</td>
			<td>-</td>
		</tr>
		<tr>
			<td><a href="https://tezos.com/" target="_blank">Tezos</a></td>
			<td>L1</td>
			<td>2014</td>
			<td></td>
			<td>account</td>
			<td>PoS</td>
			<td>TezosVM</td>
			<td>Michelson</td>
		</tr>
		<tr>
			<td><a href="https://cosmos.network/" target="_blank">Cosmos</a></td>
			<td>L0</td>
			<td>2014</td>
			<td>Go</td>
			<td>account</td>
			<td>BFT PoS</td>
			<td>CosmWasm</td>
			<td>Rust</td>
		</tr>
		<tr>
			<td><a href="https://cardano.org/" target="_blank">Cardano</a></td>
			<td>L1</td>
			<td>2015</td>
			<td>Haskell</td>
			<td>UTXO</td>
			<td>PoS</td>
			<td>Ouroboros</td>
			<td>Plutus, Marlowe, Glow</td>
		</tr>
		<tr>
			<td><a href="https://www.iota.org/" target="_blank">IOTA (DAG)</a></td>
			<td>L1</td>
			<td>2015</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>Rust, TinyGo, Solidity</td>
		</tr>
		<tr>
			<td><a href="https://waves.tech/" target="_blank">WAVES</a></td>
			<td>L1</td>
			<td>2016</td>
			<td>Scala</td>
			<td></td>
			<td>LPoS</td>
			<td></td>
			<td>Ride</td>
		</tr>
		<tr>
			<td><a href="https://polkadot.network/" target="_blank">Substrate, Polkadot</a></td>
			<td>L0</td>
			<td>2016</td>
			<td>Rust</td>
			<td>account</td>
			<td>NPoS</td>
			<td>PEE</td>
			<td>Rust</td>
		</tr>
		<tr>
			<td><a href="https://near.org/" target="_blank">NEAR</a></td>
			<td>L1</td>
			<td>2017</td>
			<td>Rust</td>
			<td>account</td>
			<td>PoS</td>
			<td></td>
			<td>Rust, Javascript</td>
		</tr>
		<tr>
			<td><a href="https://www.algorand.foundation/" target="_blank">Algorand</a></td>
			<td>L1</td>
			<td>2017</td>
			<td>Python</td>
			<td>account</td>
			<td>PoS</td>
			<td>AlgorandVM</td>
			<td>TEAL</td>
		</tr>
		<tr>
			<td><a href="https://www.chia.net/" target="_blank">Chia Network</a></td>
			<td>L1</td>
			<td>2017</td>
			<td>Python</td>
			<td>UTXO</td>
			<td>PoST</td>
			<td>CLVM</td>
			<td>Chialisp</td>
		</tr>
		<tr>
			<td><a href="https://fantom.foundation/" target="_blank">Fantom (DAG)</a></td>
			<td>L1</td>
			<td>2018</td>
			<td>Go</td>
			<td>account</td>
			<td>Lachesis</td>
			<td>FVM</td>
			<td>Solidity</td>
		</tr>
		<tr>
			<td><a href="https://ton.org/" target="_blank">TON</a></td>
			<td>L1</td>
			<td>2018</td>
			<td>C++</td>
			<td>account</td>
			<td>PoS</td>
			<td>TVM</td>
			<td>FunC</td>
		</tr>
		<tr>
			<td><a href="https://www.avax.network/" target="_blank">Avalanche (DAG)</a></td>
			<td>L0</td>
			<td>2018</td>
			<td>Go</td>
			<td>UTXO</td>
			<td></td>
			<td>AVM</td>
			<td>Solidity</td>
		</tr>
		<tr>
			<td><a href="https://aptosfoundation.org/" target="_blank">Aptos (Diem, Libra)</a></td>
			<td>L1</td>
			<td>2019</td>
			<td>Rust</td>
			<td>account</td>
			<td>AptosBFT</td>
			<td>MoveVM</td>
			<td>Move</td>
		</tr>
	</table>
</div>
<br/>

## DLT Trilemma

<div style={{textAlign: 'center'}}>
	<img src="https://pbs.twimg.com/media/FDaXBuNVQAMBe5U?format=jpg&name=900x900" width="50%"></img>
</div>
<br/>

## The Layered Stack Ecosystem

An ecosystem is started by a base blockchan that provides some new ideas to the market. These ideas come in some of the 4 main moddules that compose a blockchain: execution, settlement, consensus and data availability. 

<div style={{textAlign: 'center'}}>
	<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*9uU4Ednc_Aj-GX9M" width="60%"></img>
</div>
<br/>

## Scaled Infrastructure Patterns

Most of existing blockchains have evolved as part of already existing ecosystem, and only a few base chains can define its own infrastructure ecosystem.

A <b>Fork</b> happens whenever a community makes a change to the blockchain’s protocol, or basic set of rules. When this happens, the chain splits — producing a second blockchain that shares all of its history with the original, but is headed off in a new direction.

A <b>Sidechain</b> is a separate, independent blockchain linked to the main blockchain (mainchain) using a two-way bridge. It enables tokens or other digital assets to be transferred between the mainchain and the sidechain.

<div style={{textAlign: 'center'}}>
	<img src="/img/ecosystem_layers.svg" width="60%"></img>
</div>
<br/>

The Layer 2 provides scalabilty to Layer 1. Layer 2 typically processes operations out of Layer 1 to improve throughput and reduce fees.

<b>Channels</b> are peer-to-peer protocols that allow two parties to make an unlimited number of transactions amongst themselves and then only post the final results to the blockchain. Afterward, cryptography is used to demonstrate how the summarized data results from the earlier set of transactions. A multisig smart contract ensures the correct parties sign the transactions.

A <b>Plasma</b> blockchain is a network of independent child chains. These child chains function as distinct blockchains, each with its own block validation mechanisms. Yet, each of the child chains remains anchored to the underlying blockchain. A Plasma chain executes transactions off-chain with its own mechanism for block validation.

A <b>Rollup</b> is a layer two (L2) blockchain that processes transactions away from the main blockchain to reduce transaction costs and increase throughput on the main chain. Batches of transactions are verified and settled back to the main chain.

The Layer 3 sits on top of Layer 2 and is mainly dedicated to hosts dApps for real-world applications and executes specific functions.

The table below compares the different scalibility patterns, showing their features and where State and TX are persisted for each case. All patterns integrate an execution environment to alleviate the burden of transaction execution from their parent chain by performing their own computation. Plasma is the only one with not ability to run smart contracts. All L1 provide their own consensus layer but L2 rely on mainchain consensus. They can commit the data to the maintchain or to an external DA layer.

<div style={{overflowX : 'auto'}}>
	<table style={{textAlign: 'center'}}>
		<tr>
			<th rowSpan="2"></th>
			<th rowSpan="2">Year</th>
			<th>Consensus</th>
			<th colSpan="2">Execution</th>
			<th>Settlement</th>
			<th colSpan="3">DA / Merkel Commits</th>
		</tr>
		<tr>
			<th>Loc</th>
			<th>Loc</th>
			<th>SC</th>
			<th>Proofs</th>
			<th>To</th>
			<th>TX</th>
			<th>State</th>
		</tr>
		<tr>
			<td colSpan="9">L0</td>
		</tr>
		<tr>
			<th>Interop</th>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>-</td>
		</tr>
		<tr>
			<td colSpan="9">L1</td>
		</tr>
		<tr>
			<th>Mainchain</th>
			<td>2009</td>
			<td>mainchain</td>
			<td>own</td>
			<td>N/Y</td>
			<td>-</td>
			<td>mainchain</td>
			<td>tree</td>
			<td>tree</td>
		</tr>
		<tr>
			<th>Fork</th>
			<td>2011</td>
			<td>own</td>
			<td>own</td>
			<td>Y</td>
			<td>-</td>
			<td>own</td>
			<td>tree</td>
			<td>tree</td>
		</tr>
		<tr>
			<th>Sidechain</th>
			<td>2011</td>
			<td>own</td>
			<td>own</td>
			<td>Y</td>
			<td>-</td>
			<td>own</td>
			<td>tree</td>
			<td>tree</td>
		</tr>
		<tr>
			<th>Commitchain</th>
			<td>2017</td>
			<td>own</td>
			<td>own</td>
			<td>Y</td>
			<td>fraud</td>
			<td>mainchain</td>
			<td>-</td>
			<td>tree</td>
		</tr>
		<tr>
			<td colSpan="9">L2</td>
		</tr>
		<tr>
			<th>Channel</th>
			<td>2016</td>
			<td>mainchain</td>
			<td>own</td>
			<td>Y</td>
			<td>fraud</td>
			<td>mainchain</td>
			<td>tree</td>
			<td>tree</td>
		</tr>
		<tr>
			<th>Plasma</th>
			<td>2017</td>
			<td>mainchain</td>
			<td>own</td>
			<td>N</td>
			<td>fraud</td>
			<td>mainchain</td>
			<td>root</td>
			<td>-</td>
		</tr>
		<tr>
			<th>Op Rollup</th>
			<td>2014</td>
			<td>mainchain</td>
			<td>own</td>
			<td>Y</td>
			<td>fraud</td>
			<td>mainchain</td>
			<td>tree</td>
			<td>root</td>
		</tr>
		<tr>
			<th>Optimium</th>
			<td>2020</td>
			<td>mainchain</td>
			<td>own</td>
			<td>Y</td>
			<td>fraud</td>
			<td>custom</td>
			<td>tree</td>
			<td>root</td>
		</tr>
		<tr>
			<th>zk Rollup</th>
			<td>2018</td>
			<td>mainchain</td>
			<td>own</td>
			<td>Y</td>
			<td>validity</td>
			<td>mainchain</td>
			<td>tree</td>
			<td>root</td>
		</tr>
		<tr>
			<th>Validium</th>
			<td>2020</td>
			<td>mainchain</td>
			<td>own</td>
			<td>Y</td>
			<td>validity</td>
			<td>custom</td>
			<td>tree</td>
			<td>root</td>
		</tr>
		<tr>
			<th>Volition</th>
			<td>2023</td>
			<td>mainchain</td>
			<td>own</td>
			<td>Y</td>
			<td>validity</td>
			<td>both</td>
			<td>tree</td>
			<td>root</td>
		</tr>
		<tr>
			<td colSpan="9">L3</td>
		</tr>
		<tr>
			<th>Rollup</th>
			<td>2024</td>
			<td>L2</td>
			<td>own</td>
			<td>Y</td>
			<td>any</td>
			<td>L2</td>
			<td>tree</td>
			<td>root</td>
		</tr>
	</table>
</div>
<br/>