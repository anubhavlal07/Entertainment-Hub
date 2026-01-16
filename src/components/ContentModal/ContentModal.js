import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import YouTubeIcon from "@mui/icons-material/YouTube";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import Carousel from "../Carousel/Carousel";
import "./ContentModal.css";
import { TMDB_API_KEY } from "../../config/api";


const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledBackdrop = styled(Backdrop)({
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const ModalPaper = styled("div")(({ theme }) => ({
  width: "85%",
  height: "85%",
  /* Glassmorphism effect */
  background: "rgba(37, 36, 36, 0.85)",
  backdropFilter: "blur(30px) saturate(180%)",
  WebkitBackdropFilter: "blur(30px) saturate(180%)",
  border: "1px solid rgba(5, 144, 193, 0.5)",
  borderRadius: 15,
  color: "white",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5), 0 0 40px rgba(5, 144, 193, 0.3)",
  padding: theme.spacing(1, 1, 3),
  position: "absolute",
}));


export default function TransitionsModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${TMDB_API_KEY}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', outline: 'none', width: '100%', height: '100%' }}>
            {content && (
              <ModalPaper>
                <div className="ContentModal">
                  <img
                    src={
                      content.poster_path
                        ? `${img_500}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.name || content.title}
                    className="ContentModal__portrait"
                  />
                  <img
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className="ContentModal__landscape"
                  />
                  <br />
                  <br />
                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                    <br />
                    <span className="ContentModal__description">
                      {content.overview}
                    </span>
                    <br />
                    <div>
                      <Carousel id={id} media_type={media_type} />
                    </div>

                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="secondary"
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Trailer
                    </Button>
                  </div>
                </div>
              </ModalPaper>
            )}
          </div>
        </Fade>
      </StyledModal>
    </>
  );
}
