/* ===== StarDataObj Class ===================================
|  Class with a constructor for StarDataObj                	 |
|  ==========================================================*/

   /**
     * @param {* address}   walletAddress
     * @param {* data}      starData
     */ 
    
class StarDataObj {
    constructor(walletAddress,starData){
        this.address = walletAddress ,
        this.star = {
            ra: starData.ra,
            dec: starData.dec,
            mag: starData.mag,
            cen: starData.cen,
            story: Buffer(starData.starStory).toString('hex')
        }
    }
    checkStarDataValidity(){
        if(this.star.ra && this.star.dec){
            return true ;
        }
    }
}

module.exports.StarDataObj = StarDataObj;   //@Cool  create obj here is better than in other file, becasue "data" sparate "controller"