import {
  TitleH2,
  StatisticsSection,
  StatlistUl,
  ItemLi,
  LabelSpan,
  PercentageSpan,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>     
      {title && <TitleH2>{title}</TitleH2>}
      <StatlistUl>
        {stats.map(el => {
          return (
            <ItemLi key={el.id}>
              <LabelSpan>{el.label}</LabelSpan>
              <PercentageSpan>{el.percentage}%</PercentageSpan>
            </ItemLi>
          );
        })}
      </StatlistUl>
    </StatisticsSection>
  );
};
