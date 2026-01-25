import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { TMDB_API_KEY } from "../../config/api";
const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrending = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}&page=${page}`
      );
      setContent(data.results);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <div className="trending">
        {content && content.length > 0 ? (
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))
        ) : (
          !isLoading && (
            <h2 style={{ textAlign: "center", marginTop: "50px", color: "#fff" }}>
              No Trending Content Found
            </h2>
          )
        )}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
