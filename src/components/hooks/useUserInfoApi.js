import { useState, useEffect } from "react";
import axios from "axios";
const PATH = "http://localhost:3033";

const useUserInfo = (user_id) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${PATH}/user/${user_id}`);
        console.log("user info");
        console.log(response.data);
        setUserInfo(response.data);
      } catch (error) {}
    }
    getData();
  }, [user_id]);

  return {
    userInfo,
  };
};

export default useUserInfo;
