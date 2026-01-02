import "./App.css";
import Navber from "./components/navber/navber";
import Aplayers from "./components/a_players/Aplayers";
import Splayers from "./components/s_players/Splayers";
import priLeague from "./assets/plb.png";
import { Suspense, use, useState } from "react";
import Footer from "./components/footer/Footer";
import { Bounce, toast, ToastContainer } from "react-toastify";
const fetchData = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const fetchPromise = fetchData();
function App() {
  const [toggle, setToggle] = useState(true);
  const [AvailableBalance, setAvailableBalance] = useState(5000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([]);
  const plays = use(fetchPromise);
  const removePlayer = (p) => {
    toast.success(`${p.player_name} Successfully Removed`);
    const filterData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    console.log(filterData);
    setpurchasedPlayers(filterData);
    setAvailableBalance(
      AvailableBalance +
        parseInt(p.price.split("£").join("").split("m").join(""))
    );
  };
  return (
    <>
      <section className="px-4 mt-">
        <div className="relative overflow-hidden rounded-xl shadow-lg mb-5">
          {/* Background image */}
          <div
            className="
        bg-cover bg-top
        bg-[url('./assets/plb.png')]
        w-full
        aspect-21/9 sm:aspect-video md:h-80 lg:h-[360px]
      "
          >
            <Navber AvailableBalance={AvailableBalance}></Navber>
          </div>

          {/* Optional gradient overlay for readable text */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/50 via-black/10 to-transparent" />

          {/* Optional caption on top of the banner */}
          <div className="absolute left-6 bottom-6 text-white drop-shadow-md">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
              ENGLISH <span className="opacity-90">PREMIER LEAGUE</span>
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Where legends are born
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Players(${purchasedPlayers.length}/${6})`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border-r-0 border-2 border-gray-400 rounded-l-2xl ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border-l-0 border-2 border-gray-400 rounded-r-2xl  ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected<span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {
        toggle === true ? (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <span className="loading loading-spinner loading-xl"></span>
              </div>
            }
          >
            <Aplayers
              purchasedPlayers={purchasedPlayers}
              setpurchasedPlayers={setpurchasedPlayers}
              AvailableBalance={AvailableBalance}
              setAvailableBalance={setAvailableBalance}
              fetchPromise={fetchPromise}
            ></Aplayers>
          </Suspense>
        ) : (
          <Splayers
            setToggle={setToggle}
            removePlayer={removePlayer}
            purchasedPlayers={purchasedPlayers}
          ></Splayers>
        )
        //
      }
      <Footer></Footer>
      <ToastContainer>
        position="top-right" autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="light" transition=
        {Bounce}
      </ToastContainer>
    </>
  );
}

export default App;
