import { useState, useEffect } from "react";

export default function DevineDrapeau() {
  const [pays, setPays] = useState([]);
  const [derapo, setDerapo] = useState(null);
  const [input, setInput] = useState("");
  const [mesage, setMesage] = useState("");

  // Fetch pays à l'initial
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then(res => res.json())
      .then(data => {
        setPays(data);
        setDerapo(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);

  const Cheked = () => {
    if (!derapo) return;
    if (input.toLowerCase() === derapo.name.common.toLowerCase()) {
      setMesage("Wa3er !");
    } else {
      setMesage(`Nein , this Pays is  ${derapo.name.common}`);
    }
  };

  const handleNext = () => {
    if (pays.length === 0) return;
    setDerapo(pays[Math.floor(Math.random() * pays.length)]);
    setInput("");
    setMesage("");
  };

  if (!derapo) return <p>En cpours ....</p>;

  return (
    <div>
      <img src={derapo.flags.png} width="500"/>
      
        <derapo 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Devine le pays"
        />
        <button onClick={Cheked}>vamaide</button>
        <button onClick={handleNext} >Next pays</button>
      <p>{mesage}</p>
    </div>
  );
}
