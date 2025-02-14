import {useEffect} from "react";
import {useAtom} from "jotai";
import {useSearchParams} from "react-router-dom";
import {handleAtom} from "../store/Atom";
import LayOut from "../ui/Layout";
import styled from "styled-components";
import StreakEntity from "../components/StreakEntity";
const HandleWrapper = styled.div`
  font-size: 35px;
  margin-bottom: 34px;
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
      <StreakEntity
        value={7}
        maxValue={30}
        days={80}
        tier={20}
        divNum={23}
        id={handle}
      />
    </LayOut>
  );
};

export default SearchPage;
