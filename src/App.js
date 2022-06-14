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

function App() {
  return (
    <div className="App">
      <Header logo={logo} bag={bag} />
      <Content />
      <LinkStory />
      <Offers
        mug1={mug1}
        mug2={mug2}
        product1={product1}
        product2={product2}
        product3={product3}
        product4={product4}
        product5={product5}
        product6={product6}
        product7={product7}
        product8={product8}
        product9={product9}
        premBook={premBook}
        premCup1={premCup1}
        premCup2={premCup2}
      />
      <div className="backgr"></div>
      <Footer />
    </div>
  );
}

export default App;
