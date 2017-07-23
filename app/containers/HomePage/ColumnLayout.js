import styled from 'styled-components';

const ColumnLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  > section:first-of-type {
    max-width: 300px;
    max-height: 500px;
  }
  > section:not(:first-of-type) {
    flex: 1;
  }
`;

export default ColumnLayout;
