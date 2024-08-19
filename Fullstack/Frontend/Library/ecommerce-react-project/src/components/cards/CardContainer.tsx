import { Grid } from "@mui/material"
import { MyCards } from "./MyCards"
import img1 from '../../static/images/4k-minimalist-orange-aesthetic-forest-4dy7tgghgni5mwwc.jpg'
import img2 from '../../static/images/dark-mountain-4k-3vxidfa2y5t5uk4m.jpg'
import img3 from '../../static/images/wp5213206-movie-wallpaper-hd.jpg'
import img4 from '../../static/images/wp8303664-spider-man-portrait-wallpapers.jpg'


export const CardContainer=()=>{
    return <>
    
    
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
    < MyCards img={img1} />
    < MyCards img={img2} />
    < MyCards img={img3} />
    < MyCards img={img4} />

</Grid>

    
    
    
    
    </>
}