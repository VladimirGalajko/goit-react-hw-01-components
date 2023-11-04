import styled from 'styled-components';

const ProfileCardDiv = styled.div`
  max-width: 200px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Reset = styled.p`
  margin: 0;
  padding: 0;
`;
    
const NameP = styled(Reset)`
  font-size: 1.5em;
  font-weight: bold;
  color: #777;
`;

const TagP = styled(Reset)`
  margin-right: 10px;
  color: #777;
  padding: 5px;
`;

const LocationP = styled(Reset)`
  color: #777;
`;

const StatsUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const StatsLi = styled.li`
  text-align: center;
`;

const LabelSpan = styled.span`
  color: #777;
`;

const QuantitySpan = styled.span`
  display: flex;
  font-weight: bold;
  color: #333;
`;



export {
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
};
