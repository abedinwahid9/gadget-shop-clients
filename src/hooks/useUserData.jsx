import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserdata] = useState(null);
  const useAxios = useAxiosPublic();

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await useAxios.get(`/user/${user.email}`);
      setUserdata(res.data);
    };
    if (user?.email && !loading) {
      fetchUserData();
    }
  }, [user, loading, useAxios]);

  return userData;
};

export default useUserData;
