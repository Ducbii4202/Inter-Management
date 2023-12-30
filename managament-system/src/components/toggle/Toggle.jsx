import { useState } from "react";
import "./ToggleStyle.css";
// //stateless function component
// function Toggle() {
//     return <div classNam="toggle"></div>;
// }
// //stateful function componet
// function Toggle2() {
//     //const
//     return (
//         <div className="toggle"></div>
//     )
// }

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  // 1. enabling <Cách bật>: useState(initialize value)
  // 2. initialize state <Gtri mà ta muốn truyền vào(muốn khởi tạo)>: useState(false)
  // 3. reading state :
  // 4. update state

  //   const array = useState(false);
  //   console.log(array[0]);
  //   console.log(array[1]);
  //   const arr = [1, 2];
  //   const [a, b] = [1, 2];
  //   console.log(a, b);
  // invitializ value: boolean(true, false), number(1, 2, 3,...), string("Evodev"), undefined, null, [1, 2, 3,..], {title: "Frontend Dev"}
  // state changes -> re-render

  const handleToggle = () => {
    setOn((on) => !on);
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {on ? "On" : "Off"}
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
