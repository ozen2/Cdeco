import PropTypes from "prop-types";

export default function InputAdd({
  id,
  label,
  name,
  value,
  type,
  handleChange,
  placeholder,
  accept,
})
{
  return (
    <label
      className="flex flex-col gap-2 text-[var(--tertiary-color)] font-medium"
      htmlFor={id}
    >
      {label}
      {type === "textarea" ? (
        <textarea
          className="h-64 border-2 w-56 md:w-96 rounded-md outline-[var(--primary-color)] px-2 py-2 text-[var(--black-color)]"
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="h-12 border-2 w-56 md:w-96 outline-[var(--primary-color)] rounded-lg px-2 text-[var(--black-color)]"
          id={id}
          name={name}
          type={type}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          accept={accept}
        />
      )}
    </label>
  );
}
InputAdd.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOf(["string", "number", "file"]).isRequired,
  type: PropTypes.oneOf(["text", "number", "textarea", "file"]).isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  accept: PropTypes.string,
};

InputAdd.defaultProps = {
  accept: "",
};
