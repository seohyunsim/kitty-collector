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
  text-align: center;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  .scoreNum {
    font-size: 60px;
  }
  span {
    font-size: 30px;
  }
`;

const KittyGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
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
