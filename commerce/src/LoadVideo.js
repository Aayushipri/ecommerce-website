const LoadVideo = ({ item }) => {
  return (
    <div>
      <video width={300} height={400} autoPlay muted>
        <source src={item.source} type="video/mp4" />
      </video>
      {item.card}
    </div>
  );
};

export default LoadVideo;
