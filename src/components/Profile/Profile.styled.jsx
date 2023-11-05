import styled from 'styled-components';

const ProfileCardDiv = styled.div`
  max-width: 200px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 
  1px 1px 1px rgb(186, 190, 204),
  -1px -1px 1px rgb(255, 255, 255);
  
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

const StyledP = styled.p`
  margin: 0;
  padding: 0;
  color: #777;
`;

const NameP = styled(StyledP)`
  font-size: 1.5em;
  font-weight: bold; 
`;

const TagP = styled(StyledP)`
  margin-right: 10px;
  padding: 5px;
`;


const StatsUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
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
  StatsUl,  
  LabelSpan,
  QuantitySpan,
};
