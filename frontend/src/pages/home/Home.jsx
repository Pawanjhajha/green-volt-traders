import HomePageProductCard from "../../componets/cards/HomePageProductCart/HomePageProductCard";
import Slider from "../../componets/Carousel/Slider";
import Header from "../../componets/Header/Header";

function Home(){
    return(
        <>
        <Header></Header>
        <Slider></Slider>
        <HomePageProductCard></HomePageProductCard>
        </>
    )
}
export default Home;