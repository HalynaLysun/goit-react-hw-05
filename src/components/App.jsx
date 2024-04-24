import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import fetchImages from "../images-api";
import { useState, useEffect } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const handleChange = (newInputValue) => {
    setInputValue(newInputValue);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function fetchImagesGallery() {
      try {
        if (!inputValue) {
          return;
        }
        setLoading(true);
        const data = await fetchImages(inputValue, page);
        const newImages = data.results;
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImagesGallery();
  }, [inputValue, page]);

  const handleModal = (imageUrl) => {
    setModal(!modal);
    setImageModal(imageUrl);
  };

  return (
    <>
      <SearchBar onSubmit={handleChange} />
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleModal} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal isOpen={modal} onClick={handleModal} imageUrl={imageModal} />
    </>
  );
}
