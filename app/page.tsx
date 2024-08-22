import BoxContainer from "@/components/container/BoxContainer";
import CenterContainer from "@/components/container/CenterContainer";
import TextContainer from "@/components/container/TextContainer";
import Calculator from "@/components/sections/Calculator";

export default function Home() { 
  return ( 
    <main> 
      <CenterContainer center>
      <BoxContainer center align maxW={300} borderRadius={1}>
        <TextContainer center invert Size={3} items>
          bro 
        </TextContainer>
        <TextContainer center  invert Size={6} >
          1123
        </TextContainer>
      </BoxContainer>
      <div>
        <Calculator/>
      </div>
      </CenterContainer>
    </main>
  );
}
