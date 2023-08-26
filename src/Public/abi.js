const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "vin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "brand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "motor",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "mileage",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "owner",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "yop",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "reviewedBy",
        "type": "string"
      }
    ],
    "name": "addCar",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allCars",
    "outputs": [
      {
        "internalType": "string",
        "name": "vin",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "brand",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "motor",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "mileage",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "owner",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "yop",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "reviewedBy",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllCars",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "vin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "brand",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "motor",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "mileage",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "owner",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "yop",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "reviewedBy",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          }
        ],
        "internalType": "struct CarRegistry.Car[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "reviewedBy",
        "type": "string"
      }
    ],
    "name": "getAllCarsByReviewedBy",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "vin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "brand",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "motor",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "mileage",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "owner",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "yop",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "reviewedBy",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          }
        ],
        "internalType": "struct CarRegistry.Car[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "vin",
        "type": "string"
      }
    ],
    "name": "getAllCarsByVin",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "vin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "brand",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "motor",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "mileage",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "owner",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "yop",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "reviewedBy",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          }
        ],
        "internalType": "struct CarRegistry.Car[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]