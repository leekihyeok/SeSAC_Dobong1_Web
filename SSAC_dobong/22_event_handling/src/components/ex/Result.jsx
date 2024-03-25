export default function Result(props) {
  const { fruit, background, color, content } = props.data;
  console.log(props);
  return (
    <div>
      <img src={`/img/${fruit}.jpg`} alt="과일사진" width={100} height={100} />
      <div
        style={{
          backgroundColor: background,
          color: color,
          padding: "10px",
          margin: "10px",
          textAlign: "center",
        }}
      >
        {content}
      </div>
    </div>
  );
}
