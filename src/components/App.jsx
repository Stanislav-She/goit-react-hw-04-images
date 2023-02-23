import { useState } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchValue, setSearhValue] = useState('wave');
  const [currentImage, setCurrentImage] = useState(null);

  const toggleModal = event => {
    setIsOpenModal(!isOpenModal);
  };

  const openModal = largeImage => {
    setCurrentImage(largeImage);
    setIsOpenModal(true);
  };

  const handleSubmit = searchValue => {
    setSearhValue({ searchValue });
  };

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery value={searchValue} onClick={openModal} />
      {isOpenModal && (
        <Modal onClose={toggleModal} currentImage={currentImage} />
      )}
    </main>
  );
};

/////////////////////////// BEFORE CHANGES ///////////////////////////
// import { Component } from 'react';
// import { Searchbar } from './Searchbar';
// import { ImageGallery } from './ImageGallery';
// import { Modal } from './Modal/Modal';

// export class App extends Component {
//   state = {
//     isOpenModal: false,
//     searchValue: 'wave',
//     currentImage: null,
//   };

//   toggleModal = event => {
//     this.setState(prevState => ({
//       isOpenModal: !prevState.isOpenModal,
//     }));
//   };

//   openModal = largeImage => {
//     this.setState({
//       currentImage: largeImage,
//       isOpenModal: true,
//     });
//   };

//   handleSubmit = searchValue => {
//     this.setState({ searchValue });
//   };

//   render() {
//     const { isOpenModal, currentImage } = this.state;
//     return (
//       <main>
//         <Searchbar onSubmit={this.handleSubmit} />
//         <ImageGallery value={this.state.searchValue} onClick={this.openModal} />
//         {isOpenModal && (
//           <Modal onClose={this.toggleModal} currentImage={currentImage} />
//         )}
//       </main>
//     );
//   }
// }
