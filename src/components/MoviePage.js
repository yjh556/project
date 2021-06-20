import React from "react";
import Sidebar from "./Sidebar";
import "./PageUi.scss";
import TitleUpdate from "./TitleUpdate";

const MoviePage = ({ history }) => {
  const titleUpdater = TitleUpdate("Loading...");
  setTimeout(() => titleUpdater("Movie"));
  return (
    <div>
      <Sidebar></Sidebar>
      <header className="head">
        <div>
          <a onClick={() => history.push("./")}>
            <img src={require("./image/main.PNG").default} alt="메인배너"></img>
          </a>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a onClick={() => history.push("./Webtoon")}>웹툰</a>
            </li>
            <li>
              <a onClick={() => history.push("./Goods")}>굿즈</a>
            </li>
            <li>
              <a onClick={() => history.push("./Movie")}>영화</a>
            </li>
            <li>
              <a onClick={() => history.push("./Drama")}>드라마</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="totalContent">
        <hr></hr>
        <div>
          <img
            src={require("./image/banner2.png").default}
            alt="영화배너"
          ></img>
        </div>

        <ul class="contentcard">
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=62328">
                  <img
                    src={require("./image/movie01.jpg").default}
                    alt="설국열차"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">설국열차</h1>
                  <p className="card-text">[SF, 액션, 드라마]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      기상 이변으로 모든 것이 꽁꽁 얼어붙은 지구. 살아남은
                      사람들을 태운 기차 한 대가 끝없이 궤도를 달리고 있다.{" "}
                      <br></br>춥고 배고픈 사람들이 바글대는 빈민굴 같은 맨
                      뒤쪽의 꼬리칸, 그리고 선택된 사람들이 술과 마약까지
                      즐기며...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=109937">
                  <img
                    src={require("./image/movie02.jpg").default}
                    alt="패션왕"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">패션왕</h1>
                  <p className="card-text">[드라마, 코미디]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      하고 싶은 일도, 되고 싶은 꿈도 없는 빵셔틀 ‘우기명’(주원).
                      서울로 전학온 후 야심차게 새로운 시작을 해보려 하지만
                      <br></br> 그의 미약한 존재를 알아주는 이는...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=153620">
                  <img
                    src={require("./image/movie03.jpg").default}
                    alt="치즈인더트랩"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">치즈인더트랩</h1>
                  <p className="card-text">[멜로/로맨스, 스릴러]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      부드러운 미소 뒤에 숨겨진 싸늘한 모습. 피하고 싶은
                      '유정(박해진)' 선배가 갑자기 나에게 다가와 말을 걸기
                      <br></br>
                      시작했다. 함께 밥 먹고, 함께 과제하고, 조별 숙제 핑계로
                      영화도 보고...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=181584">
                  <img
                    src={require("./image/movie04.jpg").default}
                    alt="아내를 죽였다"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">아내를 죽였다</h1>
                  <p className="card-text">[스릴러, 액션]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      친구와 술을 마신 후 곯아떨어진 ‘정호’는 숙취로 눈을 뜬
                      다음 날 아침, 별거 중이던 아내 ‘미영’이 살해당했다는
                      <br></br> 충격적인 소식을 듣게 된다....
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=194644">
                  <img
                    src={require("./image/movie05.jpg").default}
                    alt="기기괴괴 성형수"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">기기괴괴 성형수</h1>
                  <p className="card-text">[공포, 스릴러]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      지금부터 기적의 성형수 사용 방법을 알려드리겠습니다.
                      본인의 얼굴을 거울로 확인해 보세요. 사진을 찍어두셔도
                      <br></br> 좋습니다. 마지막 작별의 시간이니까요...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=189537">
                  <img
                    src={require("./image/movie06.jpg").default}
                    alt="살아있다"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">#살아있다</h1>
                  <p className="card-text">[드라마]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      원인불명 증세의 사람들의 공격에 통제 불능에 빠진 도시.
                      영문도 모른 채 잠에서 깬 ‘준우’(유아인)는 아무도 없는 집에
                      <br></br>
                      혼자 고립된 것을 알게 된다. 데이터, 와이파이, 문자, 전화
                      모든 것이 끊긴 채 고립된 상황...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=205159">
                  <img
                    src={require("./image/movie07.jpg").default}
                    alt="샤크 더 비기닝"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">샤크 더 비기닝</h1>
                  <p className="card-text">[액션]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      뜻밖의 사고로 모든 것을 잃은 학교폭력 피해자
                      차우솔(김민석) 소년교도소에 수감된 뒤 우연히<br></br>{" "}
                      종합격투기 챔피언 정도현(위하준)을 만나게 되고...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=92575">
                  <img
                    src={require("./image/movie08.jpg").default}
                    alt="은밀하게 위대하게"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">은밀하게 위대하게</h1>
                  <p className="card-text">[액션, 드라마, 코미디]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      공화국에선 혁명전사,이 곳에선 간첩. 들개로 태어나 괴물로
                      길러진 내 남파임무는 어이없지만 동네 바보입니다...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
          <li>
            <div>
              <div className="moviecontent">
                <a href="https://movie.naver.com/movie/bi/mi/basic.nhn?code=93090">
                  <img
                    src={require("./image/movie09.jpg").default}
                    alt="이웃사람"
                  />
                </a>
              </div>
              <div className="moviecontent">
                <div className="card-body">
                  <h1 className="card-title">이웃사람</h1>
                  <p className="card-text">[스릴러]</p>
                  <p className="card-text">
                    <small className="text-muted">
                      202호 소녀의 죽음, 그리고 열흘 간격으로 발생하는
                      연쇄살인사건 범인의 실마리는 잡히지 않고, 강산맨션의
                      <br></br>
                      이웃사람들은 공포에 떤다. 그러던 중 이웃사람들은 수십
                      만원대의 수도세, 사건발생일마다...
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <hr></hr>
        </ul>
      </section>
      <footer className="footer">
        <hr></hr>
        <p>
          - 본 콘텐츠의 저작권은 저자 또는 제공처에 있으며, 이를 무단 이용하는
          경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
        </p>
        <section>
          <section className="footIcon">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://m.facebook.com/?locale2=ko_KR"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-facebook"
                viewBox="0 0 30 30"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>{" "}
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/?lang=ko"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-twitter"
                viewBox="0 0 30 30"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.google.com/"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-google"
                viewBox="0 0 30 30"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-instagram"
                viewBox="0 0 30 30"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://kr.linkedin.com/"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-linkedin"
                viewBox="0 0 30 30"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-github"
                viewBox="0 0 30 30"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </section>
          <hr></hr>
          <p className="prod">@ prod by. 김지우, 신재영, 유진호, 최윤희</p>
        </section>
      </footer>
    </div>
  );
};

export default MoviePage;
