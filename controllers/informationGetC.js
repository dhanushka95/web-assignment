const StatusCodes = require('../common/statusCode');
const Joi = require('@hapi/joi');
const Information = require('../model/information');
exports.validateDictionaryGet = (req, res, next) => {
    try {
        const schema = Joi.object({
            typeId: Joi.number().required(),
            search: Joi.string().required()
        });
        const {error} = schema.validate(req.body);
        if (error && error.details) {
            return res.status(200).json({
                statusCode: StatusCodes.ValidationError,
                message: error.details[0].message,
                data: null
            });
        } else {
            next();
        }
    } catch (err) {
        res.status(200).json({
            data: null,
            message: 'Dictionary Get Validation Error',
            statusCode: StatusCodes.ValidationError
        });
    }
};
exports.dictionaryDataGet = async (req, res) => {
    try {

        Information.findAll().then(result=>{
            if(result.length>0) {
                res.status(200).json({
                    data: result,
                    message: 'Dictionary Get Success!',
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
                message: 'Dictionary Get Server Error',
                statusCode: StatusCodes.ServerError
            });
        })

    } catch (e) {
        res.status(200).json({
            data: null,
            message: 'Dictionary Get DB Error',
            statusCode: StatusCodes.DBError
        });
    }
};
