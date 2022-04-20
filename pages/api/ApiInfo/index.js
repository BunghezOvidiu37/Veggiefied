import { addedProducts } from "../../../data/AddedProducts";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(addedProducts);
  } else if (req.method === "POST") {
    const image = req.body.image
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const newProduct ={
        id: Date.now(),
        image: image,
        title: title,
        description: description,
        price: price,
    }
    addedProducts.push(newProduct);
    res.status(201).json(newProduct)
  }
}
