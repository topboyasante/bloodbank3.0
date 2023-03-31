const InputForm = ({value,type,handleChange,labelText,name}) => {
    return ( 
        <div className="mb-3">
        <label htmlFor={name} className="font-normal text-sm capitalize">{labelText || name}</label>
        <br />
        <input
        name={name}
          value={value}
          onChange={handleChange}
          type={type}
          className="outline-none border-2 border-input-color rounded-lg h-[45.47px] w-[300px] lg:w-[365px] p-2"
          required
        />
      </div>
     );
}
 
export default InputForm;