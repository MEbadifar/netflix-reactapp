import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
    const video="https://cdn.pixabay.com/vimeo/830461265/fogging-164360.mp4?width=1280&hash=f05a9cb58caeefbe7afe937ce7f9a00784d5f219"
  return (
    <div className="watch">
          <div className="back">
              <ArrowBackOutlined />
              Home
        </div>
        <video  className="video" autoPlay Progress controls src={video}/>
    </div>
  )
}

export default Watch