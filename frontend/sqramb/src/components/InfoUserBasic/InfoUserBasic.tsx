import React, { useState, useEffect } from "react";
import "./infoUserBasic.scss";
import { getCode } from "country-list";
import FriendsPlaceholder from "../FriendsPlaceholder/FriendsPlaceholder";

const InfoUserBasic: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [flagUrl, setFlagUrl] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        console.error("User ID or token not found in localStorage");
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Unauthorized: Token may be invalid or expired");
          } else {
            throw new Error("Failed to fetch user data");
          }
        }

        const userData = await response.json();

        setUserData(userData);

        const { country } = userData;
        const isoCode = getCode(country);

        if (!isoCode) {
          throw new Error(`Country code not found for "${country}"`);
        }

        const flagUrl = `https://flagcdn.com/32x24/${isoCode.toLowerCase()}.png`;
        setFlagUrl(flagUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="infoUserBasic">
      <p className="infoUserBasic__name">{userData.fullName}</p>
      <p className="infoUserBasic__profession">{userData.profession}</p>
      <p className="infoUserBasic__city">{userData.city}</p>
      {flagUrl && <img src={flagUrl} alt={`Flag of ${userData.country}`} className="flag" />}
      <FriendsPlaceholder className="custom-friends-placeholder" />
    </div>
  );
};

export default InfoUserBasic;
