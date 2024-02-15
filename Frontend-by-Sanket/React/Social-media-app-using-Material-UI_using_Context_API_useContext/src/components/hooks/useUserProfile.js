import { useState, useEffect } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useUserProfile() {
  const { userid } = useParams();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${userid}`, {
        headers: { "app-id": "65b3908f727ec28b26911e81" },
      })
      .then((response) => {
        setUser({ ...response.data });
        setLoading(false);
        console.log(response.data);
      });
  }, []);

  return [user, loading];
}
