import "./App.css";
import logo from "./Image/logoCoffee.svg";
import bag from "./Image/bag.svg";

import mug1 from "./Image/mug1.svg";
import mug2 from "./Image/mug2.svg";

import product1 from "./Image/redCup.svg";
import product2 from "./Image/blackCup.svg";
import product3 from "./Image/essentialCup.svg";
import product4 from "./Image/winterCup.svg";
import product5 from "./Image/ceramicTea.svg";
import product6 from "./Image/handleCup.svg";
import product7 from "./Image/espresso.svg";
import product8 from "./Image/pinkCeramic.svg";
import product9 from "./Image/summerCup.svg";
import premBook from "./Image/book.svg";
import premCup1 from "./Image/premCup.svg";
import premCup2 from "./Image/premCup2.svg";

import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import LinkStory from "./Components/LinkStory/LinkStory";
import Offers from "./Components/Content/Offers/Offers";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";

let state = {
  productData: [
    {
      id: 1,
      img: product1,
      name: "Red Love Cup",
      price: 25.0,
      crossedPrice: 37.0,
    },
    {
      id: 2,
      img: product2,
      name: "Black Tea Cup",
      price: 25.0,
      crossedPrice: 29.0,
    },
    {
      id: 3,
      img: product3,
      name: "B&W Essentials Mug",
      price: 15,
      crossedPrice: 19.0,
    },
    {
      id: 4,
      img: product4,
      name: "Winter Style Mug",
      price: 25.0,
      crossedPrice: 30,
    },
    {
      id: 5,
      img: product5,
      name: "Ceramic Tea",
      price: 46.0,
      crossedPrice: 60,
    },
    {
      id: 6,
      img: product6,
      name: "No Handle Bar Cup",
      price: 34,
      crossedPrice: 43,
    },
    {
      id: 7,
      img: product7,
      name: "Espresso Cup by Mugs.co",
      price: 25.0,
      crossedPrice: 30,
    },
    {
      id: 8,
      img: product8,
      name: "Pink Premium Ceramic",
      price: 99.0,
      crossedPrice: 115,
    },
    {
      id: 9,
      img: product9,
      name: "Summer Designer Cup",
      price: 29.0,
      crossedPrice: 37,
    },
  ],
  mugData: [
    {
      id: 1,
      img: mug1,
      name: "Pink Premium Ceramic",
      price: "$50.00",
      crossedPrice: "$69.00 USD",
    },
    {
      id: 2,
      img: mug2,
      name: "Golden Designers Mug",
      price: "$50.00",
      crossedPrice: "$69.00 USD",
    },
  ],
};

function App() {
  const [modalActive, setModalActive] = useState(false);

  const [dataProduct, setProductData] = useState(state);
  const addProduct = () => {
    const newProduct = {
      id: 10,
      img: product9,
      name: "NEW PRODUCT",
      price: "$10000",
    };
    const newData = [...dataProduct.productData, newProduct];
    const addProd = { ...dataProduct, productData: newData };
    setProductData(addProd);
  };

  const remoteProduct = () => {
    const removed = dataProduct.productData.filter((elem) => {
      if (elem.id !== 10) {
        return true;
      }
      return false;
    });

    setProductData({ ...dataProduct, productData: removed });
  };

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <div className="App">
      <Header logo={logo} bag={bag} setActive={setModalActive} />
      <Content />
      <LinkStory />
      <Offers
        mugData={state.mugData}
        productData={dataProduct.productData}
        addProduct={addProduct}
        remoteProduct={remoteProduct}
        handleAddProduct={handleAddProduct}
        premBook={premBook}
        premCup1={premCup1}
        premCup2={premCup2}
      />
      <div className="backgr"></div>
      <Footer />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
      ></Modal>
    </div>
  );
}

export default App;
