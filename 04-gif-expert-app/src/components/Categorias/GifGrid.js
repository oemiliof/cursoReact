import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../../hooks/useFetchGifs";
// import { getGifs } from '../../helpers/getGifs.js';
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])

  const { data, loading } = useFetchGifs(category);

  // console.log(data);
  // console.log(loading);
  // useEffect(() => {
  //     getGifs(category)
  //         .then(
  //             resp => {
  //                 setImages(resp);
  //             }
  //         );
  // }, [category]);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p>Loading</p>}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
