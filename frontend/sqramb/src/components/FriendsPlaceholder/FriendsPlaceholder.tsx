import React from "react";
import "./friendsPlaceholder.scss";
interface FriendsPlaceholderProps {
    className?: string;
  }
  
  const FriendsPlaceholder: React.FC<FriendsPlaceholderProps> = ({ className }) => {
  const friendsData = [
    { id: 1, name: "Mario Rossi", profileImage: "https://picsum.photos/50?random=1" },
    { id: 2, name: "Luca Bianchi", profileImage: "https://picsum.photos/50?random=2" },
    { id: 3, name: "Mike Neri", profileImage: "https://picsum.photos/50?random=2" },
    { id: 4, name: "Nando Balla", profileImage: "https://picsum.photos/50?random=2" },
    
  ];

  return (
    <div className={`friends-placeholder ${className}`}>
      {friendsData.map((friend) => (
        <div key={friend.id} className="friend-item">
          <img src={friend.profileImage} alt={friend.name} className="friend-image" />
        </div>
      ))}
    </div>
  );
};

export default FriendsPlaceholder;
