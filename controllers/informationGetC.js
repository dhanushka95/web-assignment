const StatusCodes = require('../common/statusCode');
const Information = require('../model/information');
exports.dictionaryDataGet = async (req, res) => {
    try {

        Information.findAll().then(result=>{
            if(result.length>0) {
                res.status(200).json({
                    data: result,
                    message: 'Student Get Success!',
                    statusCode: StatusCodes.Success
                })
            }else {
                res.status(200).json({
                    data: [],
                    message: 'Empty!',
                    statusCode: StatusCodes.Success
                });
            }
        }).catch(e=>{
            res.status(200).json({
                data: null,
                message: 'Student Get Server Error',
                statusCode: StatusCodes.ServerError
            });
        })

    } catch (e) {
        res.status(200).json({
            data: null,
            message: 'Student Get DB Error',
            statusCode: StatusCodes.DBError
        });
    }
};
