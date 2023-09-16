const ResultDetailInfo = ({
  location,
  company,
  followers,
  following,
  publicRepos,
  blog,
}) => {
  return (
    <ul>
      <li>
        <h3 className="username">{`Location: ${location}`}</h3>
      </li>
      <li>
        <h3 className="username">{`Company: ${company}`}</h3>
      </li>
      <li>
        <h3 className="username">{`Followers: ${followers}`}</h3>
      </li>
      <li>
        <h3 className="username">{`Following: ${following}`}</h3>
      </li>
      <li>
        <h3 className="username">{`Public Repos: ${publicRepos}`}</h3>
      </li>
      <li>
        <h3 className="username">{`Blog: ${blog}`}</h3>
      </li>
    </ul>
  );
};

export default ResultDetailInfo;
