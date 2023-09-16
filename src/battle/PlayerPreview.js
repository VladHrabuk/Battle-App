const PlayerPreview = ({
  avatar,
  name,
  location,
  company,
  followers,
  following,
  publicRepos,
  blog,
  children,
}) => {
  return (
    <section>
      <section className="column">
        <img className="avatar" src={avatar} alt="Avatar"></img>
        <h2 className="username">{name}</h2>
        <ul>
          <li>
            <h3 className="username">{location}</h3>
          </li>
          <li>
            <h3 className="username">{company}</h3>
          </li>
          <li>
            <h3 className="username">{followers}</h3>
          </li>
          <li>
            <h3 className="username">{following}</h3>
          </li>
          <li>
            <h3 className="username">{publicRepos}</h3>
          </li>
          <li>
            <h3 className="username">{blog}</h3>
          </li>
        </ul>
      </section>
      {children}
    </section>
  );
};

export default PlayerPreview;
