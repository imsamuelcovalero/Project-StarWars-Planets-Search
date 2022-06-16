import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
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
    margin-bottom: 10px;
    margin-top: 10px;
    // border-bottom: 1px;
    border:1.8px solid #FDCA40;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-top: none;
    border-left: none;
    background: transparent;
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
    // height: 95%;
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
        // border-top: none;
        // border-left: none;
      }
    }
    th {
      color: #F4442E;
      background-color: #2B2D42;
      align-items: center;
      text-align: center;
    }
  }
`;

export const FilterData = styled.div`
  margin-bottom: 15px;
  align-self: flex-start;
`;

export const SectionTable = styled.section`
  width: 100%;
  height: 430px;
  overflow: scroll;
  // overflow-y: scroll;
`;
