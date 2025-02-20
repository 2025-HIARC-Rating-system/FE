import {useState, useEffect} from "react";
import axios, {AxiosError} from "axios";
import styled from "styled-components";
import RankingContainerExplainBar from "../components/RankingContainerExplainBar";
import RankingEntity from "../components/RankingEntity";

const Wrapper = styled.div`
  width: 673px;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 342px;
  }
`;

// ✅ 백엔드 데이터 타입 정의 (`tier`를 number로 변경)
interface RankingItem {
  handle: string;
  tier: number; // ✅ `tier`를 number로 변경
  isEvent: boolean;
  dailyHiting: number;
  totalHiting: number;
}

const RankingContiner = ({selected}: {selected: number}) => {
  const [rankingData, setRankingData] = useState<
    {
      num: number;
      handle: string;
      tier: number;
      event: boolean;
      today: number;
      total: number;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get<{rankingList: RankingItem[]}>(
          `https://3.36.9.192:3306/rating/div${selected}`
        );

        // ✅ 데이터 변환: 인덱스를 추가하고 필요한 필드만 매핑
        const transformedData = response.data.rankingList.map(
          (item, index) => ({
            num: index + 1, // ✅ 배열 인덱스를 num에 추가 (1부터 시작)
            handle: item.handle,
            tier: item.tier, // ✅ number 타입 유지
            event: item.isEvent,
            today: item.dailyHiting, // ✅ 백엔드의 dailyHiting을 today로 매핑
            total: item.totalHiting, // ✅ 백엔드의 totalHiting을 total로 매핑
          })
        );

        setRankingData(transformedData); // ✅ 상태 업데이트
      } catch (err) {
        // ✅ `err`를 AxiosError로 타입 변환 후 `.response.data.message` 접근
        const errorMessage =
          (err as AxiosError<{message: string}>)?.response?.data?.message ||
          "데이터를 불러오는 데 실패했습니다.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchRankingData();
  }, [selected]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <Wrapper>
      <RankingContainerExplainBar />
      {rankingData.map(({num, handle, tier, today, total, event}) => (
        <RankingEntity
          key={num}
          ranking={num}
          handle={handle}
          tier={tier} // ✅ number 타입 유지
          today={today}
          total={total}
          event={event}
        />
      ))}
    </Wrapper>
  );
};

export default RankingContiner;
