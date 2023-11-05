import React from 'react';

import {
  ProfileCardDiv,
  DescriptionDiv,
  AvatarImg,
  NameP,
  TagP,
  LocationP,
  StatsUl,
  StatsLi,
  LabelSpan,
  QuantitySpan,
} from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCardDiv>
      <DescriptionDiv>
        <AvatarImg src={avatar} alt="User avatar" />
        <NameP>{username}</NameP>
        <TagP>@{tag}</TagP>
        <LocationP>{location}</LocationP>
      </DescriptionDiv>

      <StatsUl>
        <StatsLi>
          <LabelSpan>Followers</LabelSpan>
          <QuantitySpan>{followers}</QuantitySpan>
        </StatsLi>
        <StatsLi>
          <LabelSpan>Views</LabelSpan>
          <QuantitySpan>{views}</QuantitySpan>
        </StatsLi>
        <StatsLi>
          <LabelSpan>Likes</LabelSpan>
          <QuantitySpan>{likes}</QuantitySpan>
        </StatsLi>
      </StatsUl>
    </ProfileCardDiv>
  );
};
