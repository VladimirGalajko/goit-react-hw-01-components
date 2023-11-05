import {FriendListUl} from './FriendList.styled';
import {FriendsListItem} from '../FriendListItem';

export const FriendList = ({friends}) => {
  
  return (    
    <FriendListUl>
      {friends.map(el => {
        return (
          <FriendsListItem
          key={el.id}
          id={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}/>
        );
      })}
    </FriendListUl>
  );
};
