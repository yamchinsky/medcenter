import styled from "styled-components";

export const MainStyled = styled.div`

    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: var(--dark-c);
  
  section:not(:last-of-type) {
    margin-bottom: 50px;
  }
  
  section {
    padding-top: 50px;
  }
  
  .header {
    padding: 0 0;
    position: fixed;
    background-color: #fff;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  
  .header .logo-wrap {
    width: 50px;
    height: 50px;
    margin: 10px auto;
  }
  
  .header .logo-img {
    width: 100%;
  }
  
  .header .nav-list {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  
  .header .nav-item {
    display: inline-block;
    margin-right: 5px;
  }
  
  .header .nav-link {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
  
  .header .nav-link:hover {
    color: var(--prim-c);
  }
  
  h1,
  h2,
  h3 {
    margin: 8px auto;
    text-align: center;
    color: black;
  }
  
  h1.heading {
    font-size: 40px;
    margin-bottom: 20px;
    padding: 0 20%;
  }
  
  h2.heading {
    font-size: 30px;
    margin-bottom: 20px;
  }
  
  p {
    margin: 8px auto;
    text-align: center;
  }
  
  .subheading {
    color: var(--dark-c);
    margin-bottom: 25px;
  }
  
  .about .subheading {
    color: var(--prim-c);
  }
  
  .home {
    background-size: cover;
    padding-top: 200px;
    margin-top: 118px;
    padding-bottom: 20px;
  }
  
  .home .text {
    max-width: 500px;
    text-align: left;
    color: #999;
  }
  
  .svg-icons {
    display: flex;
    justify-content: space-evenly;
    padding-top: 15px;
  }
  
  .svg-icon {
    border-radius: 50%;
    background-color: var(--prim-c);
    padding: 0.5rem;
    width: 3rem;
    height: 3rem;
    position: relative;
    border: 2px solid var(--prim-c);
  }
  
  .svg-icon:hover {
    background-color: white;
    border: 2px solid var(--prim-c);
  }
  
  .svg-icon i {
    font-size: 2rem;
    color: white;
    display: block;
    margin: 0 auto;
    text-align: center;
    line-height: 3rem;
  }
  
  .svg-icon:hover i {
    color: var(--prim-c);
  }
  
  .up-arrow-icon {
    font-size: 1rem;
    position: fixed;
    right: 10%;
    bottom: 3vh;
    vertical-align: middle;
  }
  
  .up-arrow-icon a {
    text-decoration: none;
  }
  
  .about .topic-heading b {
    color: var(--prim-c);
    margin-right: 1rem;
  }
  
  .about .about-img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  
  .services {
    // background-image: url('..//img/services_bg.jpg');
    padding-bottom: 15px;
  }
  
  .services .topic {
    padding: 2%;
    background-color: white;
    width: 90%;
    margin: 15px auto;
  }
  
  .services h3.topic-heading,
  .services p.topic-text {
    text-align: left;
  }
  
  .pricing .offer {
    padding-top: 24px;
    padding-bottom: 24px;
    width: 90%;
    margin: 15px auto;
  }
  
  .pricing .offer:nth-child(odd) {
    background-color: hsl(198, 97%, 70%);
    color: white;
  }
  
  .pricing .offer:nth-child(odd) .offer-heading {
    color: white;
  }
  
  .pricing .offer:nth-child(even) {
    color: var(--prim-c);
    background-color: #fff;
    border: 1px solid var(--prim-c);
  }
  
  .pricing .offer:nth-child(even) .offer-heading {
    color: var(--prim-c);
  }
  
  .pricing .offer-heading {
    font-size: 24px;
  }
  
  .pricing .offer-price {
    font-size: 64px;
    font-weight: bold;
  }
  
  .pricing .offer-quantity {
    font-style: italic;
  }
  
  .pricing .offer-item {
    text-align: center;
    list-style: none;
  }
  
  .pricing .offer-button {
    display: block;
    margin: 1rem auto;
    padding: 12px 32px;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 12px;
    border: 2px solid var(--prim-c);
    color: var(--prim-c);
    background-color: white;
  }
  
  .pricing .offer-button:hover {
    background-color: var(--prim-c);
    color: white;
    border: 2px solid var(--prim-c);
  }
  
  .pricing h3,
  .pricing p,
  .pricing li {
    margin-bottom: 1.5rem;
  }
  
  .pricing b {
    font-weight: bold;
    font-size: 32px;
  }
  
  .contact .contact-img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  
  .contact-form {
    margin-top: 40px;
  }
  
  .contact-form input {
    display: block;
    height: 32px;
    width: 80%;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  
  .contact-form input::placeholder {
    font-style: italic;
    font-size: 20px;
  }
  
  .contact-form input[type='date'] {
    font-size: 20px;
  }
  
  .contact .contact-submit {
    display: block;
    margin: 1rem auto;
    padding: 12px 24px;
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 12px;
    border: 2px solid var(--prim-c);
    background-color: var(--prim-c);
    color: white;
  }
  
  .contact .contact-submit:hover {
    background-color: white;
    color: var(--prim-c);
    border: 2px solid var(--prim-c);
  }
  
  .footer {
    height: 50px;
    background-color: var(--dark-c);
    color: white;
    font-size: 20px;
    text-align: center;
    padding-top: 25px;
  }
  
  @media (min-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .header .logo-wrap {
      margin: 24px;
    }
  
    .header .nav-item {
      padding-right: 1rem;
    }
  
    .home .heading,
    .home .text {
      width: 50%;
      text-align: left;
      margin-left: 20px;
      padding-left: 0;
    }
  
    .home .svg-icons {
      width: 380px;
    }
  
    .about {
      padding-left: 2%;
      padding-right: 2%;
    }
  
    .about .img-wrap {
      float: left;
      width: 48%;
    }
  
    .about .topics {
      float: right;
      width: 48%;
    }
  
    .about .heading,
    .about .subheading,
    .about .topic-heading,
    .about .topic-text {
      text-align: left;
    }
  
    .about .heading,
    .about .subheading {
      width: 50%;
      float: right;
    }
  
    .services {
      clear: both;
    }
  
    .services .topics {
      display: flex;
      flex-wrap: wrap;
    }
  
    .services .topic {
      width: 28%;
    }
  
    .pricing {
    //   background-image: url('..//img/pricing_bg.jpg');
      background-size: 100%;
    }
  
    .pricing .offers {
      display: flex;
      justify-content: space-around;
      margin-left: 2%;
      margin-right: 2%;
    }
  
    .pricing .offer {
      margin-left: 0;
      margin-right: 0;
      transition: all 0.3s ease-in-out;
      z-index: 0;
    }
  
    .pricing .offer:hover {
      transform: scale(1.1);
      z-index: 1;
    }
  
    .pricing .offer:nth-child(even) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  
    .contact .img-wrap {
      float: left;
      width: 50%;
      height: auto;
      overflow: hidden;
    }
  
    .contact .contact-img {
      max-width: fit-content;
      height: 100%;
    }
  
    .contact-form {
      float: right;
      width: 50%;
    }
  
    .footer {
      clear: both;
    }
  }
  
  @media (min-width: 1280px) {
    .header .logo-wrap {
      margin-left: 16vw;
    }
  
    .header .nav {
      margin-right: 15vw;
    }
  
    .home {
      padding-left: 15vw;
    }
  
    .about {
      padding-right: 15vw;
    }
  
    .services {
      padding-left: 15vw;
      padding-right: 15vw;
    }
  
    .pricing {
      padding-left: 15vw;
      padding-right: 15vw;
    }
  
    .contact {
      padding-right: 15vw;
    }
  }
`;