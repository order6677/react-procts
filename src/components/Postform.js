// import React, { useState } from "react";
// import Axios from "axios";

// function Postform() {
//   const url = "https:/www.themealdb.com/api/json/v1/1/search.php?f=create";
//   const [data, setData] = useState({
//     mealname: "",
//     origin: "",
//     mainingredient: "",
//     simmertime: "",
//     servedwith: "",
//   });
//   function submit(e) {
//     e.preventDefault();
//     Axios.post(url, {
//       mealname: data.mealname,
//       origin: data.origin,
//       mainingredient: data.mainingredient,
//       simmertime: data.simmertime,
//       servedwith: data.servedwith,
//     });
//   }

//   function handle(e) {
//     const newdata = { ...data };
//     newdata[e.target.id] = e.target.value;
//     setData(newdata);
//   }
//   return (
//     <div>
//       <form onSubmit={(e) => submit(e)}>
//         <input
//           onChange={(e) => handle(e)}
//           id="mealname"
//           value={data.mealname}
//           placeholder=" mealname"
//           type="text"
//         ></input>
//         <input
//           onChange={(e) => handle(e)}
//           id="origin"
//           value={data.origin}
//           placeholder="origin"
//           type="text"
//         ></input>
//         <input
//           onChange={(e) => handle(e)}
//           id="mainingredient"
//           value={data.mainingredient}
//           placeholder="mainingredient"
//           type="text"
//         ></input>
//         <input
//           onChange={(e) => handle(e)}
//           id="simmertime"
//           value={data.simmertime}
//           placeholder="simmertime"
//           type="text"
//         ></input>
//         <input
//           onChange={(e) => handle(e)}
//           id="servedwith"
//           value={data.servedwith}
//           placeholder="servedwith"
//           type="text"
//         ></input>
//         <button></button>
//       </form>
//     </div>
//   );
// }
// export default Postform;
