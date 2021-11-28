import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
 

const Container = styled.div`
display: flex;
 
`;


const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;


const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;


`;

const Center = styled.div`
flex: 1;
padding: 20px;
 
`;

const Title = styled.h3`
margin-bottom: 30px;

`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
 

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`;


 const Payment = styled.img`
 width: 50px;

 `


const Footer = () => {
    return (
        <Container>
            <Left>
              <Logo>CLOTHES STORE.</Logo>
              <Desc>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt quod cum incidunt culpa soluta. 
                  Saepe aspernatur nam ut delectus quidem nulla, blanditiis, voluptates doloribus, obcaecati explicabo esse. Quia, fugiat!
              </Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999">
                      <Facebook/>
                  </SocialIcon >
                  <SocialIcon color="E4405F">
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter/>
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <Pinterest/>
                  </SocialIcon>
                
              </SocialContainer>
            </Left>


            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>


            <Right>

         <Title>Contact</Title>
         <ContactItem>
             <Room styled={{marginRight:"10px"}}/>
            622 Dixie Path, South Tobinchester 495847
         </ContactItem>
         <ContactItem>
             <Phone styled={{marginRight:"10px"}}/>
            +1 234 45 456
         </ContactItem>
         <ContactItem>
             <MailOutline styled={{marginRight:"10px"}}/>
            contact@clothes.store
         </ContactItem>
         <Payment src =""/>
            </Right>
        </Container>
    )
}

export default Footer