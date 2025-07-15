import "../css/MyModal.css";
import MyModal from "./MyModal";
import Accordion from "../Accordion";
import styled from "styled-components";
type MyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const StyledContent = styled.div`
  padding-right: 3rem;
  padding-left: 3rem;
  padding-bottom: 5rem;
`;

function HomeTravelModal({ isOpen, onClose }: MyModalProps) {
  if (!isOpen) return null;
  return (
    <MyModal isOpen={isOpen} onClose={onClose}>
      <img
        src="/img/home_travel_banner.png"
        alt="프로젝트 썸네일"
        style={{
          width: "100%",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
      />
      <StyledContent>
        <h2>✈️ 방구석 국내 여행</h2>
        <p>
          이 프로젝트는 방 안에서 간접적으로 국내여행을 경험하기 위해 제작된 웹
          애플리케이션입니다. 프론트엔드는 React를 사용하고 백엔드는
          SpringBoot로 개발되었습니다.
        </p>
        <Accordion title="사용 기술 스택">
          <ul>
            <li>
              <strong>Front:</strong> React
            </li>
            <li>
              <strong>Back:</strong> Spring Boot
            </li>
            <li>
              <strong>협업도구:</strong> GitHub
            </li>
          </ul>
        </Accordion>

        <Accordion title="기능 설명">
          <section className="mb-6">
            <h3 className="text-xl font-semibold">Main</h3>
            <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
              <li>
                <strong>지도 및 날씨, 뉴스 정보 조회</strong>: 검색어를 입력하면
                지도, 날씨, 뉴스 정보를 표시 (카카오맵, 기상청, 네이버 뉴스 API
                사용)
              </li>
              <li>
                <strong>관광지 이미지 조회</strong>: 버튼 클릭 시 관광 관련
                이미지 출력 (한국관광공사 Tour API)
              </li>
              <li>
                <strong>유튜브 영상 조회</strong>: 유튜브 API를 통해 관련 동영상
                표시, 모달에서 확장 보기 가능
              </li>
              <li>
                <strong>마커 리스트</strong>: 지도에 관련 마커 표시 및 좌측
                리스트 출력
              </li>
              <li>
                <strong>로드 뷰</strong>: 로드뷰 아이콘 클릭 후 도로 위치 클릭
                시 로드뷰 제공 (크기 조절, 드래그 이동 가능)
              </li>
              <li>
                <strong>GPT 여행 계획</strong>: 목적지, 일 수 입력 시 ChatGPT가
                여행 일정 추천
              </li>
              <li>
                <strong>카카오 로그인</strong> 및{" "}
                <strong>회원가입/로그인 기능</strong> 지원
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold">Planner</h3>
            <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
              <li>여행지를 카드 단위로 관리 (react-beautiful-dnd 사용)</li>
              <li>카카오맵에서 여행지를 카드로 추가 및 모달에서 정보 확인</li>
              <li>컬럼 클릭 시 이동 거리 및 시간 표시</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold">SNS</h3>
            <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
              <li>여행 관련 게시물 작성 및 공유</li>
              <li>게시물에 사진, 메모, 위치 정보 포함 가능 (카카오맵 API)</li>
              <li>react-slick으로 이미지 슬라이더 제공</li>
              <li>수정/삭제 및 댓글 기능 지원</li>
            </ul>
          </section>
        </Accordion>
        <Accordion title="사용 API">
          <ul>
            <li>
              <strong>지도 데이터(검색, 마커, 로드 뷰):</strong> 카카오맵 API
            </li>
            <li>
              <strong>날씨 정보:</strong> 기상청 날씨 API
            </li>
            <li>
              <strong>뉴스 정보:</strong> 네이버 뉴스 검색 API
            </li>
            <li>
              <strong>유튜브 검색:</strong> YouTube Data API v3
            </li>
            <li>
              <strong>GPT 서비스:</strong> OpenAI GPT (ChatGPT)
            </li>
            <li>
              <strong>관광지 이미지 검색:</strong> 한국관광공사 Tour API
            </li>
            <li>
              <strong>지도 경로 계산:</strong> 카카오 모빌리티 API
            </li>
          </ul>
        </Accordion>
        <a
          href="https://github.com/your-id/your-project"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          🔗 GitHub 보기
        </a>
      </StyledContent>
    </MyModal>
  );
}

export default HomeTravelModal;
