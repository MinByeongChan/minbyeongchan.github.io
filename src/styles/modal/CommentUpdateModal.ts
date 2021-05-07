import styled from '@emotion/styled';
import { color, fontSize } from '../../utils/StyleTheme';

export const ModalContainer = styled.div`
  min-width: 468px;
  height: auto;
  min-height: 300px;
  background-color: ${`#fafafb`};
  border-radius: 8px;
  padding: 20px 35px;
  box-shadow: 0px 0px 20px 10px rgb(0 0 0 / 60%);
  @media (min-width: 0px) and (max-width: 499px) {
    min-width: 300px;
  }
`;
export const ModalTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ModalCloseButton = styled.span`
  width: ${fontSize.md};
  height: ${fontSize.md};
  cursor: pointer;
  color: ${color.gray};
  transition: 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
`;
export const ModalInput = styled.input`
  width: 100%;
  padding: 8px 11px;
  font-size: ${fontSize.md};
  color: ${color.black};
  background-color: inherit;
  border: none;
  margin-top: 5px;
`;
export const ModalContent = styled.div`
  margin-top: 30px;
`;
export const ContentWrapper = styled.div`
  margin-top: 15px;
`;
export const ModalBottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 2px solid ${color.gray};
  margin-top: 30px;
  padding-top: 13px;
`;

export const ModalBottomButton = styled.button`
  width: 80px;
  height: 26px;
  margin-left: 10px;
  font-size: ${fontSize.md};
  color: ${color.gray2};
  background-color: inherit;
  border: none;
  border-radius: 5px;
  transition: 0.3s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ModalBottomCreateButton = styled.button`
  width: 90px;
  height: 30px;
  margin-left: 10px;
  font-size: ${fontSize.md};
  color: ${color.white};
  background-color: ${color.orange};
  border: none;
  border-radius: 5px;
  transition: 0.3s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
