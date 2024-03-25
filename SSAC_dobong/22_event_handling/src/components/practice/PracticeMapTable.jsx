import { useState } from "react";

export default function PracticeMapTable() {
  const [list, setList] = useState([]);
  const [newList, selectList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputSearch, setSearch] = useState("");
  const [selectOption, setSelect] = useState("");
  const addInput = () => {
    if (inputName.trim().length == 0) return;
    const newInput = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: inputName,
      title: inputTitle,
    });

    setList(newInput);
    setInputName("");
    setInputTitle("");
  };
  const deleteInput = (id) => {
    console.log(id); // id 확인
    const newInput = list.filter((value) => value.id !== id);
    setList(newInput);
  };
  const selectInfo = () => {
    console.log(selectOption);
    console.log(inputSearch);
    if (!inputSearch.trim()) {
      return null;
    }
    if (selectOption === "name") {
      const searched = list.filter((item) =>
        item.name.toLowerCase().includes(inputSearch)
      );
      console.log(searched);
      selectList(searched);
    } else if (selectOption === "title") {
      const searched = list.filter((item) =>
        item.title.toLowerCase().includes(inputSearch)
      );
      selectList(searched);
    } else {
      return null;
    }
  };
  const showFull = () => {
    selectList(list);
  };
  return (
    <div>
      <h2>실습 3</h2>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        작성자:
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          value={inputName}
        />
        제목:
        <input
          type="text"
          placeholder="제목"
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          value={inputTitle}
        />
        <button onClick={addInput}>작성</button>
      </div>

      <div>
        <select
          name="info"
          id=""
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="name">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="검색"
          value={inputSearch}
        />
        <button onClick={selectInfo}>검색</button>
        <button onClick={showFull}>전체</button>
      </div>

      <table style={{ textAlign: "center" }}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {list?.map((el) => {
          return (
            <tr
              key={el.id}
              onDoubleClick={() => {
                deleteInput(el.id);
              }}
            >
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.name}</td>
            </tr>
          );
        })}
      </table>
      <br />
      <br />
      {newList.length === 0 ? (
        <h4>검색 결과가 없습니다.</h4>
      ) : (
        <div>
          <h4>검색결과</h4>
          <table style={{ textAlign: "center" }}>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
            {newList?.map((el) => {
              return (
                <tr
                  key={el.id}
                  onDoubleClick={() => {
                    deleteInput(el.id);
                  }}
                >
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.name}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}
