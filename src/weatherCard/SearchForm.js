import { useState } from "react";

const SearchForm = ({ city, setCity, handleSubmit }) => {
  const [style, setStyl] = useState(false)
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={!style ? "d-none":"d-block"} >
        <p>Type your own city name for example London, Delhi, Dhaka, etc.</p>
      </div>
      <div className="form-group">
        <input
          required
          onMouseEnter={() => setStyl(!false)}
          className="form-control"
          defaultValue={city}
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary outline-none float-right"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
