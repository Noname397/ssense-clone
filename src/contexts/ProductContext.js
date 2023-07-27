import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      type:"accessory",
      price: 545,
      size: [],
      description: "Oval bio-acetate-frame sunglasses in tortoiseshell.",
      attribute: [
        "Brown lenses with 100% UVA/UVB protection",
        "Integrated nose pads",
        "Logo engraved at temple",
        "Hardside case included",
        "Size: 83.15 120",
      ],
      supplierColor: "Havana brown",
      imgPreview:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg",
      imgLinks: [
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_2/balenciaga-tortoiseshell-90s-sunglasses.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_3/balenciaga-tortoiseshell-90s-sunglasses.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_4/balenciaga-tortoiseshell-90s-sunglasses.jpg",
      ],
    },
    {
      brand: "Jacquemus",
      name: "Off-White Le Papier 'Le Bandeau Neve' Headband",
      type:"accessory",
      price: 85,
      size: [],
      description: "Padded shag knit stretch nylon-blend headband in off-white. Logo embroidered in white at side",
      attribute: [
        'Padded shag knit stretch nylon-blend headband in off-white. Logo embroidered in white at side'
      ],
      supplierColor: "Off-white",
      imgPreview:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_320/f_auto,dpr_1.3/232553M138001_1/jacquemus-off-white-le-papier-le-bandeau-neve-headband.jpg",
      imgLinks: [
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232553M138001_1/jacquemus-off-white-le-papier-le-bandeau-neve-headband.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232553M138001_2/jacquemus-off-white-le-papier-le-bandeau-neve-headband.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232553M138001_3/jacquemus-off-white-le-papier-le-bandeau-neve-headband.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232553M138001_4/jacquemus-off-white-le-papier-le-bandeau-neve-headband.jpg",
      ],
    }
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const UserProduct = () => {
  return useContext(ProductContext);
};
