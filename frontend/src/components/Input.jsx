import PropTypes from "prop-types";

export default function Input({
  labelName,
  name,
  value,
  type,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {labelName}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  labelName: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};
