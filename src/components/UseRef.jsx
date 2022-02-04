import React, { useRef } from "react";

export default function UseRef() {
  //const [term, setTerm] = React.useState(""); // import yapmadan direk çağrılabilir
  // input a her girdiğimiz harf için render yapıyor, useRef ile sadece arama yapacağımız kelimeyi girerek tek seferlik render yapar

  console.log("yenilendi");

  const inputRef = useRef();
  // console.log(inputRef);

  const inputChange = (e) => {
    inputRef.current.value = e.target.value;
  };

  const submitButton = () => {
    console.log(inputRef.current.value);
  };

  const clear = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <input
        onChange={inputChange}
        //onChange={(e) => setTerm(e.target.value)} useState için
        ref={inputRef}
        type="text"
        //value={term}
      />
      <button onClick={submitButton} type="submit">
        Submit
      </button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
