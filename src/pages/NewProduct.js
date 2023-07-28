import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../configs/firebase-config";
import { collection, addDoc } from "firebase/firestore";
export const NewProduct = () => {
  const productsCollectionRef = collection(db, "products");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [images, setImages] = useState([]);
  const [supplierColor, setSupplierColor] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState([]);
  const [type, setType] = useState("");
  const Product = {
    brand: brand,
    name: name,
    description: description,
    imgPreview: imgPreview,
    imgLinks: images,
    supplierColor: supplierColor,
    attributes: attributes,
    price: price,
    size: size,
    type: type,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Product);
    await addDoc(productsCollectionRef,Product)
  };
  const handleAdd = (e, initValue, arr, set) => {
    e.preventDefault();
    set([...arr, initValue]);
  };

  const handleInputArray = (e, i, arr, set) => {
    e.preventDefault();
    const temp = [...arr];
    temp[i] = e.target.value;
    set(temp);
  };

  const handleRemoveArray = (e, i, arr, set) => {
    e.preventDefault();
    const temp = [...arr];
    temp.splice(i, 1);
    setSize(temp);
  };

  return (
    <div className="grid place-items-center m-5">
      <Link to="/" className="h-[21px]">
        <img
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          className="h-full"
          alt=""
        />
      </Link>
      <form className="w-[400px]">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name=""
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name=""
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label htmlFor="">Type</label>
            <select value={type} name="" id="" onChange={(e) => setType(e.target.value)}>
              <option value="" disabled>
                Choose one
              </option>
              <option value="accessory">Accessory</option>
              <option value="bag">Bag</option>
              <option value="clothing">Clothing</option>
              <option value="shoe">Shoe</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name=""
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="preview-img">Product image preview </label>
          <input
            type="text"
            name=""
            id="preview-img"
            onChange={(e) => setImgPreview(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="">Product image</label>
          <div className="w-full flex justify-center">
            <button
              className="w-[140px] h-[35px] bg-red-600"
              onClick={(e) => handleAdd(e, "", images, setImages)}
            >
              Add image
            </button>
          </div>
          <div>
            {images.map((item, i) => {
              return (
                <div key={i}>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      handleInputArray(e, i, images, setImages);
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) =>
                      handleRemoveArray(e, i, images, setImages)
                    }
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="supplier-color">Supplier Color</label>
          <input
            type="text"
            name=""
            id="supplier-color"
            onChange={(e) => setSupplierColor(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Attributes</label>
          <div className="w-full flex justify-center">
            <button
              className="w-[140px] h-[35px] bg-red-600"
              onClick={(e) => handleAdd(e, "", attributes, setAttributes)}
            >
              Add attribute
            </button>
          </div>
          <div>
            {attributes.map((item, i) => {
              return (
                <div key={i}>
                  <input
                    type="text"
                    value={item == 0 ? "" : item}
                    onChange={(e) => {
                      handleInputArray(e, i, attributes, setAttributes);
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) =>
                      handleRemoveArray(e, i, attributes, setAttributes)
                    }
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Size</label>
          <div className="w-full flex justify-center">
            <button
              className="w-[140px] h-[35px] bg-red-600"
              onClick={(e) => handleAdd(e, 0, size, setSize)}
            >
              Add size
            </button>
          </div>
          <div>
            {size.map((item, i) => {
              return (
                <div key={i}>
                  <input
                    type="text"
                    value={item == 0 ? "" : item}
                    onChange={(e) => {
                      handleInputArray(e, i, size, setSize);
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => handleRemoveArray(e, i, size, setSize)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="w-[140px] h-[35px] bg-black text-white"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
