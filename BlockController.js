const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js'); 
const BlockChainClass = require('./BlockChain.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;   //@cool app.js => this.app = express();
        this.blockchain = new BlockChainClass.Blockchain();
        this.getBlockByHeight();
        this.postNewBlock();
    }

    /**
     * GET Endpoint to retrieve a block by blockheight, url: "/api/block/:blockheight"
     */
    getBlockByHeight() {
        this.app.get("/block/:blockheight", (req, res) => {
            if(req.params.blockheight ){
                console.log(req.params.blockheight)
                let height = req.params.blockheight ; 
                this.blockchain.getBlock(height).then((block) => {
                    if (block){
                        return res.status(200).json(JSON.parse(block));  // @cool utilize .send method to send html data
                    } else {
                        return res.status(404).send("Not Found");
                    }
                }).catch((err) => { console.log(err); return res.status(500).send("Internal Server Error");});          
            }
        });
    }

    /**
     * POST Endpoint to add a new Block, url: "/block"
     */
    postNewBlock() {
        this.app.post("/block", (req, res) => {
            if(req.body.body){
                let blockAux = new BlockClass.Block(req.body.body); 
                this.blockchain.addBlock(blockAux).then((block) => {
                    if(block){
                        return res.status(200).json(JSON.parse(block));  // @cool utilize .send method to send html data 
                    }else{
                        return res.status(500).send("Internal Server Error");
                    }
                }).catch((err) => { console.log(err); return res.status(500).json(err);})
            }else{
                return  res.status(500).send("The block body is required");
            }
        });
    }
}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}