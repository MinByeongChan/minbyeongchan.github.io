// 액션 타입
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const initState = {
  contentId: '',
  showModal: false,
  modalProps: {},
};

// // 액션 생성 함수
export const openModal = (contentId: string, modalProps: any) => ({
  type: OPEN_MODAL,
  payload: { contentId, modalProps },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

/**
 * @function modal
 * @param {state action}
 * @description 모달 state 관리
 */
export default function modal(state = initState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_MODAL:
      return { ...payload, showModal: true };

    case CLOSE_MODAL:
      return { ...initState, showModal: false };

    default:
      return state;
  }
}
