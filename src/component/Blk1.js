import '../App.css';
import styled from 'styled-components';
import Prj1 from './Prj1';
import type1 from '../img/type-1.jpg';
import type2 from '../img/type-2.jpg';
import type3 from '../img/type-3.jpg';
import type4 from '../img/type-4.jpg';
import p1 from '../img/p01.webp';
import p2 from '../img/p02.webp';


const images = [
  type1,
  type2,
  type3,
  type4,
  p1,
  p2
]

function Blk1() {
  return (
          <Prj1
            color="#fff"
            bgcolor="#DFD2D2"
            objfit="contain"
            images={images} />
  );
}
export default Blk1;
