import { Carousel } from "react-bootstrap"
import img1 from '../../static/images/4k-minimalist-orange-aesthetic-forest-4dy7tgghgni5mwwc.jpg'
import img2 from '../../static/images/dark-mountain-4k-3vxidfa2y5t5uk4m.jpg'
import img3 from '../../static/images/wp5213206-movie-wallpaper-hd.jpg'

export const Mycarousal=()=>{
    return <>
     <Carousel>
      <Carousel.Item>
        < img height="400px" width="100%" src={img1}/>
        <Carousel.Caption>
          <h3>Sunset </h3>
          <p>😊</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      < img height="400px" width="100%" src={img2}/>
        <Carousel.Caption>
          <h3>Night Mountain </h3>
          <p>😒</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      < img height="400px" width="100%" src={img3}/>
        <Carousel.Caption>
          <h3>Wakanda Forever</h3>
          <p>
           👌
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}