import { Request, Response,NextFunction } from 'express';
const Category = require('../../models/category.model')

class Category_Controller {
  getAllCategory = async (req: Request, res: Response,next:NextFunction) => {
      await Category.find((err: Object, result: Object) => {
        if (err) next(err);
        res.send(result);
      })
  }
  insertCategory = async (req: Request, res: Response,next:NextFunction) => {
    //let { category_id, category_name } = req.body;
    let newCategory = { ...req.body };
    console.log(newCategory)
    await Category.create(newCategory)
      .then((result: any) => {
      res.json(result)
    }).catch((err:any) => {
      next(err)
    });;
  }
}
module.exports = new Category_Controller;
