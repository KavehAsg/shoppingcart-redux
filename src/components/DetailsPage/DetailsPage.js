import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//api
import { fetchProductById } from "../../Services/API";

//components
import Loading from "../Loading/Loading";

//style
import styled from "./DetailsPage.module.scss";

const DetailsPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchProductById(params.id));
    }
    fetchData();
  }, [params]);

  return (
    <div className={styled.detailPage}>
      {!data.id && <Loading />}
      {!!data.id &&
        <div className={styled.container}>
          <div className={styled.imgContainer}>
            <img src={data.image} alt="pic"></img>
          </div>
          <div className={styled.detailsContainer}>
            <div className={styled.texts}>
              <h2 className={styled.title}>{data.title}</h2>
              <span className={styled.category}>{data.category}</span>
              <p className={styled.description}>{data.description}</p>
            </div>
            <div className={styled.lables}>
              <span>{data.rating.rate}/5 &#11088;</span>
              <span>{data.price}$</span>
              <span onClick={() => navigate(-1)}>back</span>
            </div>
          </div>
        </div>
      }
    </div>

  );
};

export default DetailsPage;
