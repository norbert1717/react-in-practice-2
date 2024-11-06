import { useEffect, useState } from "react";
import fileData from './data.json'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    setData(fileData)
  }, []) // data should come from fetch, couldn get it because of CORS


const handleClick = () => {
  //lang === "HU" ? setLang("EN") : setLang("HU");
  setLang(lang === "HU" ? "EN" : "HU");
}

  return (
    <>
      {data
        ? <>
          <div className="lang" onClick={handleClick}>
            <span className={lang === "HU" ? "selected": ""}>HU</span>
            /
            <span className={lang === "EN" ? "selected" : ""}>EN</span>
          </div>
          {data["TUs"].map((obj, index) => <p key={index}>{obj[lang]}</p>)}
        </>
        : "loading"
      }
    </>
  )
}

export default App;
