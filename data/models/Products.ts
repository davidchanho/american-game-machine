import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, require: true },
  slug: {
    type: String,
    default: function () {
      return (this.slug = `/${this.name.replace(" ", "-")}`);
    },
  },
  category: { type: String, ref: "category" , require: true },
  type: { type: String,  require: true },
  src: { type: String, require: true },
  desc: { type: String, require: true },
  features: [{ type: String }],
});

const Product = model("product", productSchema);

export default Product;
