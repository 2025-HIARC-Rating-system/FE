import {useEffect} from "react";
import {useAtom} from "jotai";
import {useSearchParams} from "react-router-dom";
import {handleAtom} from "../store/Atom";
import LayOut from "../ui/Layout";
import styled from "styled-components";
import SearchedStreakEntity from "../components/SearchedStreakEnity";
import SearchedHitingEntity from "../components/SearchedHitingEntity";
import TierButton from "../components/TierButton";
import DivAndRank from "../components/DivAndRank";
const HandleWrapper = styled.div`
  font-size: 35px;
  margin-bottom: 24px;
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
const Explain = styled.div`
  display: flex;
  margin-bottom: 14px;
  gap: 6px;
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
      <Explain>
        <TierButton tier={17} />
        <DivAndRank divNum={3} rank={12} />
      </Explain>
      <MainWrapper>
        <SearchedStreakEntity
          seasonStreak={7}
          seasonTotal={30}
          totalStreak={123}
          tier={17}
          startDate="2025-01-01"
        />
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
