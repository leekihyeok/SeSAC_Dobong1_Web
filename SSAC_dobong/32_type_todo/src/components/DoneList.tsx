import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/RootState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const DoneList: React.FC = () => {
  const list = useSelector((state: RootState) => state.todo.list);
  const doneList = list.filter((li) => li.done === true);

  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      {doneList.length === 0 ? (
        <p>다한게 없어요..</p>
      ) : (
        <ul>
          {doneList.map((done) => {
            return (
              <li key={done.id}>
                <span>{done.text}</span>
                <span>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default DoneList;
