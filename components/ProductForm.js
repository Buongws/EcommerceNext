import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  // category: assignedCategory,
  // properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(String(existingPrice) || ""); // Convert existingPrice to a string
  const [goToProducts, setGoToProducts] = useState(false);
  const [images, setImages] = useState(existingImages || []);
  const router = useRouter();
  const [error, setError] = useState("");
  // const [category, setCategory] = useState(assignedCategory || "");
  // const [productProperties, setProductProperties] = useState(
  //   assignedProperties || {}
  // );

  // const [isUploading, setIsUploading] = useState(false);
  // const [categories, setCategories] = useState([]);

  const saveProduct = async (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      price.trim() === ""
    ) {
      setError("Please fill out all the fields.");
      return;
    }

    const data = { title, description, price };

    try {
      if (_id) {
        // Update
        await axios.put("/api/products", { ...data, _id });
      } else {
        // Create
        await axios.post("/api/products", data);
      }
      setGoToProducts(true);
    } catch (error) {
      setError("An error occurred while saving the product.");
    }
  };

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="new products"
        value={title}
        onChange={(ev) => {
          setTitle(ev.target.value);
        }}
      ></input>
      <label className="mb-2">Photos</label>
      <div className="mb-2">
        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Add image</div>
          <input type="file" className="hidden" />
        </label>
      </div>
      {!images.length && <div>No photos in this products</div>}
      <label>Description</label>

      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => {
          setDescription(ev.target.value);
        }}
      ></textarea>

      <label>Price (inUSD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => {
          setPrice(ev.target.value);
        }}
      ></input>

      <button type="submit" className="btn-primary">
        SAVE
      </button>
      <hr></hr>
      {error ? <h2>{error}</h2> : "Let Fill in the form"}
    </form>
  );
}
