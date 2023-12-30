import { useEffect } from "react";
import axios from "axios";

axios
  .get("/user?ID=12345")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// https://picsum.photos/v2/list
const Photos = () => {
  // useEffect(callback, [dependencies])
  // useEffect(function callback(){
  //     //side-effects
  // }, []);
  console.log("outside");
  useEffect(() => {
    //side-effects
    document.title = "Wecome to useEffect";
    console.log("inside");
  }, []);
  return <div>Photos</div>;
};

export default Photos;
