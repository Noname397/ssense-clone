import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { useState, useEffect } from "react";
export const Products = () => {
  const productsCollectionRef = collection(db, "products");
  const [products, setProducts] = useState([]);
  const [typeName, setTypeName] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [designerName, setDesignerName] = useState("");
  const [allDesigners, setAllDesigners] = useState([]);
  const [priceCommend, setPriceCommend] = useState("");
  const [color, setColor] = useState("");
  const [allColors, setAllColors] = useState([]);
  function filterProductsByType(functionName) {
    let temp = [...products];
    switch (functionName) {
      case "accessories":
        return temp.filter((item) => item?.type === "accessory");
      case "bags":
        return temp.filter((item) => item?.type === "bag");
      case "clothing":
        return temp.filter((item) => item?.type === "clothing");
      case "shoes":
        return temp.filter((item) => item?.type === "shoe");
      default:
        return temp;
    }
  }

  function filterProductsByDesigner(designer) {
    let temp = [...products];
    return temp.filter((item) => item.brand === designer);
  }

  function filterProductsByPrice(cmd) {
    let temp = [...products];
    switch (cmd) {
      case "descendingPrice":
        return temp.sort((a, b) => b.price - a.price);
      case "ascendingPrice":
        return temp.sort((a, b) => a.price - b.price);
      default:
        return temp;
    }
  }

  function filterProductsByColor(color) {
    let temp = [...products];
    return temp.filter((item) => item.supplierColor === color);
  }

  useEffect(() => {
    console.log(typeName);
    console.log(filterProductsByType(typeName));
    setFilteredProducts(filterProductsByType(typeName));
  }, [typeName]);

  useEffect(() => {
    console.log(designerName);
    console.log(filterProductsByDesigner(designerName));
    setFilteredProducts(filterProductsByDesigner(designerName));
  }, [designerName]);

  useEffect(() => {
    console.log(priceCommend);
    console.log(filterProductsByPrice(priceCommend));
    setFilteredProducts(filterProductsByPrice(priceCommend));
  }, [priceCommend]);

  useEffect(() => {
    console.log(color);
    console.log(filterProductsByColor(color));
    setFilteredProducts(filterProductsByColor(color));
  }, [color]);

  useEffect(() => {
    returnAllProducts();
    const allBrands = products.map((item) => item.brand).sort();
    const brands = allBrands.filter((item, index) => {
      return allBrands.findIndex((brand) => brand === item) === index;
    });
    console.log(brands);
    setAllDesigners(brands);
    const allColors = products.map((item) => item.supplierColor).sort();
    const colors = allColors.filter((item, index) => {
      return allColors.findIndex((brand) => brand === item) === index;
    });
    setAllColors(colors);
  }, [products]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      const processedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(processedData);
      setProducts(processedData);
      setFilteredProducts(processedData);
    };

    getProducts();
  }, []);

  const linkifyString = (str) => {
    return str
      .replace(/\s+/g, "-")
      .replace(/['"]+/g, "")
      .replace(/\*+/g, "")
      .toLowerCase();
  };

  const returnAllProducts = () => {
    setFilteredProducts(products);
  };

  const updateType = (type) => {
    setTypeName(type);
  };

  const updateDesigner = (designer) => {
    setDesignerName(designer);
  };

  const updatePrice = (cmd) => {
    setPriceCommend(cmd);
  };

  const updateColor = (color) => {
    setColor(color);
  };

  const [mobileRefine, setMobileRefine] = useState(false);
  const [mobileSort, setMobileSort] = useState(false);
  return (
    <div className="pt-[55px] w-full">
      <div className="w-full border grid grid-cols-2 lg:hidden">
        <a
          onClick={() => {
            setMobileRefine(!mobileRefine);
            setMobileSort(false);
          }}
          className="h-10 col-span-1 border-r border-b grid place-items-center font-bold"
        >
          <span>REFINE</span>
        </a>
        <a
          onClick={() => {
            setMobileSort(!mobileSort);
            setMobileRefine(false);
          }}
          className="h-10 col-span-1 border-b grid place-items-center font-bold"
        >
          <span>SORT</span>
        </a>
        {mobileRefine && (
          <div className="col-span-2 border-b">
            <div className="px-4 sm:px-9">
              <p
                className="cursor-pointer"
                onClick={() => {
                  updateType("");
                }}
              >
                ALL CATEGORIES
              </p>
              <ul className="h-[80px] md:h-10 grid grid-cols-2 md:grid-cols-4 w-full">
                <li
                  className="grid place-items-center cursor-pointer h-full"
                  onClick={() => {
                    updateType("accessories");
                  }}
                >
                  ACCESSORIES
                </li>
                <li
                  className="grid place-items-center cursor-pointer h-full"
                  onClick={() => {
                    updateType("bags");
                  }}
                >
                  BAGS
                </li>
                <li
                  className="grid place-items-center cursor-pointer h-full"
                  onClick={() => {
                    updateType("clothing");
                  }}
                >
                  CLOTHING
                </li>
                <li
                  className="grid place-items-center cursor-pointer h-full"
                  onClick={() => {
                    updateType("shoes");
                  }}
                >
                  SHOES
                </li>
              </ul>
            </div>
            <div className="flex items-center border-t min-h-[40px] px-4 sm:px-9">
              <p className="">ALL DESIGNERS</p>
              <select
                name=""
                id=""
                className="text-xs ml-3 "
                onChange={(e) => {
                  updateDesigner(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select
                </option>
                {allDesigners.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {mobileSort && (
          <div className="col-span-2 list-none w-full">
            <li
              className="h-10 flex items-center w-full border-b px-4 sm:px-9 cursor-pointer"
              onClick={() => {
                updatePrice("descendingPrice");
              }}
            >
              Price: High to Low
            </li>
            <li
              className="h-10 flex items-center px-4 sm:px-9 cursor-pointer"
              onClick={() => {
                updatePrice("ascendingPrice");
              }}
            >
              Price: Low to High
            </li>
          </div>
        )}
      </div>
      <div className="px-4 sm:px-9 min-h-[93vh]">
        <div className="grid grid-cols-4 lg:grid-cols-6">
          <div className="hidden lg:block lg:col-span-1">
            <LeftSideBar
              updateType={updateType}
              updateDesigner={updateDesigner}
              allDesigners={allDesigners}
              returnAllProducts={returnAllProducts}
            ></LeftSideBar>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[30px] gap-x-[10px]">
              {filteredProducts.map((product, index) => {
                return (
                  <Link
                    to={
                      "/product/" +
                      linkifyString(product.brand) +
                      "/" +
                      linkifyString(product.name)
                    }
                    state={product}
                    key={index}
                  >
                    <ProductCard
                      brand={product.brand}
                      name={product.name}
                      type={product.type}
                      price={product.price}
                      size={product.size}
                      description={product.description}
                      attribute={product.attribute}
                      supplierColor={product.supplierColor}
                      imgPreview={product.imgPreview}
                      imgLinks={product.imgLinks}
                    ></ProductCard>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-1">
            <RightSideBar
              updatePrice={updatePrice}
              colors={allColors}
              updateColor={updateColor}
            ></RightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
};
