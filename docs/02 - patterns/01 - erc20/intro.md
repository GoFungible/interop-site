---
sidebar_position: 1
---

import CodeShowcase from '@site/src/components/basic/CodeShowcase';


# ERC-20 Standard
---

## IERC20Metadata

<CodeShowcase
	title="IERC20Metadata.sol"
	language="sol"
	description="Interface for IERC20Metadata Fungible Tokens"
	code={
`interface IERC20Metadata is IERC20 { {
  	function name() external view returns (string memory);
		function symbol() external view returns (string memory);
		function decimals() external view returns (uint8);
}`
	}		
	height="180px"
	expandable={true}
/>

## IERC-20

<CodeShowcase
	title="IERC-20.sol"
	language="sol"
	description="Interface for ERC-20 Fungible Tokens"
	code={
`interface IERC20 {
  	event Transfer(address indexed from, address indexed to, uint256 value);
  	event Approval(address indexed owner, address indexed spender, uint256 value);
  	function totalSupply() external view returns (uint256);
  	function balanceOf(address account) external view returns (uint256);
  	function transfer(address to, uint256 value) external returns (bool);
  	function allowance(address owner, address spender) external view returns (uint256);
  	function approve(address spender, uint256 value) external returns (bool);
  	function transferFrom(address from, address to, uint256 value) external returns (bool);
}`
	}		
	height="300px"
	expandable={true}
/>


## ERC-20 Functions


The different implementation correspond to the patterns (depending on where they have the supply)

<CodeShowcase
	title="ERC-20.sol"
	language="sol"
	description="ERC-20 Fungible Tokens"
	code={
`interface IERC20 {
		...
  	function name() external view returns (string memory);
		function symbol() external view returns (string memory);
		function decimals() external view returns (uint8);
  	function totalSupply() external view returns (uint256);
  	function balanceOf(address account) external view returns (uint256);
  	function transfer(address to, uint256 value) external returns (bool);
  	function allowance(address owner, address spender) external view returns (uint256);
  	function approve(address spender, uint256 value) external returns (bool);
  	function transferFrom(address from, address to, uint256 value) external returns (bool);
  	event Transfer(address indexed from, address indexed to, uint256 value);
  	event Approval(address indexed owner, address indexed spender, uint256 value);
}`
	}		
	height="420px"
	expandable={true}
/>


## ERC-20 Storage

<CodeShowcase
	title="ERC-20.sol"
	language="sol"
	description="ERC-20 Fungible Tokens"
	code={
`interface IERC20 {
		string private _name;
		string private _symbol;
		uint256 private _totalSupply;
		mapping(address account => uint256) private _balances;
		mapping(address account => mapping(address spender => uint256)) private _allowances;
		...
}`
	}		
	height="420px"
	expandable={true}
/>


