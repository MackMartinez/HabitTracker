import { useState, useEffect } from "react";

const useApplicationdata = () => {
  const [ state, setState ] = useState({
    title:"",
    details:"",
    startDate:"",
    endDate:"",
    startTime: "",
    endTime:"",
    days:""
  });

  return {
    state
  };
};

export default useApplicationdata;