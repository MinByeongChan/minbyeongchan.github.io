import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { commentStart } from '../../../modules/comment';
import { closeModal } from '../../../modules/modal';
import {
  ModalBottomWrapper,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalBottomButton,
  ModalBottomCreateButton,
  ModalInput,
  ModalTopWrapper,
  ContentWrapper,
} from '../../../styles/modal/CommentUpdateModal';
import TextDefault from '../../ui/TextDefault';

const CommentUpdateModal = () => {
  const { content } = useSelector((state: any) => ({
    content: state.comments.selected,
  }));
  const [message, onChangeMessage] = useInput(content.message);
  const [name, onChangeName] = useInput(content.name);
  const [password, onChangePassword] = useInput('');
  // const [secret, setSecret] = useState(content.secret);
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(closeModal());
  };

  const onClickUpdate = () => {
    const param = {
      url: '003',
      payload: {
        id: content.id,
        name: name,
        message: message,
        password: password,
      },
    };
    console.log('param', param);

    dispatch(commentStart(param));
  };

  return (
    <ModalContainer>
      {/* Modal Top - 시작 */}
      <ModalTopWrapper>
        <TextDefault size="xg" weight="bold">
          Update Comment
        </TextDefault>
        <ModalCloseButton onClick={onClickClose}>
          <FontAwesomeIcon icon={faTimes} />
        </ModalCloseButton>
      </ModalTopWrapper>
      {/* Modal Top - 끝 */}

      <ModalContent>
        <ContentWrapper>
          <TextDefault size="sm" color="gray2">
            Comment
          </TextDefault>
          <ModalInput
            type="text"
            placeholder={'댓글을 남겨주세요'}
            value={message}
            onChange={onChangeMessage}
          />
        </ContentWrapper>

        <ContentWrapper>
          <TextDefault size="sm" color="gray2">
            Name
          </TextDefault>
          <ModalInput
            type="text"
            placeholder={'저장할 이름을 입력해주세요'}
            value={name}
            onChange={onChangeName}
          />
        </ContentWrapper>

        <ContentWrapper>
          <div>
            <TextDefault size="sm" lineHeight="" color="gray2">
              Pawssword
            </TextDefault>
            <TextDefault size="xs" color="gray2">
              (선택)
            </TextDefault>
          </div>
          <ModalInput
            type="password"
            placeholder={'암호는 선택사항이에요.'}
            value={password}
            onChange={onChangePassword}
          />
        </ContentWrapper>
      </ModalContent>

      <ModalBottomWrapper>
        <ModalBottomButton onClick={onClickClose}>Close</ModalBottomButton>
        <ModalBottomCreateButton onClick={onClickUpdate}>Update</ModalBottomCreateButton>
      </ModalBottomWrapper>
    </ModalContainer>
  );
};

export default CommentUpdateModal;
