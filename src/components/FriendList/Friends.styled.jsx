import styled from 'styled-components';
// import { getStatusColor} from './getStatusColor';


const FriendListUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  padding: 10px;
`;
const ItemLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
`;

const StatusSpan = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
  margin-right: 10px;
`;
const AvatarImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
const NameP = styled.p`
  font-weight: bold;
`;

export { FriendListUl, ItemLi, StatusSpan, AvatarImg, NameP };
