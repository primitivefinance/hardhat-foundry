import * as dotenv from 'dotenv'

import '@nomicfoundation/hardhat-toolbox'
import { HardhatUserConfig } from 'hardhat/types'
import '@primitivefi/hardhat-dodoc'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.13',
        settings: {
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 15000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      blockGasLimit: 30_000_000,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  // Avoid foundry cache conflict.
  paths: { cache: 'hh-cache' },
}

export default config
