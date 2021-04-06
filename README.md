#### This repo contains Vuejs boilerplate for an analytics dashboard we would like to populate with data from our contracts
&nbsp;

##### Background:
Our project is oriented around user-controlled smart contract wallets or 'vaults. It is a fork of the Alchemist project.
**Visor.sol** is our vault contract . It is NFT an minted by **VisorFactory.sol**.

Various asset-specific rewards programs are instances of **Hypervisor.sol** and are currently operating on user's visor throught a UI at [vault.visor.finance](https://vault.visor.finance)


Our VisorFactory contract contains info relevant to this task, as do our rewards contracts ( named Hypervisors) for DAI, USDC, USDT and VISR-ETH staking.

**We would like to render centain info from these contracts and display in a series of charts using provided infura account and web3js.**

Mockup charts can be seen by running `npm install` and `npm run serve`. Below are descriptions of what each chart is to convey. Some of the information will need to be informed by historical price data which we do not have.

We will also require script to pull price data periodically from Uniswap. More description to come.



#### Meter chart

We wish to display **asset name** (DAI, USDC, USDT, VISR-ETH) and **APY**


To calculate APY, we relie on a reference account which has staked 10 tokens to each respective hypervisor
    Assuming you are working with a hypervisor contract instance, one could pull rewards for end of April as follows

    hypervisor.getFutureVaultReward("0x675ACde86DffE354e175E7dCb95E71f9902477D7",1619354994)

get the number of decimals from the asset contract( dai, usdc, etc)

    asset.decimals()

   factor in price of VISR and x 12 for 1 year(APY)
   For VISR-ETH APY we will do something special later on

> Price of Visor(or any other token) can be pulled from Uniswap pseudocode as follows

    // create uniswap factory instance
    uniFactory = new web3.eth.Contract(uniswapV2FactoryABI, uniswapV2FactoryAddress)

    // get address of the Uniswap LP token contract
    pairAddress = await uniFactory.methods.getPair(visorAddress, wethAddress).call()
    uniVISRWETH = new web3.eth.Contract(uniswapV2PairABI, wethAddress)

    // get uniswap balance of respective assets
    reserves = uniVISRWETH.methods.price0CumulativeLast()

    // calc price
    price = reserves['_reserve0']/reserves['_reserve1']


 ##### Filling in the bars
  Filled in vs unfulled portion of meter chart should represent historical highest APY of that asset in relation to the highest APY offered at the moment
   [Description to come]



#### Gauge Chart

##### Total Active Visors
  Fraction of visors with non-negative balances of each asset
 [Description to come]

##### Total Minted Visors
  Total minted nfts available from VisorFactory's nft interfacce ( see etherscan)
  VisorFactory also emits events on minting
   [Description to come]

##### Percentage = (Total Active Visors/Total Minted Visors)
 [Description to come]


##### Total Active Visors
 [Description to come]


#### Donut
##### Amount of assets in each Pool
  7th return value of hypervisor.getHypervisorData ( see etherscan)
 [Description to come]

##### Total Locked Value in all pools
  translate to $-values
 [Description to come]


#### Stacked Area
##### Historical Asset APY (timing each daily average)
 [Description to come]


> Mainnet addresses


  Visor:[[0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  VisorFactory:[0xaE03233307865623Aaef76Da9ADe669b86e6F20A](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  WETH:[0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  DAI:[0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  USDC:[0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  USDT:[0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  VISR-ETH:[0x0C2445BEc45c443c58f44f8e0a5796960E052D63](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  DAI-Hypervisor:[0xF178d88D2F6F97CA32F92b465987068e1Cce41c5](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  USDC-Hypervisor:[0x96C105E9e9eAb36eb8e2f851A5dabFbBd397c085](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  USDT-Hypervisor:[0xEBaE3CB14CE6C2F26B40b747fd92cCaf03B98659](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  VISR-ETH-Hypervisor:[0x64fcDD0DE44f4bd04c039B0664FB95EF033D4efb](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

  UniswapV2Factory:[0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f](https://etherscan.io/address/0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9#code)

