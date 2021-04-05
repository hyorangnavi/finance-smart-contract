

Our smart contract wallet or 'vault' is called Visor.sol. It is NFT minted by VisorFactory.sol.
Various asset-specific rewards programs are instances of Hypervisor.sol and are currently operating on user's visors throught the ui at 
vault.visor.finance

Here are our contracts and those of related tokens. 
They are verified on etherscan
```
"mainnet": {
  "Visor":"0x08FB62c84909dA3Aa5F59E01763E5FDC62De76e9",
  "VisorFactory":"0xaE03233307865623Aaef76Da9ADe669b86e6F20A",
  "WETH":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "DAI":"0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "USDC":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "USDT":"0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "VISR-ETH":"0x0C2445BEc45c443c58f44f8e0a5796960E052D63",
  "DAI-Hypervisor":"0xF178d88D2F6F97CA32F92b465987068e1Cce41c5",
  "USDC-Hypervisor":"0x96C105E9e9eAb36eb8e2f851A5dabFbBd397c085",
  "USDT-Hypervisor":"0xEBaE3CB14CE6C2F26B40b747fd92cCaf03B98659",
  "VISR-ETH-Hypervisor":"0x64fcDD0DE44f4bd04c039B0664FB95EF033D4efb",
  "UniswapV2Factory":"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
}
```
Our VisorFactory contract contains info relevant to this task, as do our rewards contracts ( named Hypervisors) for DAI, USDC, USDT and VISR-ETH staking

We can use this infura account fc118b097c7944e1ba44a1d21684536f
'https://mainnet.infura.io/v3/fc118b097c7944e1ba44a1d21684536f'


# Chart view details

### Meter chart

  ##### Asset Name
asset name (DAI, USDC, USDT, VISR-ETH)
  ##### APY
  
To calculate APY, we relie on a reference account which has staked 10 tokens to each respective hypervisor
    Assuming you are working with a hypervisor instance, one could pull rewards for end of April as follows

    futureReward = hypervisor.getFutureVaultReward("0x675ACde86DffE354e175E7dCb95E71f9902477D7",1619354994)

get the number of decimals from the asset contract( dai, usdc, etc)

    decimals = asset.decimals()

   factor in price of VISR( described below) and x 12 for 1 year(APY)

  ##### Filling in the bars
  Historical highest APY in relation to the highest APY offered at the moment
    filled in vs unfulled portion of meter chart


### Gauge Chart
##### Total Active Visors
  fraction of visors with non-negative balances of each asset

##### Total Minted Visors
  total minted nfts available from VisorFactory's nft interfacce ( see etherscan)
  VisorFactory also emits events on minting
  
##### Percentage = (Total Active Visors/Total Minted Visors)
\ 

##### Total Active Visors
\
\
#### Donut
##### Amount of assets in each Pool
  7th return value of hypervisor.getHypervisorData ( see etherscan)

##### Total Locked Value in all pools
  translate to $-values


#### Stacked Area
##### Historical Asset APY (timing each daily average)
  We want a nodejs script which can be run in cron or 'watch' that will append APY with timestamp for each asset.


*Price of Visor(or any other token) can be pulled from Uniswap as follows ( pseudocode)

    // create uniswap factory instance
    uniFactory = new web3.eth.Contract(uniswapV2FactoryABI, uniswapV2FactoryAddress)

    // get address of the Uniswap LP token contract
    pairAddress = await uniFactory.methods.getPair(visorAddress, wethAddress).call()
    uniVISRWETH = new web3.eth.Contract(uniswapV2PairABI, wethAddress)

    // get uniswap balance of respective assets
    reserves = uniVISRWETH.methods.price0CumulativeLast()

    // calc price
    price = reserves['_reserve0']/reserves['_reserve1']
    
## setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```


