const Empty = ({ title, message }) => {
  return (
    <div className="empty">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Empty;
