import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor';

const TitleH2 = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

const StatisticsSection = styled.section`  
width: 360px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StatlistUl = styled.ul`
  display: flex;
  flex-wrap: wrap;  
  align-items: center;
  justify-content: center;  
  list-style-type: none;
  padding: 0;
`;

const ItemLi = styled.li`
  display: flex; 
  flex-direction: column;
  width: 15%;
  padding:5px;
  text-align: center;
  background-color: ${props=>getRandomHexColor()};
`;

const LabelSpan = styled.span`
    color: #fff;
`;

const PercentageSpan = styled.span`
  font-weight: bold;
  color: #fff;
`;

export {
  TitleH2,
  StatisticsSection,
  StatlistUl,
  ItemLi,
  LabelSpan,
  PercentageSpan,
};