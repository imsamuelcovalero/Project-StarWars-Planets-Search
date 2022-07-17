import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  position: relative;
  height: auto;
  width: 100vw;
  // overflow: scroll;
  align-items: center;
  justify-content: center;
`;

export const DivGlobal = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #input-filter-term {
    font-weight: bold;
    font-size: 1.2rem;
    color: #F4442E;
    height: 40px;
    margin-bottom: 30px;
    // margin-top: 10px;
    border:1.8px solid #FDCA40;
    border-radius:5px;
    box-shadow: -20px -20px 60px #4d627d,
                  20px 20px 60px #6984a9;
    border-top: none;
    border-left: none;
    background: transparent;
    transition: 0.3s;
    &:focus {
      outline: none;
      border:2.5px solid #FDCA40;
      border-radius:5px;
    }
    &:hover {
      border:2px solid #FDCA40;
      border-radius:5px;
    }
  }
  img {
    padding-left: 30px;
    width: 98%;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
  ul {
    list-style: none;
    font-weight: bold;
    color: #FDCA40;
    li {
      margin-bottom: 5px;
    }
    button {
      background: transparent;
      color: #F4442E;
      border: 2px solid #F4442E;
      border-radius: 3px;
      margin-left: 8px;
    }
  }
  table {
    font-weight: bold;
    color: #FDCA40;
    border-collapse: collapse;
    tbody {
      tr {
        outline: 1px solid #7F9C96;
        background-color: rgba(43, 45, 66, 1);
        text-align: center;
      }
    }
    th {
      color: #F4442E;
      background-color: rgba(43, 45, 66, 0.75);
      align-items: center;
      text-align: center;
    }
  }
`;

export const FilterData = styled.div`
  margin-bottom: 5px;
  align-self: flex-start;
  opacity: ${({ hasFilter }) => (hasFilter ? 1 : 0)};
  transition: ${({ hasFilter }) => (hasFilter && '.6s')};
`;

export const SectionTable = styled.section`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const CombineFIltersDiv = styled.div`
  width: 100%;
`;
