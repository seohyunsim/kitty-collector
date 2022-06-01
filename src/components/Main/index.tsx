import styled from "styled-components";
import { CgArrowLeftR, CgArrowRightR } from "react-icons/cg";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";

export const Main = () => {
  const ImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIaro9NdPhttKXZ12oRy7smHDKl_bULANjA&usqp=CAU";
  return (
    <Wrap>
      <h2>kitty collector</h2>
      <Score>
        <div className="scoreNum">0</div>
        <span>score</span>
      </Score>
      <KittyGroup>
        <Kitty src={ImageUrl} />
        <Kitty src={ImageUrl} />
        <Kitty src={ImageUrl} />
        <Kitty src={ImageUrl} />
        <Kitty src={ImageUrl} />
        <Kitty src={ImageUrl} />
      </KittyGroup>
      <ArrowWrap>
        <TbArrowBigLeft />
        <TbArrowBigRight />
      </ArrowWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  @font-face {
    font-family: "BRRA_R";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/BRRA_R.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  text-align: center;
  /* border: 1px solid; */
  background-color: #fffffb9e;
  h2 {
    font-family: "BRRA_R";
  }
`;

const Score = styled.div`
  /* border: 1px solid red; */
  padding: 1em;
  display: flex;
  flex-direction: column;
  .scoreNum {
    @font-face {
      font-family: "SDSamliphopangche_Outline";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-size: 80px;
    font-family: "SDSamliphopangche_Outline";
    color: #3e3e3e;
  }
  span {
    font-size: 20px;
    padding: 5px;
    font-family: "BRRA_R";
  }
`;

const KittyGroup = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const Kitty = styled.img`
  width: 60px;
  margin-top: -1em;
`;

const ArrowWrap = styled.div`
  width: 100%;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 80%;
`;
