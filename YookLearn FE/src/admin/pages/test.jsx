import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [agama, setAgama] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <><div className="mb-4">
          <label
              htmlFor="agama"
              className="block text-gray-700 font-bold mb-2"
          >
              Agama
          </label>
          <input
              type="text"
              id="agama"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Agama"
              value={agama}
              onChange={(e) => setAgama(e.target.value)} />
      </div><div>
              <label htmlFor="options">Pilih opsi:</label>
              <select id="options" value={selectedOption} onChange={handleChange}>
                  <option value="">Pilih...</option>
                  <option value="option1">Opsi 1</option>
                  <option value="option2">Opsi 2</option>
                  <option value="option3">Opsi 3</option>
              </select>
              <p>Anda memilih: {selectedOption}</p>
          </div></>
    
  );
};

export default Dropdown;
