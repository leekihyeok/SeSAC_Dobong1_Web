export default function PhotosPage({ photos }) {
  return (
    <main className="PhotoPage">
      <p>여기는 상품 목록 with photo</p>
      {photos.map((photo) => {
        return (
          <ul key={photo.id}>
            <li>{photo.id}</li>
            <li>{photo.title}</li>
            <li>
              <img src={photo.url} alt="" />
            </li>
          </ul>
        );
      })}
    </main>
  );
}
