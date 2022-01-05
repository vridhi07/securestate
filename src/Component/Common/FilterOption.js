const FilterOption = () => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 w-full">
        <select
          className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-600
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
          aria-label="search select "
        >
          <option defaultValue>Select Company...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOption;
