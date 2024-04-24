import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className={css.list}>
      {images.map((el) => {
        return (
          <li key={el.id}>
            <ImageCard {...el} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
