import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }
  .item {
    display: flex;
  }
  .type {
    min-width: 200px;
    display: inline-block;
  }
  .currency, .perDay {
    font-size: 10px;
    color: green;
  }
  .total {
    text-align: right;
  }

  @media (max-width: 768px) {
    .item {
      font-size: 12px;
    }
    .type {
      min-width: 120px;
    }
    .currency {
      display: none;
    }
  }
`;

export default Wrapper;
