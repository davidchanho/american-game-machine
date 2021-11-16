import { IProduct } from './Products';
import { Document, model, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  products: IProduct[];
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  products: [{ type: String, ref: "product" }],
});

const Category = model<ICategory>("category", categorySchema);

export default Category;
