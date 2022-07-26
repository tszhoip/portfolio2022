import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Project from './component/Project';
import type1 from './img/type-1.jpg';
import type2 from './img/type-2.jpg';
import type3 from './img/type-3.jpg';
import type4 from './img/type-4.jpg';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

function App() {

  const Container = styled.div`
      width: 100%;
      height: auto;
      background-color: ${props => props.bgcolor};
`
  const images = [
    type1, 
    type2, 
    type3, 
    type4
  ]

  const images2 = [
    'https://source.unsplash.com/weekly?sky&w=1024&h=768',
    'https://source.unsplash.com/weekly?mountain&w=1024&h=768',
    'https://source.unsplash.com/weekly?architecture&w=1024&h=768',
    'https://source.unsplash.com/weekly?white architecture&w=1024&h=768',
    'https://source.unsplash.com/weekly?black architecture&w=1024&h=768',
    'https://source.unsplash.com/weekly?plane architecture&w=1024&h=768'
  ]

  

  

 


  return (
    <div>

      <Container bgcolor="black">
        <div className="container">
          <Project
            color="white"
            bgcolor="black"
            title="Lorum Ipsum"
            type="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget purus ac felis commodo rutrum. Etiam varius eros mattis lectus congue elementum.elementum" />
        </div>
      </Container>

      <Container bgcolor="#DFD2D2">
        <div className="container">
          <Project
            color="#fff"
            bgcolor="#DFD2D2"
            title="01 typewritter"
            type="Random font design that "
            objfit="contain"
            images={images} />
        </div>
      </Container>

      <Container bgcolor="#D7B98E">
        <div className="container">
          <Project
            color="#fff"
            bgcolor="#D7B98E"
            title="02 buttons"
            type="dummy text2"
            objfit="cover"
            images={images2} />
        </div>
      </Container>

      <Container bgcolor="#5B622E">
      <div className="container">
        <Project
          color="#fff"
          bgcolor="#5B622E"
          title="03"
          type="This is dummy text1"
          images={images} />
      </div>
      </Container>

      <Container bgcolor="#7B90D2">
      <div className="container">
        <Project
          color="#fff"
          bgcolor="#7B90D2"
            title="04 Font"
            type="Wabi means things that are raw and simple. It doesn't mean looking for rustic, ugly, It includes appreication of made by nature, belief as less man marks as possibile.<br/> Sabi means things whose beauty stems from age. It refers to the patina of age, and the concept that changes due to use may make an object more beautiful and valuable. This also incorporates an appreciation of the cycles of life, as well as careful, artful mending of damage."
          images={images} />
      </div>
      </Container>
  








    </div>
  );
}

export default App;
