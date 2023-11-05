
import styled from 'styled-components';
import { getStatusColor} from './getStatusColor';

const ItemLi = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 150px;
  box-shadow: 
  1px 1px 1px rgb(186, 190, 204),
  -1px -1px 1px rgb(255, 255, 255);
`;
const StatusSpan = styled.span`    
  width: 10px;
  height: 10px;  
  border-radius: 50%;
  background-color: ${props=>getStatusColor(props.$isOnline)};
  margin-right: 20px;
  align-items: start
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
const NameP = styled.p`
  font-weight: bold;
`;

export {ItemLi,StatusSpan, AvatarImg, NameP };