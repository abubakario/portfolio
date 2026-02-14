import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 0 0 15px rgba(0, 224, 255, 0.6);
`;

export const Desc = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

export const SkillColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  align-items: start;
  @media (max-width: 960px) { grid-template-columns: 1fr; gap: 60px; }
`;

export const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #945DD6;
  text-transform: uppercase;
  border: 1px solid rgba(148, 93, 214, 0.5);
  padding: 6px 20px;
  border-radius: 50px;
  background: rgba(148, 93, 214, 0.1);
`;

/* THE ROW CONTROLLER */
export const HexRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* Pulls every row after the first one up into the valley above */
  margin-top: -32px; 
  &:first-of-type { margin-top: 0; }

  /* Catch the transient prop to prevent DOM warnings */
  ${({ $isSingle }) => $isSingle && `
      justify-content: center;
  `}
`;

export const HexCard = styled.div`
  position: relative;
  width: 140px;
  height: 162px;
  background: rgba(17, 25, 40, 0.4); 
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  /* Pulls the 'Double' row icons closer together */
  margin: -3px 3px; 
  border: 1px solid rgba(0, 224, 255, 0.3);

  &:hover {
    background: rgba(0, 224, 255, 0.2);
    transform: scale(1.1) translateY(-5px);
    z-index: 100;
    box-shadow: 0 0 30px rgba(0, 224, 255, 0.5);
  }
`;

export const HexImage = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: 5px;
`;

export const HexName = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  text-transform: uppercase;
`;

export const CategoryTag = styled.div`
  font-size: 10px;
  color: #945DD6;
`;