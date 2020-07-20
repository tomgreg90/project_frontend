import React, { useState } from "react";
import MusicianList from "./MusicianList";

export default function MusicianSearch() {
  const [instrument, setInstrument] = useState("");
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>Type the name of the instrument you are searching for!</h3>
      <label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(true);
            setValue("");
          }}
        >
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setInstrument(e.target.value);
              setValue(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </label>{" "}
      {search && <MusicianList instrument={instrument} />}
    </div>
  );
}
