import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.search.value.trim();
    const notify = () => toast("Please enter the text to search for images!");

    {
      query === "" && notify();
    }

    onSubmit(query);

    form.reset();
  }
  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <Toaster />
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
