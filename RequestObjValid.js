/* ===== RequestObjValid Class ==============================
|  Class with a constructor for RquestObjValid               |
|  ==========================================================*/

class RequestObjValid {
    /**
     * @param {Obj}  requestObj
     * @param {boole signature} isValid
     */
    constructor(requestObj, isValid){
        this.registerStar = true,
        this.status = {
            address: requestObj.walletAddress,
            requestTimeStamp: requestObj.requestTimeStamp,
            message: requestObj.message,
            validationWindow: requestObj.validationWindow,
            messageSignature: isValid  //if true , the wallet address is owner of message
        }
    }
}

module.exports.RequestObjValid = RequestObjValid;   //@Cool  create obj here is better than in other file, becasue "data" sparate "controller"