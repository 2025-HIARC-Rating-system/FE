import {useEffect} from "react";
import {useAtom} from "jotai";
import {useSearchParams} from "react-router-dom";
import {handleAtom} from "../store/Atom";
import LayOut from "../ui/Layout";
import styled from "styled-components";
import SearchedStreakEntity from "../components/SearchedStreakEnity";
import SearchedHitingEntity from "../components/SearchedHitingEntity";
const HandleWrapper = styled.div`
  font-size: 35px;
  margin-bottom: 34px;
  font-weight: 800;
`;
const MainWrapper = styled.div`
  display: flex;
  gap: 60px;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const SearchPage = () => {
  const [handle, setHandle] = useAtom(handleAtom);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const queryHandle = searchParams.get("handle");
    if (queryHandle) {
      setHandle(queryHandle);
    }
  }, [searchParams, setHandle]);

  console.log("🔍 현재 검색된 핸들:", handle);

  return (
    <LayOut>
      <HandleWrapper>{handle}</HandleWrapper>
      <MainWrapper>
        <SearchedStreakEntity value={7} maxValue={30} days={123} tier={17} />
        <SearchedHitingEntity
          totalScore={255}
          seasonScore={255}
          todayScore={2}
        />
      </MainWrapper>
    </LayOut>
  );
};

export default SearchPage;
