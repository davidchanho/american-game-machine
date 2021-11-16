import { Document, model, Schema } from "mongoose";
import { ICategory } from "./Category";

export interface IProduct extends Document {
  name: string;
  category: ICategory[];
  description: string;
  features: string[];
  images: string[];
}

const productSchema = new Schema<IProduct>({
  name: { type: String, require: true },
  category: [{ type: String, ref: "category" }],
  description: { type: String, require: true },
  features: [{ type: String }],
  images: [{ type: String }],
});

const Product = model<IProduct>("product", productSchema);

export default Product;
