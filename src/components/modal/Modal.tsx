import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../modules/modal';
import { isEmpty } from '../../utils/Utility';

type IModalProps = {
  children: ReactNode;
};

const Modal: React.FC<IModalProps> = (props: IModalProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  // const animProps = useSpring({
  //   config: { duration: 200 },

  //   from: { opacity: 0, transform: "scale(0.7)" },
  //   to: { opacity: 1, transform: "scale(1)" },
  // });
  const onClickBackground = (e: any) => {
    e.preventDefault();
    const accessKey = e.target.dataset.key;
    if (!isEmpty(accessKey) && accessKey.indexOf('overlay') > -1) {
      dispatch(closeModal());
    }
  };

  return (
    <>
      {/* <ModalOverlay className="overlay" onClick={(e) => onClickBackground(e, props.bgClickdisable)}> */}
      <ModalOverlay data-key="overlay" onClick={onClickBackground}>
        <ModalWrapper>{children}</ModalWrapper>
      </ModalOverlay>
    </>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  width: calc(100vw);
  height: calc(100vh);
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1001;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1003;
`;

export default Modal;
