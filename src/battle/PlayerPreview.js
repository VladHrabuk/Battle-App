const PlayerPreview = ({ avatar, name, children }) => {
  return (
    <section>
      <section className="column">
        <img className="avatar" src={avatar} alt="Avatar"></img>
        <h2 className="username">{name}</h2>
      </section>
      {children}
    </section>
  );
};

export default PlayerPreview;
