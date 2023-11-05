import React from 'react';

import {StatusSpan, ItemLi, AvatarImg, NameP } from './FriendListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemLi>      
      <StatusSpan $isOnline={isOnline}></StatusSpan>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <NameP>{name}</NameP>
    </ItemLi>
  );
};
