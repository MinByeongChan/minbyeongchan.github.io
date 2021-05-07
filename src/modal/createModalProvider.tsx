// import React, { PureComponent } from 'react';

// import { Provider } from './ModalContext';
// export { Consumer } from './ModalContext';
// import Modal from '../components/modal/Modal';

// export default function createModalProvider(ContentMap = {}) {
//   return class ModalProvider extends PureComponent {
//     constructor(props: any) {
//       super(props);

//       this.state = { showModal: false };
//       this.handleClose = this.handleClose.bind(this);
//       this.handleOpen = this.handleOpen.bind(this);
//     }

//     handleOpen(contentId: any, modalProps: any) {
//       this.contentId = contentId;
//       this.modalProps = modalProps;
//       this.setState({ showModal: true });
//     }

//     handleClose() {
//       this.setState({ showModal: false });
//     }

//     render() {
//       const { children } = this.props;
//       const { showModal } = this.state;
//       const ModalContent = CONTENT_MAP[this.contentId];

//       return (
//         <Provider
//           value={{
//             openModal: this.handleOpen,
//             closeModal: this.handleClose,
//           }}
//         >
//           {children}
//           {showModal && ModalContent && (
//             <Modal>
//               {/* <ModalContent></ModalContent> */}
//               <ModalContent {...this.modalProps} />
//             </Modal>
//           )}
//         </Provider>
//       );
//     }
//   };
// }
