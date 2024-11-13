import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface props {
  text: string;
}

const SingleTodo: React.FC<props> = ({ text }) => {
  return (
    <>
      <form action="" className="todos__single">
        {/* <input type="todos__single--text" /> */}
        {/* <s></s> */}
        <span>{text}</span>
        <div>
          <span className="icon">
            <AiFillEdit />
          </span>
          <span className="icon">
            <AiFillDelete />
          </span>
          <span className="icon">
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
