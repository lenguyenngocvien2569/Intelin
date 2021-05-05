import { Request, Response } from 'express';
import Category_Model from '../../models/category.model';

class Category_Controller {
  getAllCategory = async (req: Request, res: Response) => {
    console.log(1)
    await Category_Model.find((err: any, result: any) => {
      if (err) {
        res.send(err);
      } else {
        console.log(result)
        res.send(result);
        }
      })
  }
}
module.exports = new Category_Controller;
