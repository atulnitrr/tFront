import { useState, useEffect } from "react";
import axios from "axios";
const B_PATH = "http://localhost:3033";

const useWhomToFollow = (user_id) => {
  const [userRecom, setUserRecom] = useState([]);
  const [wtfError, setEtfError] = useState({});
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${B_PATH}/get_recom/users`);
        setUserRecom(response.data);
      } catch (err) {
        setEtfError(err.response);
      }
    }
    getData();
  }, [user_id]);
  return {
    userRecom,
    wtfError,
  };
};
export default useWhomToFollow;
