import {useAtom} from "jotai";
import styled from "styled-components";
import {DivData, hitingDataAtom} from "../store/Atom";
import Color from "../ui/Color";
import ArrowButton from "../atoms/ArrowButton";
import DivNameTack from "./DivNameTack";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  border-radius: 28px;
  background-color: ${Color.skybox};
  min-height: 300px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
`;

const TackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const HitingBox = ({divNum}: {divNum: number}) => {
  const [hitingData] = useAtom(hitingDataAtom);

  const divList: DivData[] =
    divNum === 1
      ? hitingData.div1List
      : divNum === 2
      ? hitingData.div2List
      : hitingData.div3List || [];

  return (
    <Wrapper>
      <ButtonWrapper>
        <ArrowButton divNum={divNum} />
      </ButtonWrapper>
      <TackContainer>
        {divList.map((item, index) => (
          <DivNameTack
            key={index}
            rank={item.rank}
            id={item.handle}
            tier={item.tier}
            totalHiting={item.totalHiting}
          />
        ))}
      </TackContainer>
    </Wrapper>
  );
};

export default HitingBox;
