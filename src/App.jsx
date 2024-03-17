import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setlength] = useState(0);
  const [number, setnumber] = useState(false);
  const [char, setcharacter] = useState(false);
  const [passward, setpassward] = useState("");

  const GeneratePasswad = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (number)
        str += "0123456789"
      if (char)
        str += "!@#$%^&*-_+=[]{}~`"
      for (let i = 0; i <= length; i++) {
        let randonIndex = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(randonIndex);
      }
      setpassward(pass);
    }, [length, number, char, setpassward])

  useEffect(() => {
    GeneratePasswad();
  }, [length, number, char, setpassward])
  return (
    <>
      <div className="text-white h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-mono text-center m-10">Passward Generator</h1>
        <div className="h-auto w-auto border rounded-xl p-11 ">
          <div className="flex m-auto">
            <input type="text" className="rounded-l-md w-72 text-black text-base border-none"
              value={passward}
              readOnly
            />
            <button className="bg-blue-500 text-white rounded-r-md bold h-12 w-12">Copy</button>
          </div>
          <div className="flex gap-1">
            <input 
              type="range"
              onChange={(e) => {setlength(e.target.value)}}
              defaultValue={number}
            />
            <label>length {length}</label>
            <input type="checkbox"
              onChange={() => setnumber((prev) => !prev)} />
            <label>number</label>
            <input 
              type="checkbox"
              onChange={() => setcharacter((prev) => !prev)}
              defaultValue={char}
               />
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
