import styled from 'styled-components';

export const FiltersDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #F4442E;
  margin-bottom: 15px;
  background-color: rgba(43, 45, 66, 0.4);
  border-radius: 10px;
  padding: 5px;
  #radio {
    display: flex;
    flex-direction: column;
  }
  form {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    color: #F4442E;
    font-weight: bold;
    button {
      font-weight: bold;
      padding: 5px;
      background: transparent;
      color: #F4442E;
      cursor: pointer;
      height: 35px;
      border: 2px solid #FDCA40;
      border-radius: 3px;
    }
    select {
      font-weight: bold;
      color: #F4442E;
      background: transparent;
      cursor: pointer;
      height: 25px;
      border-top: none;
      border-left: none;
      &:focus {
        outline: none;
        border:2px solid #FDCA40;
        border-radius:5px;
      }
    }
    label {
      cursor: pointer;
    }
    #input-numbers {
      color: #F4442E;
      border-top: none;
      border-left: none;
      background: transparent;
      width: 50px;
      height: 20px;
      &:focus {
        outline: none;
        border-color: #FDCA40;
      }
    }
    #select-orderSortAsc {
      cursor: pointer;
    }
    #select-orderSortDesc {
      cursor: pointer;
    }
  }
`;

export default FiltersDiv;
