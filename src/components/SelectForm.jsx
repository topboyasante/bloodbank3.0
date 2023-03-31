const SelectForm = ({labelText, value, handleChange, optionValue,name}) => {
    return ( 
        <div className="mb-3">
        <label htmlFor={name} className="font-normal text-sm">{labelText}</label>
        <br />
        <select
          value={value}
          name={name}
          onChange={handleChange}
          className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[300px] p-2 focus:border-black"
          required
        >
          <option value="Select Blood Type">{name}</option>
          <option value={optionValue}>{optionValue}</option>
          {/* <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB">AB-</option> */}
        </select>
      </div>
     );
}
 
export default SelectForm;