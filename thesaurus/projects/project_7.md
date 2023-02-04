# Tezo's Mixer
*A new way to achieve anonymity on blockchains.*

December 2022

The application is accessible here : [See the application](https://tezmix.netlify.app/). This link can be broken and the application modified in the future. In a short sentence, this application is a front-end React client, it calls smart contract's entry points. These smart contracts are deployed on the testnet Ghostnet at the following address : [Smart contract stats](https://ghost.tzstats.com/KT1MGC57zDgqtCcxzECequWc1GHyckGiTxbx).

![Tezo's Mixer preview](/project_7.jpg)

## Introduction on blockchain

### Confidentiality and blockchain

Usually blockchains like Bitcoin and Ethereum are compliant with two of the three main security properties usually called the CIA (Confidentiality, Integrity, Availability) triad. Thanks to their consensus mechanisms and their mechanisms proofs, the blockchain's ledger is safe in terms of Integrity. Moreover, the Availability property is provided by the decentralized aspect of the validators network. However, there is no confidentiality in blockchain construction. This element brings huge concerns about privacy. In fact, privacy is a controversial debate, some are afraid of money laundering others prioritize the confidentiality of their financial strategy and of their investments. 

### Today's anonymity enhancing technics

Of course, the affirmations previously announced concern the transparent blockchains. Some blockchain like Monero and Zcash, introduced natively in their technology some cryptographic functions (like zk-SNARK and ring signatures) that provide confidentiality on their network.

Moreover, some technologies are emerging to solve transparent blockchains to enhance their confidentiality without native technology integration. A good example is Bitcoin's CoinJoin which is a token which has the ability to obfuscate transaction sender and receiver by joining to find together during a unique transaction. The sharing transaction helps the multiple user to scramble their path inside the Bitcoin networks.

## Tornado Cash and Angela Cash
### Simple Mixer
A pretty similar technology is present on Ethereum under the name of Tornado Cash. Its functioning seams similar to CoinJoin but is different in many aspects. Tornado Cash works by providing multiple pools of fix amount like 1ETH or 10ETH. These pools are liquidity pool alike because their only purpose is to combine founds together. 
A great analogy, would be someone who is escaping the police, this person to flee could infiltrate a party by melting into the crowd. 
However, the tricky part come for the fleeting when he needs to get out of the crowd. The best technics for him would be to exit without any recognisable distinguishable element. 
For Tornado Cash, the problem is the same : How to escape the pool without being recognisable in order to break transaction links. One part of the problem could be solved just by using a fixed amount and random withdrawal hours random, this is why pools have fixed amount and that Tornado Cash advices to take your time before withdrawing funds. The other part of the problem is the fact that you need to prove your identity in order to withdraw. The simple solution could be to use a secret, however this secret by its uniqueness could help anybody to links backs the principal to the depositor. This is where zero knowledge proofs and specially zk-SNARK come into place.

### zk-SNARK

zk-SNARK is an acronym for zero knowledge succinct non interactive argument of knowledge. The idea behind it is to prove to someone that you a solution to a mathematical challenge without revealing the solution. A simple analogy to this cryptographic primitive would be to prove to a colorblind person that a two pen of two different colors (ex: one green and one red) is different. For this you would need to handle the pens the colorblind person, you should choose one of the two pens, may be the right one. Then, the colorblind person should shuffle the pen behind his back and then show you the two pen an another time. Without knowing the shuffle, thanks to the color, you could announce in which hand is the pen. With this protocol you can reveal the fact that the two pens are different without revealing their colors.
For Tornado Cash, the idea is similar, you want to prove that you know a secret that helps to prove that it is you without revealing it.

### Tornado Cash Context
The technology presented previously has been created in December 2019 and deployed on Ethereum under the name of Tornado Cash. It has been the most visible and used enhancing technics on Ethereum. Tornado Cash technology falls under the name of Mixer which is one the multiple enhancing technics existing.
The problem with Tornado Cash, is that the protocol has been banned by the OFAC in August 2022 and their developer has been put in jail.

### Angela Cash Context
A such technology existing on the Ethereum network, we chose my colleague and myself to create an equivalent on the Tezos blockchain, on which no zk-SNARK Mixer has been deployed.
However, we haven't been motivated to deploy this project on mainnet because of the political context.
To test the application, we had only deployed the application on the Goshnet testnet.

### Needed fixes
The project has been developed during my final student project. However, the project is not finished and some final touched need to be done and remains unachieved.