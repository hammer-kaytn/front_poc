export const DEPLOYED_ADDRESS = "0xD41dC3aE9064Ca7d98D9eA688B6b36894ec8E596";
export const DEPLOYED_ABI = [
  {
    constant: true,
    inputs: [{ name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x01ffc9a7",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "owners",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x025e7c27",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06fdde03",
  },
  {
    constant: false,
    inputs: [
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x095ea7b3",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x18160ddd",
  },
  {
    constant: false,
    inputs: [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x23b872dd",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "isOwner",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x2f54bf6e",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x313ce567",
  },
  {
    constant: true,
    inputs: [
      { name: "", type: "uint256" },
      { name: "", type: "address" },
    ],
    name: "confirmations",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3411c81c",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3f4ba83a",
  },
  {
    constant: false,
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x423f6cef",
  },
  {
    constant: false,
    inputs: [
      { name: "sender", type: "address" },
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x42842e0e",
  },
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "isPauser",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x46fbf68e",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5c975abb",
  },
  {
    constant: false,
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x6ef8d66d",
  },
  {
    constant: true,
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x70a08231",
  },
  {
    constant: false,
    inputs: [{ name: "account", type: "address" }],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x82dc1ec4",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x8456cb59",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x95d89b41",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "transactions",
    outputs: [
      { name: "destination", type: "address" },
      { name: "value", type: "uint256" },
      { name: "data", type: "bytes" },
      { name: "executed", type: "bool" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x9ace38c2",
  },
  {
    constant: false,
    inputs: [
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa9059cbb",
  },
  {
    constant: true,
    inputs: [],
    name: "transactionCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xb77bf600",
  },
  {
    constant: false,
    inputs: [
      { name: "sender", type: "address" },
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb88d4fde",
  },
  {
    constant: true,
    inputs: [],
    name: "required",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xdc8452cd",
  },
  {
    constant: true,
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xdd62ed3e",
  },
  {
    constant: false,
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "data", type: "bytes" },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xeb795549",
  },
  {
    inputs: [
      { name: "_owners", type: "address[]" },
      { name: "_required", type: "uint256" },
      { name: "name", type: "string" },
      { name: "symbol", type: "string" },
      { name: "decimals", type: "uint8" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "CoinDeposit",
    type: "event",
    signature:
      "0x3cf246d605a449bc406d5757155cf6a2db2aa82bc7a75a1a0b1906b332959007",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
    ],
    name: "SwapRequest",
    type: "event",
    signature:
      "0xc6028b427fa55e47477f154025363ebe9b6b8cf69e982fc339c40e1415cd383c",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "sender", type: "address" },
      { indexed: true, name: "transactionId", type: "uint256" },
    ],
    name: "Confirmation",
    type: "event",
    signature:
      "0x4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "transactionId", type: "uint256" }],
    name: "Execution",
    type: "event",
    signature:
      "0x33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed75",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "transactionId", type: "uint256" }],
    name: "ExecutionFailure",
    type: "event",
    signature:
      "0x526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b79236",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "transactionId", type: "uint256" }],
    name: "Submission",
    type: "event",
    signature:
      "0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "sender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Deposit",
    type: "event",
    signature:
      "0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "account", type: "address" }],
    name: "Paused",
    type: "event",
    signature:
      "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "account", type: "address" }],
    name: "Unpaused",
    type: "event",
    signature:
      "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "account", type: "address" }],
    name: "PauserAdded",
    type: "event",
    signature:
      "0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "account", type: "address" }],
    name: "PauserRemoved",
    type: "event",
    signature:
      "0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
    signature:
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
    signature:
      "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
  },
  {
    constant: false,
    inputs: [],
    name: "Staking",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0xf57df22e",
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "Unstaking",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x6ef7e6e1",
  },
  {
    constant: false,
    inputs: [
      { name: "destination", type: "address" },
      { name: "value", type: "uint256" },
      { name: "data", type: "bytes" },
    ],
    name: "submitTransaction",
    outputs: [{ name: "transactionId", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xc6427474",
  },
  {
    constant: false,
    inputs: [{ name: "transactionId", type: "uint256" }],
    name: "confirmTransaction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xc01a8c84",
  },
  {
    constant: false,
    inputs: [{ name: "transactionId", type: "uint256" }],
    name: "executeTransaction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xee22610b",
  },
  {
    constant: true,
    inputs: [{ name: "transactionId", type: "uint256" }],
    name: "isConfirmed",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x784547a7",
  },
];
