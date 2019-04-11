# Private-Blockchain-P2
  Boilerplate Code of blockchain storage method using ES6
  
  This project introduces you to challenges faced when building out a blockchain storage method. A core responsibility of blockchain nodes is to validate the blockchain dataset. Hence a more efficient key-value database LevelDB is ideal for such operations. In fact, Bitcoin core uses LevelDB to store block index and UTXO set.



Why LevelDB?
On the subject of why LevelDB is used in Bitcoin core, core developer Greg Maxwell stated the following to the bitcoin-dev mailing list in October 2015:

"I think people are falling into a trap of thinking "It's a , I know a for that!"; but the application and needs are very specialized here. . . It just so happens that on the back of the very bitcoin specific cryptographic consensus algorithm there was a slot where a pre-existing high performance key-value store fit; and so we're using one and saving ourselves some effort..."

Greg Maxwell stated the following in the same thread referenced above (in response to a proposal to switch to using SQLite):

"...[D]atabases sometimes have errors which cause them to fail to return records or to return stale data. And if those exist consistency must be maintained; and "fixing" the bug can cause a divergence in consensus state that could open users up to theft. Case in point, prior to LevelDB's use in Bitcoin Core it had a bug that, under rare conditions, could cause it to consistently return not found on records that were really there. . . LevelDB fixed this serious bug in a minor update."


To setup the project for review do the following:
1. Download the project. 
2. __npm init__
3. Run command __npm install__ to install the project dependencies.
   or step1: Install level
             __npm install level --save__
      step2: Install crypto-js
             __npm install crypto-js —-save__

4. Run command __node simpleChain.js__ in the root directory.
