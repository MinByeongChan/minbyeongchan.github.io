import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { commentStart } from '../../../modules/comment';
import { closeModal } from '../../../modules/modal';
import { ModalDeleteContainer } from '../../../styles/modal/CommentDeleteModal';
import {
  ContentWrapper,
  ModalBottomButton,
  ModalBottomCreateButton,
  ModalBottomWrapper,
  ModalCloseButton,
  ModalContent,
  ModalInput,
  ModalTopWrapper,
} from '../../../styles/modal/CommentUpdateModal';
import { isEmpty } from '../../../utils/Utility';
import TextDefault from '../../ui/TextDefault';

const CommentDeleteModal = () => {
  const { modalProps } = useSelector((state: any) => ({
    modalProps: state.modal.modalProps,
  }));
  const [password, onChangePassword] = useInput('');
  // const [secret, setSecret] = useState(false);
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(closeModal());
  };
  const onClickDelete = () => {
    const id = modalProps.id;
    if (isEmpty(id)) {
      alert('ID를 찾지 못했습니다.');
      onClickClose();
      return;
    }

    const result = confirm(`정말 삭제하시겠습니까?`);
    if (result) {
      dispatch(
        commentStart({
          url: '004',
          payload: {
            id: id,
            password: password,
          },
        }),
      );
    }
  };

  return (
    <ModalDeleteContainer>
      {/* Modal Top - 시작 */}
      <ModalTopWrapper>
        <TextDefault size="xg" weight="bold">
          Delete Comment
        </TextDefault>
        <ModalCloseButton onClick={onClickClose}>
          <FontAwesomeIcon icon={faTimes} />
        </ModalCloseButton>
      </ModalTopWrapper>
      {/* Modal Top - 끝 */}

      {/* Modal Content - 시작 */}
      <ModalContent>
        <ContentWrapper>
          <TextDefault size="sm" lineHeight="" color="gray2">
            Pawssword
          </TextDefault>
          <ModalInput
            type="password"
            placeholder={'암호를 입력해주세요'}
            value={password}
            onChange={onChangePassword}
          />
        </ContentWrapper>
      </ModalContent>
      {/* Modal Content - 끝 */}

      {/* Modal Bottom - 시작 */}
      <ModalBottomWrapper>
        <ModalBottomButton onClick={onClickClose}>Close</ModalBottomButton>
        <ModalBottomCreateButton onClick={onClickDelete}>Delete</ModalBottomCreateButton>
      </ModalBottomWrapper>
      {/* Modal Bottom - 끝 */}
    </ModalDeleteContainer>
  );
};

export default CommentDeleteModal;
