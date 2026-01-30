import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

const AddItem = () => {
  const handleOpenModal = () => {};
  return (
    <div className="add-card item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 items-center justify-center">
        <button
          className="flex items-center gap-2 group"
          onClick={handleOpenModal}
        >
          <IoAddCircleOutline className="w-8 h-8 text-gray-400 font-light group-hover:text-gray-200" />
          <span className="text-gray-400 group-hover:text-gray-200">
            할 일 추가하기
          </span>
        </button>
      </div>
    </div>
  );
};

export default AddItem;
