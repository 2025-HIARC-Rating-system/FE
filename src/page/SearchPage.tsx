import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {useSearchParams} from "react-router-dom";
import {handleAtom} from "../store/Atom";
import LayOut from "../ui/Layout";
import styled from "styled-components";
import SearchedStreakEntity from "../components/SearchedStreakEnity";
import SearchedHitingEntity from "../components/SearchedHitingEntity";
import TierButton from "../components/TierButton";
import DivAndRank from "../components/DivAndRank";
import {fetchSearchData, SearchData} from "../api/SearchApi";
import SolvedButton from "../components/SolvedButton";

const HandleWrapper = styled.div`
  font-size: 35px;
  margin-bottom: 24px;
  font-weight: 800;
  cursor: pointer;
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

const Message = styled.div`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const SearchPage = () => {
  const [handle, setHandle] = useAtom(handleAtom);
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<SearchData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queryHandle = searchParams.get("handle");
    if (queryHandle) {
      setHandle(queryHandle);
      loadSearchData(queryHandle);
    }
  }, [searchParams, setHandle]);

  const loadSearchData = async (handle: string) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await fetchSearchData(handle);
      if (result) {
        setData(result);
      } else {
        setError("해당 핸들의 정보를 찾을 수 없습니다.");
      }
    } catch (err) {
      setError(" 데이터 불러오는 중 오류 발생.");
      console.error("데이터 불러오는 중 오류 발생:", err);
    } finally {
      setLoading(false);
    }
  };

  const onClick = () => {
    window.open(`https://solved.ac/profile/${handle}`, "_blank");
  };

  return (
    <LayOut>
      <HandleWrapper onClick={onClick}>{handle}</HandleWrapper>

      {loading && <Message>로딩 중...</Message>}
      {error && <Message>{error}</Message>}

      {data && !loading && !error && (
        <>
          <Explain>
            <TierButton tier={data.tier} />
            <DivAndRank divNum={data.divNum} rank={data.rank} />
            <SolvedButton handle={handle} />
          </Explain>
          <MainWrapper>
            <SearchedStreakEntity
              seasonStreak={data.seasonStreak}
              seasonTotal={data.seasonTotal}
              totalStreak={data.totalStreak}
              tier={data.tier}
              startDate={data.startDate}
            />
            <SearchedHitingEntity
              totalHiting={data.totalHiting}
              seasonHiting={data.seasonHiting}
              dailyHiting={data.dailyHiting}
            />
          </MainWrapper>
        </>
      )}
    </LayOut>
  );
};

export default SearchPage;
