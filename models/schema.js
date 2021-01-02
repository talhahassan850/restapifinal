const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
//in order to create schema

const productSchema = 
  mongoose.Schema({
      prName:String,
      prCategory:String,
      prPrice:Number,
      prDetail:String,
      prImage:String,
}); 
const ProductModel = mongoose.model("p2",productSchema);//model name 
//then, schema name


//@hapi/joi use here
function validateProduct(data) {
    const schema = Joi.object({
      prName: Joi.string().min(1).max(15).required(),
      prCategory: Joi.string().min(1).max(15).required(),
      prPrice: Joi.number().min(0).required(),
      prDetail: Joi.string().min(1).max(15).required(),
      prImage: Joi.string().required(),
    });
    return schema.validate(data, { abortEarly: false });
  }
  module.exports.ProductModel = ProductModel;
  module.exports.validate = validateProduct;
//module.exports = ProductModel;  