import { useState } from "react";
import Icon from "/icon.svg";
import Divider from "/divider.svg";
import "./App.css";

function App() {
  const [headers, setheaders] = useState("");
  const [para, setpara] = useState("");
  async function SubmitData() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setheaders(data.slip.id);
      setpara(data.slip.advice);
    } catch (error) {
      console.log("something wrong");
    }
  }
  return (
    <div className="maincontainer h-[100vh]">
      <div className="box w-[500px] h-[300px] text-center z-0 rounded-md">
        <div className="subbox h-[50%] flex flex-col gap-3 p-5">
          <p id="advice" className="uppercase text text-xs">
            Advice # {headers}
          </p>
          <p id="quotes" className="h-[100px] w-[100%]">
            " {para} "
          </p>
        </div>

        <div className="images h-[50%] flex flex-col gap-8 items-center mt-20 z-10">
          <img src={Divider} alt="divider" />
          <button onClick={SubmitData} className="w-10 h-10" id="button">
            <img className="w-8 clickable" src={Icon} alt="Icon" />
          </button>
        </div>
        <div className="attribution mb-10">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://aditya379.github.io/Tailwind-Portfolio/">
            Aditya Tiwari
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
