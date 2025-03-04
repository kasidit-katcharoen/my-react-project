import React, { useRef, useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import "@/css/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "@/pages/about.jsx";
import Search from "@/components/search.jsx";
import Products from "@/pages/products.jsx";
import Marquee from "react-fast-marquee";
import DraggableMarquee from "@/pages/draggableMarquee";

const Home = () => <h2>🏠 Home Page</h2>;
const NotFound = () => <h2>❌ Page Not Found</h2>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Marquee
        style={{ fontSize: "30px" }}
        direction={"left"}
        speed={10}
        autoFill={false}
        play={true}
        gradient={true}
        // gradientColor={"red"}
        gradientColor={"#252525"}
        pauseOnHover={() => {
          console.log("pauseOnHover");
        }}
        pauseOnClick={() => {
          console.log("pauseOnClick");
        }}
        // gradientHeight={"300px"}
        gradientWidth={"200px"}
        onFinish={() => {
          console.log("onFinish");
        }}
        onCycleComplete={() => {
          console.log("onCycleComplete");
        }}
        onMount={() => {
          console.log("onMount");
        }}
        children
      >
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>

      <div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        count is {count}
        <div className="card">
          <button
            onClick={() => setCount((count) => (count <= 20 ? 0 : count - 20))}
          >
            -20
          </button>
          <button
            onClick={() => setCount((count) => (count <= 10 ? 0 : count - 10))}
          >
            -10
          </button>
          <button
            onClick={() => setCount((count) => (count <= 0 ? 0 : count - 1))}
          >
            -
          </button>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <button onClick={() => setCount((count) => count + 10)}>+10</button>
          <button onClick={() => setCount((count) => count + 20)}>+20</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          |<Link to="/about">About</Link>
          |<Link to="/products">Products</Link>
          |<Link to="/products/food">Products/food</Link>
          |<Link to="/products/food/banana">Products/food/banana</Link>
          |<Link to="/DraggableMarquee">DraggableMarquee</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About objProps={{ pageName: "about" }} />}
          />
          <Route
            path="/products"
            element={<Products objProps={{ pageName: "products/main" }} />}
          />
          <Route
            path="/products/:category"
            element={<Products objProps={{ pageName: "products/category" }} />}
          />
          <Route
            path="/products/:category/:product_name"
            element={
              <Products
                objProps={{ pageName: "products/category/product_name" }}
              />
            }
          />
          <Route
            path="/DraggableMarquee"
            element={<DraggableMarquee objProps={{ pageName: "DraggableMarquee" }} />}
          />
          <Route path="*" element={<NotFound />} /> {/* Handle 404 */}
        </Routes>
        <Search />
      </Router>
    </>
  );
}

export default App;
