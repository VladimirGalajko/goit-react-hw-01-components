
import {
  ProfileCardDiv,
  DescriptionDiv,
  AvatarImg,
  NameP,
  TagP,  
  StatsUl,  
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
        <p>{location}</p>
      </DescriptionDiv>

      <StatsUl>
        <li>
          <LabelSpan>Followers</LabelSpan>
          <QuantitySpan>{followers}</QuantitySpan>
        </li>
        <li>
          <LabelSpan>Views</LabelSpan>
          <QuantitySpan>{views}</QuantitySpan>
        </li>
        <li>
          <LabelSpan>Likes</LabelSpan>
          <QuantitySpan>{likes}</QuantitySpan>
        </li>
      </StatsUl>
    </ProfileCardDiv>
  );
};
