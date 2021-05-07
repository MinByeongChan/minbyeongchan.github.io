import CommentDeleteModal from '../components/modal/modalContents/CommentDeleteModal';
import CommentUpdateModal from '../components/modal/modalContents/CommentUpdateModal';

export const COMMENT_UPDATE_MODAL = 'COMMENT_UPDATE_MODAL';
export const COMMENT_DELETE_MODAL = 'COMMENT_DELETE_MODAL';

export interface iContentMap {
  [key: string]: any;
}
export const CONTENT_MAP: iContentMap = {
  [COMMENT_UPDATE_MODAL]: CommentUpdateModal,
  [COMMENT_DELETE_MODAL]: CommentDeleteModal,
};
