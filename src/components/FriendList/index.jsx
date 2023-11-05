import React from 'react';

import {
  FriendListUl,
  ItemLi,
  StatusSpan,
  AvatarImg,
  NameP,
} from './Friends.styled';

export const Friends = ({friends}) => {
  return (    
    <FriendListUl>
      {friends.map(el => {
        return (
          <ItemLi key={el.id}>
            <StatusSpan isOnline={el.isOnline}></StatusSpan>
            <AvatarImg src={el.avatar} alt="User avatar" width="48" />
            <NameP>{el.name}</NameP>
          </ItemLi>
        );
      })}
    </FriendListUl>
  );
};
