import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { ProductCard } from "./ProductCard";
import { Link, parsePath } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { type } from "@testing-library/user-event/dist/type";
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
  const [allTypes,setAllTypes]  = useState([]);
  const [activeType,setActiveType] = useState([]);
  const [allSubTypes,setAllSubTypes] = useState([]);
  const [activeSubType,setActiveSubType] = useState([]);
  const [allSubSubTypes,setAllSubSubTypes] = useState([]); 
  function filterProductsByType(products,type) {
    if (type === "") return products;
    let filtered = products.filter((item) => item?.type === type);
    if (filtered.length > 0) return filtered;
    else {
      filtered = products.filter((item) => item?.subtype === type);
      if (filtered.length > 0) return filtered;
      else {
        return products.filter((item) => item?.subsubtype === type);
      }

    }
  }

  function filterProductsByDesigner(products,designerName) {
    if (designerName === "") return products;
    return products.filter((item) => item.brand === designerName);
  }

  function filterProductsByColor(products,color) {
    if (color ===  "") return products;
    return products.filter((item) => doesItemExist(item.color,color.toLowerCase()) === true);
  }

  const doesItemExist = (arr, element) => {
    return arr.find(item => item.toLowerCase() === element) !== undefined;
  };

  function filterProductsByPrice(products,cmd) {
    if (cmd === "descendingPrice")
        return products.sort((a, b) => b.price - a.price);
    else if (cmd === "ascendingPrice")
        return products.sort((a, b) => a.price - b.price);
    else
        return products;
  }


  useEffect(() => {
    const filtering = () => {
      console.log(typeName,designerName,color,priceCommend);
      setFilteredProducts(
        filterProductsByType(
          filterProductsByColor(
            filterProductsByDesigner(
              filterProductsByPrice(products,priceCommend)
            ,designerName
          )
        ,color)
      ,typeName)
    )
    }
    filtering();
    console.log(filteredProducts)
  },[typeName,designerName,color,priceCommend])



  useEffect(() => {
    returnAllProducts();
    const allBrands = products.map((item) => item.brand).sort();
    const brands = allBrands.filter((item, index) => {
      return allBrands.findIndex((brand) => brand === item) === index;
    });
    console.log(brands);
    setAllDesigners(brands);
    const allColors = products.map((item) => item.color);
    let colorSet = new Set();
    // const colors = allColors.filter((item, index) => {
    //   return allColors.findIndex((brand) => brand === item) === index;
    // });
    for (let loc of allColors) {
      if (Array.isArray(loc)) {  // Check if loc is an array
        for (let c of loc) {
            colorSet.add(c);
        }
    }
    }
    let colors = [];
    for (let c of colorSet){
      colors.push(c.charAt(0).toUpperCase() + c.slice(1));
    }
    colors.sort();
    console.log("colors",colors);
    setAllColors(colors);
    const allCategories = products.map((item) => ({
      type: item.type,
      subtype: item.subtype,
      subsubtype: item.subsubtype
    }));
    console.log(allCategories);  
    let tempType = new Set();
    for (let category of allCategories){
      tempType.add(category.type);
    }
    let types = [],activetype = [];
    for (let t of tempType){
      activetype.push(false);
      types.push(t);
    }
    types.sort();
    console.log("type ",types)
    setAllTypes(types);
    console.log("activeType",activetype);
    setActiveType(activetype);
    let subTypes = [];
    let active0 = [];
    for (let i = 0;i < types.length;++i){
      let tempSubType = new Set();
      for (let category of allCategories){
        if (category.type === types[i]){
          tempSubType.add(category.subtype);
        }
      }
      let subType = [],active1 = [];
      for (let st of tempSubType){
        subType.push(st);
        active1.push(false);
      }
      subType.sort();
      subTypes.push(subType);
      active0.push(active1);
    }
    setAllSubTypes(subTypes);
    console.log("activeSub",active0);
    setActiveSubType(active0);
    let subsubTypes = [],active4 = [];
    for (let i = 0;i < subTypes.length;++i){
      console.log(subTypes[i])
      let temp3 = [];
      for (let j = 0;j < subTypes[i].length;++j){
        let temp = new Set();
        let temp2 = [];
        for (let category of allCategories){
          if (category.type != null && category.subtype != null && category.type.toLowerCase() === types[i].toLowerCase() && category.subtype.toLowerCase() === subTypes[i][j].toLowerCase()){
            temp.add(category.subsubtype);
          }
        }
        // console.log(types[i],subTypes[i][j])
        // console.log(temp);
        
        for (let t of temp){
          temp2.push(t);
        }
        temp3.push(temp2);
      }
      subsubTypes.push(temp3);
    }
    console.log("subsubtype",subsubTypes);
    setAllSubSubTypes(subsubTypes);
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
    if (!str) {
      return ""; // Handle undefined or null case
    }
    return str.replace(/\s+/g, "-").replace(/['"]+/g, "").replace(/\*+/g, "").toLowerCase();
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
    filterProductsByPrice(filteredProducts,cmd);
  };

  const updateColor = (color) => {
    setColor(color);
  };


  const [mobileRefine, setMobileRefine] = useState(false);
  const [mobileSort, setMobileSort] = useState(false);
  const [refineSelect,setRefineSelect] = useState(-1);
  const allRefines = ["Designers","categories","colors"];
  const [userColor,setUserColor] = useState("");
  const [userDesigner,setUserDesigner] = useState("");
  const [userType,setUserType] = useState("");
  const [userRefines,setUserRefine] = useState([]);
  const [countRefines,setCountRefine] = useState(0);

  useEffect(() => {
    let cnt = 0;
    if (userColor != "") ++cnt;
    if (userDesigner != "") ++cnt;
    if (userType != "") ++cnt;
    setCountRefine(cnt);   
  },[userColor,userDesigner,userType])

  useEffect(() => {
    console.log("allSubTypes",allSubTypes)
    console.log("allSubType(0)",allSubTypes[0])
  },[allSubTypes])

  useEffect(() => {
    console.log("allSubSubTypes",allSubSubTypes)
  },[allSubSubTypes])
  return (
    <div className="pt-[55px] w-full text-xs">
      <div className="w-full border-t border-b border-[#ccc] grid grid-cols-2 lg:hidden sticky top-[55px] z-5 bg-white">
        <li
          onClick={() => {
            setMobileRefine(!mobileRefine);
            setMobileSort(false);
          }}
          className="h-10 col-span-1 border-r border-[#ccc] grid place-items-center font-bold"
        >
          <span>REFINE {countRefines > 0 ? "(" + countRefines + ")" : ""}</span>
        </li>
        <li
          onClick={() => {
            setMobileSort(!mobileSort);
            setMobileRefine(false);
          }}
          className="h-10 col-span-1  grid place-items-center font-bold"
        >
          <span>SORT
            <span>
              {priceCommend === "ascendingPrice" && " (ASCENDING)" }
              {priceCommend === "descendingPrice" && " (DESCENDING)" }
            </span>
             </span>
        </li>
        {mobileRefine && (
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-white px-6 sm:px-9">
            <ul className="flex justify-between pt-3 pb-6">
              <li className="uppercase" onClick={() => {
                setMobileRefine(false);
              }} >Cancel</li>
              <li className="uppercase text-[#888]">All products</li>
              <li className="invisible">aaaaaaa</li>
            </ul>
            <div className="py-3.5 uppercase flex">
              {(!userDesigner && !userType && !userColor)  && 
                <p className="text-[#888]">Select a filter</p>
              }
              {(userDesigner || userType || userColor) && (
                <button className="mr-5" onClick={() => {
                  setUserColor("");
                  setUserDesigner("");
                  setUserType("");
                }}>Clear</button>
              )}
              {
                userDesigner && 
                <button className="capitalize mr-5 inline-flex items-center justify-between p-2.5 min-w-[110px] min-h-[10px] bg-[rgba(243,243,243,.9529411765)]">
                  <span>{userDesigner}</span>
                  <FiX onClick={() => {
                    setUserDesigner("");
                  }} />
                 </button> 
              }
              {userType && <button className="capitalize mr-5 inline-flex items-center justify-between p-2.5 min-w-[110px] min-h-[10px] bg-[rgba(243,243,243,.9529411765)]">
                  <span>{userType}</span>
                  <FiX onClick={() => {
                    setUserType("");
                  }} />
                 </button> }
              {userColor && <button className="capitalize mr-5 inline-flex items-center justify-between p-2.5 min-w-[110px] min-h-[10px] bg-[rgba(243,243,243,.9529411765)]">
                  <span>{userColor}</span>
                  <FiX onClick={() => {
                    setUserColor("");
                  }} />
                 </button> }
            </div>
            <div className="pb-5">
              {
                allRefines.map((item,index) => {
                  return (
                    <button className={`uppercase mr-5 ${refineSelect === index ? 'underline' : ''}`} onClick={() => {
                      setRefineSelect(index);
                    }}>{item}</button>
                  )
                })
              }
            </div>
            {refineSelect === 0 && (
              <div>
              <ul>
                {
                  allDesigners.map((item,index) => {
                    return (
                      <li className={`flex ${
                        userDesigner !== item ? "ml-5" : ""
                      } mb-5`} onClick={() => {
                        setUserDesigner(item);
                      }}>
                        {
                          userDesigner === item && (
                            <div className="w-5 text-black flex justify-center items-center">
                              <hr className="w-[9px] h-[1px] text-black bg-black border-none" />
                            </div>
                          )
                        }
                        <Link>{item}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              </div>
            )
            }
            {
              refineSelect === 1 && (
                <div>
                  <ul>
                    {
                      allTypes.map((item,index) => {
                        return <div>
                        <li className={`flex ${
                          userType === item ? "" : "ml-5"
                        } mb-5 capitalize`} onClick={() => {
                          setUserType(item);
                          setActiveType((prev) => {
                            let temp = [...prev];
                            temp[index] = !temp[index];
                            return temp;
                          })
                        }}>
                          {
                          userType === item && (
                            <div className="w-5 text-black flex justify-center items-center">
                              <hr className="w-[9px] h-[1px] text-black bg-black border-none" />
                            </div>
                          )
                        }
                          <Link>
                          {item}
                          </Link>
                        </li>
                        {activeType[index] && (
                          <div>
                            <ul>
                              {
                                allSubTypes[index].map((item2,index2) => {
                                  return (<div>
                                    <li className={`flex ${
                                      userType === item2 ? "ml-5" : "ml-10"
                                    } mb-5 capitalize`} onClick={() => {
                                      setUserType(item2);
                                      setActiveSubType((prev2) => {
                                        let temp = [...prev2]
                                        temp[index][index2] = !temp[index][index2];
                                        return temp;
                                      })
                                    }}>
                                      {
                          userType === item2 && (
                            <div className="w-5 text-black flex justify-center items-center">
                              <hr className="w-[9px] h-[1px] text-black bg-black border-none" />
                            </div>
                          )
                        }
                                      <Link>
                                      {item2}
                                      </Link> 
                                      </li>
                                  {
                                    activeSubType[index][index2] && (
                                      <div>
                                        <ul>
                                          {
                                            allSubSubTypes[index][index2].map((item3,index3) => {
                                              return (<div>
                                                <li className={`flex mb-5 ${
                                                  userType === item3 ? "ml-10" : "ml-[60px]"
                                                } capitalize`} onClick={() => {
                                                  setUserType(item3);
                                                }} >
                                                  {
                          userType === item3 && (
                            <div className="w-5 text-black flex justify-center items-center">
                              <hr className="w-[9px] h-[1px] text-black bg-black border-none" />
                            </div>
                          )
                        }
                                                  <Link>
                                                  {item3}
                                                  </Link> 
                                                  </li>
                                              </div>)
                                            })
                                          }
                                        </ul>
                                      </div>
                                    )
                                  }
                                  </div>) 
                                })
                              }
                            </ul>
                          </div>
                        )}
                        </div>
                      })
                    }
                  </ul>
                </div>
              )
            }
            {
              refineSelect === 2 && (
                <div>
              <ul>
                {
                  allColors.map((item,index) => {
                    return (
                      <li className={`flex capitalize ${
                        userColor !== item ? "ml-5" : ""
                      } mb-5`} onClick={() => {
                        setUserColor(item);
                      }}>
                        {
                          userColor === item && (
                            <div className="w-5 text-black flex justify-center items-center">
                              <hr className="w-[9px] h-[1px] text-black bg-black border-none" />
                            </div>
                          )
                        }
                        <Link>{item}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              </div>
              )
            }
            <div className="fixed left-0 bottom-5 w-full flex justify-center">
              <div className="w-full ml-6 mr-6">
            <button className="w-full bg-black text-white text-center h-9 uppercase" onClick={() => {
              if (countRefines === 0){
                returnAllProducts();
                setMobileRefine(false);
              } else {
                setDesignerName(userDesigner);
                setColor(userColor);
                setTypeName(userType);
                setMobileRefine(false);
              }
            }}>
              <span>{
                countRefines !== 0 ? `Apply filters (${countRefines})` : "view all products"
                }</span>
            </button>
              </div>
            </div>
            
          </div>
        )}
        {mobileSort && (
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-white px-6 sm:px-9">
            <ul className="flex justify-between pt-3 pb-6">
              <li className="uppercase" onClick={() => {
                setMobileSort(false);
              }} >Cancel</li>
              <li className="uppercase text-[#888]">sort</li>
              <li className="invisible">aaaaaaa</li>
            </ul>
            <ul className="list-none">
            <li
              className="h-10 flex items-center w-full px-4 sm:px-9 cursor-pointer"
              onClick={() => {
                updatePrice("descendingPrice");
                setMobileSort(false);
              }}
            >
              Price: High to Low
            </li>
            <li
              className="h-10 flex items-center px-4 sm:px-9 cursor-pointer"
              onClick={() => {
                updatePrice("ascendingPrice");setMobileSort(false);
              }}
            >
              Price: Low to High
            </li>
            </ul>
          </div>
        )}
      </div>
      <div className="px-4 sm:px-9 min-h-[93vh]">
        <div className="grid grid-cols-4 lg:grid-cols-6">
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-[55px]">
            <LeftSideBar
              updateType={updateType}
              updateDesigner={updateDesigner}
              allDesigners={allDesigners}
              returnAllProducts={returnAllProducts}
              allTypes= {allTypes}
              activeType={activeType}
              setActiveType={setActiveType}
              activeSubType={activeSubType}
              setActiveSubType={setActiveSubType}
              allSubTypes={allSubTypes}
              allSubSubTypes={allSubSubTypes}
              userType={userType}
              setUserType={setUserType}
              designerName={designerName}
              updateColor={updateColor}
              updatePrice={updatePrice}
            ></LeftSideBar>
            </div>
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
            <div className="sticky top-[55px]">

            <RightSideBar
              updatePrice={updatePrice}
              priceCommend={priceCommend}
              allColors={allColors}
              updateColor={updateColor}
              returnAllProducts={returnAllProducts}
              color={color}
            ></RightSideBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
