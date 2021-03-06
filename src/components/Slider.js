import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react";
import styled from "styled-components";
 
 
 
 
 const Container = styled.div`
 width:100%;
 height:100vh;
 display: flex;
 position: relative;
 overflow: hidden;
 margin: 30px;
 
 `;


 const Arrow = styled.div`
 width: 50px;
 height: 50px;
 background-color: white;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 top: 0;
 bottom: 0;
 left: ${props => props.direction === "left" && "10px"};
 right: ${props => props.direction === "right" && "10px"};
 margin: auto;
 cursor: pointer;
 opacity: 0.5;
 z-index: 2;
 `;

 const Wrapper = styled.div`  
 height: 100%;
 display: flex;
 transition: all 1.5s ease;
 transform:translateX(${props=> props.slideIndex * -100}vw);

 `;

 const Slide = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
//  background-color: #${props=>props.bg}
 `;
 const ImgContainer = styled.div`
 height: 85%;
  flex: 1;
 `;
 const InfoContainer = styled.div`
 flex: 1;
 padding: 50px;

 `;

 const Image = styled.img`
 
 height: 70%;
 margin: 50px;
 `;


const Title = styled.h1`
font-size: 60px;
text-align: center;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
text-align: center;
`;
 

const   sliderItems = [
    {
        
        img: "https://blog.luxxy.com/wp-content/uploads/2018/04/devushka-shatenka-temnye-ochki-2527.jpg",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
        
      },
    {
       
        img: "https://i.ytimg.com/vi/3R0Bn4bEmGw/maxresdefault.jpg",
        title: "WINTER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
       
    },
    {
        
        img: "https://ramki-vsem.ru/fonypink/18.jpg",
        title: "POPULAR SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
    }
        
]

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
const handleClick = (direction) => {
    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
}
 



    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
             <Wrapper slideIndex={slideIndex}>
                 { sliderItems.map(item=>(
                 <Slide>
            <ImgContainer>
            <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                
            </InfoContainer>
               </Slide>

                 ))}
                
   
                
            </Wrapper>

            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider