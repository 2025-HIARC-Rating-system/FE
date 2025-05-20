import apiClient from "./ApiClient";

//admin 페이지 블록별 api
export const sendAdminInput = async (blockName: string, inputValue: string) => {
  if (!inputValue.trim()) {
    alert("입력값을 입력해주세요.");
    return;
  }
  let parsedData;
  try {
    console.log(blockName);
    if (blockName === "새로운 학기 시작하기(막누르지마셈 초 기 화 됨)") {
      parsedData = JSON.parse(inputValue);
      console.log(parsedData);
      if (!Array.isArray(parsedData)) {
        throw new Error("올바른 JSON 배열이 아닙니다.");
      }
    } else if (blockName === "현재 시즌 중도 마무리") {
      parsedData = inputValue;
      console.log(parsedData);
    } else {
      parsedData = JSON.parse(inputValue);
      if (typeof parsedData !== "object" || Array.isArray(parsedData)) {
        throw new Error("올바른 객체 형식이 아닙니다.");
      }
    }
  } catch (error) {
    alert("입력값이 올바른 JSON 형식이 아닙니다.");
    console.error("JSON 변환 실패:", error);
    return;
  }

  const apiUrl = (() => {
    switch (blockName) {
      case "새로운 학기 시작하기(막누르지마셈 초 기 화 됨)":
        return "/admin/reset/term";
      case "새로운 시즌 시작하기":
        return "/admin/season/new";
      case "현재 시즌 중도 마무리":
        return "/admin/season/end";
      case "새로운 이벤트 시작하기":
        return "/admin/event/new";
      case "현재 이벤트 중도 마무리":
        return "/admin/event/end";
      case "HITING값 확인하기":
        return "/admin/new-solved";
      default:
        alert("올바르지 않은 BlockName입니다.");
        console.error(` ${blockName}은 유효하지 않은 BlockName입니다.`);
        return;
    }
  })();

  if (!apiUrl) return;

  try {
    const response = await apiClient.post(apiUrl, parsedData);
    console.log(`${blockName} 데이터 전송 성공:`, response);
    alert("성공적으로 전송되었습니다!");
    return response;
  } catch (error) {
    console.log("전송되는 데이터:", parsedData);
    console.error(` ${blockName} 데이터 전송 실패:`, error);
    alert("데이터 전송에 실패했습니다.");
  }
};

//시즌 이벤트 초기화 api
export const resetAdminData = async (type: "season" | "event") => {
  return await apiClient.post(`/admin/reset/${type}`, {});
};

//확인하기 api 들

export const checkAdminApi = async (
  type: "recent-season" | "recent-event" | "date"
) => {
  return await apiClient.get(`/admin/${type}`);
};

// 핸들별 현재 값들 확인하는 api

export const getAdminHandleStats = async (
  type: "hiting" | "solved-level",
  handle: string
) => {
  try {
    const res = await apiClient.get(`/admin/${type}`, {
      params: {handle},
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
