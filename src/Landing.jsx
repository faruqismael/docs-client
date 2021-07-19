import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import shortid from "shortid";
import Header from "./Header";
import Footer from "./Footer";
import "./tailwind.min.css";

const Landing = () => {
  const history = useHistory();
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function copyText(id) {
    if (code === "") {
      setError("please put your token");
    } else {
      setError(null);
      setLoading(true);
      setTimeout(() => {
        const target = document.getElementById(id);
        target.select();

        document.execCommand("copy");
        setLoading(false);
        history.push(`/documents/${code}`);
        // <Redirect to={`/documents/${code}`} />;
      }, 1000);
    }
  }

  return (
    <div>
      <Header />
      <div
        style={{ height: "90vh" }}
        class="text-gray-600 flex flex justify-center items-center body-font"
      >
        <div class="container px-5 py-24 mx-auto flex flex-col flex-wrap items-center ">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1
              style={{ fontSize: "50px" }}
              class="title-font font-medium  font-bold font-mono text-gray-900"
            >
              HI
              <span className="text-white rounded-full pr-3 bg-gradient-to-r from-white via-blue-400 to-blue-500 ">
                <span className="text-black">GH</span>DOCS
              </span>
            </h1>
            <p class="leading-relaxed text-xl mt-4">
              Create real time customizable docs at your convenience and share
              to whom you wish.
            </p>
            <button class="text-white bg-yellow-500 border-0 py-2 my-8 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link to={`/documents/${shortid.generate()}`}>CREATE DOC</Link>
            </button>
          </div>
          <div class=" transform -rotate-6 md:-rotate-12  rounded-lg md:mb-0 mb-10 p-16 flex flex-col bg-gradient-to-r from-purple-600 via- to-blue-600 text-white mt-10 md:mt-0">
            <div className="transform rotate-6 md:rotate-12">
              <h2 class="text-lg font-medium title-font mb-5">
                USE YOUR TOKEN
              </h2>
              <p className="text-yellow-400 animate-bounce  text-center">
                {error}
              </p>

              <div class="relative mb-4">
                <input
                  type="text"
                  id="myCode"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  name="code"
                  placeholder="Put Your Token Here"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {loading ? (
                <button
                  type="button"
                  class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  disabled
                >
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading
                  {/* <Link to={`/documents/${code}`}>OPENING</Link> */}
                </button>
              ) : (
                <button
                  onClick={() => copyText("myCode")}
                  class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  OPEN DOC
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
// {/* <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
//   <img
//     class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
//     src="/sarah-dayan.jpg"
//     alt=""
//     width="384"
//     height="512"
//   />
//   <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p class="text-lg font-semibold">
//         “Tailwind CSS is the only framework that I've seen scale on large
//         teams. It’s easy to customize, adapts to any design, and the build
//         size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-cyan-600">Sarah Dayan</div>
//       <div class="text-gray-500">Staff Engineer, Algolia</div>
//     </figcaption>
//   </div>
// </figure> */}
