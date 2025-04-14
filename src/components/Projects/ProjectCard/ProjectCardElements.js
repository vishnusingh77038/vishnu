import styled from "@emotion/styled";

export const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 992px) {
    
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

    @media (min-width: 992px) {
      border-radius: 10px 0 0 10px;
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }

  @media (min-width: 992px) {
    align-items: flex-start;
   
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;
