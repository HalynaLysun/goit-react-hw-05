import css from "./ImageCard.module.css";
export default function ImageCard({
  alt_description,
  urls: { small, regular },
  onClick,
}) {
  return (
    <div>
      <img
        className={css.image}
        src={small}
        alt={alt_description}
        onClick={() => onClick(regular)}
      />
    </div>
  );
}
