import { useState } from "react";

function WritingItem({ writingData, data, setWritingData, buttonStyle, dataId }) {
  let [isModifying, setIsModifying] = useState(false);
  let [inputName, setInputName] = useState("");

  const itemStyle = (finished) => {
    return {
      textDecoration: finished ? "line-through" : "none",
      borderBottom: "1px solid black",
      padding: "5px",
      minHeight: "35px",
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //여기서 저장하는 과정을 작성

    //1. 저장하려는 텍스트를 불러와야한다.
    //2. 텍스트를 저장하려는 todoData 대상에 itemName에 저장한다.
    //찾는기준 ?유니크한 id를 기준으로 writingData에서 찾아서 바꾸면~
    let temp = writingData.map((tempData) => {
      if (tempData.writingId === dataId) {
        tempData.writingItemName = inputName;
      }
      return tempData;
    });
    setWritingData(temp);
    //3. 저장 다했으면, 수정화면X 목록보이는 화면 전환
    setIsModifying(false);
    setInputName("");
  };

  if (isModifying === true) {
    return (
      <div style={itemStyle(false)} className="WritingItem">
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <input
            type="text"
            value={inputName}
            onChange={(e) => {
              console.log(e.target.value);
              setInputName(e.target.value);
            }}
            autoFocus
          ></input>
          <button
            type="button"
            style={buttonStyle}
            onClick={() => {
              setIsModifying(false);
            }}
          >
            취소
          </button>
          <button type="submit" style={buttonStyle} onClick={
            (e) => { handleSubmit(e)}
            }>
            저장
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div key={dataId} style={itemStyle(data.finished)} className="WritingItem">
        <p>
          <input
            type="checkbox"
            defaultChecked={data.finished}
            onChange={() => {
              let temp = writingData.map((tempData) => {
                if (tempData.writingId === data.writingId) {
                  //if문안에 들어오면 전체 리스트 중에서 현재 선택된 id와 동일한 경우
                  tempData.finished = !tempData.finished;
                }
                return tempData;
              });
              setWritingData(temp);
            }}
          />
          {data.writingItemName}
          <button
            style={buttonStyle}
            onClick={() => {
              let temp = [...writingData];
              temp = temp.filter((tempData) => {
                return tempData.writingId !== data.writingId;
              });
              setWritingData(temp);
            }}
          >
            삭제
          </button>
          <button
            style={buttonStyle}
            onClick={() => {
              setInputName(data.writingItemName);
              setIsModifying(true);
            }}
          >
            수정
          </button>
        </p>
      </div>
    );
  }
}

export default WritingItem;