import React from "react";
import "./ItemList.scss";

function List({ name, picture, link }) {
  return (
    <div>
      <a href={link}>
        <img
          src={
            require(process.env.PUBLIC_URL + "./image/" + picture + ".PNG")
              .default
          }
          alt={name}
        />
      </a>
      <h5>{name}</h5>
    </div>
  );
}

const Sun = [
  {
    id: 1,
    name: "독립일기",
    image: "sun01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=748105&weekday=sun",
  },
  {
    id: 2,
    name: "싸움독학",
    image: "sun02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=736277&weekday=sun",
  },
  {
    id: 3,
    name: "이번생도잘부탁해",
    image: "sun03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=746858&weekday=sun",
  },
  {
    id: 4,
    name: "약한영웅",
    image: "sun04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=710751&weekday=sun",
  },
  {
    id: 5,
    name: "열렙전사",
    image: "sun05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=670152&weekday=sun",
  },
  {
    id: 6,
    name: "입학용병",
    image: "sun06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=758150&weekday=sun",
  },
];
const Mon = [
  {
    id: 1,
    name: "참교육",
    image: "mon01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=758037&weekday=mon",
  },
  {
    id: 2,
    name: "파이게임",
    image: "mon02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=749632&weekday=mon",
  },
  {
    id: 3,
    name: "뷰티풀군바리",
    image: "mon03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=648419&weekday=mon",
  },
  {
    id: 4,
    name: "신의탑",
    image: "mon04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=183559&weekday=mon",
  },
  {
    id: 5,
    name: "윈드브레이커",
    image: "mon05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=602910&weekday=mon",
  },
  {
    id: 6,
    name: "소녀의 세계",
    image: "mon06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=654774&weekday=mon",
  },
];
const Tue = [
  {
    id: 1,
    name: "여신강림",
    image: "tue01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=703846&weekday=tue",
  },
  {
    id: 2,
    name: "바른연애길잡이",
    image: "tue02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=703852&weekday=tue",
  },
  {
    id: 3,
    name: "엽총소년",
    image: "tue03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=759925&weekday=tue",
  },
  {
    id: 4,
    name: "제로게임",
    image: "tue04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=676695&weekday=tue",
  },
  {
    id: 5,
    name: "NG불가",
    image: "tue05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=774022&weekday=tue",
  },
  {
    id: 6,
    name: "랜덤채팅의 그녀",
    image: "tue06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=702608&weekday=tue",
  },
];
const Wed = [
  {
    id: 1,
    name: "헬퍼2:킬베로스",
    image: "wed01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=670143&weekday=wed",
  },
  {
    id: 2,
    name: "전지적독자시점",
    image: "wed02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=747269&weekday=wed",
  },
  {
    id: 3,
    name: "복학왕",
    image: "wed03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=626907&weekday=wed",
  },
  {
    id: 4,
    name: "모죠의일지",
    image: "wed04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=728015&weekday=wed",
  },
  {
    id: 5,
    name: "급식아빠",
    image: "wed05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=758662&weekday=wed",
  },
  {
    id: 6,
    name: "튜토리얼 탑의 고인물",
    image: "wed06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=738694&weekday=wed",
  },
];
const Thu = [
  {
    id: 1,
    name: "더복서",
    image: "thu01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=736989&weekday=thu",
  },
  {
    id: 2,
    name: "연애혁명",
    image: "thu02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=570503&weekday=thu",
  },
  {
    id: 3,
    name: "이두나!",
    image: "thu03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=731130&weekday=thu",
  },
  {
    id: 4,
    name: "나노머신",
    image: "thu04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=747271&weekday=thu",
  },
  {
    id: 5,
    name: "노답소녀",
    image: "thu05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=756137&weekday=thu",
  },
  {
    id: 6,
    name: "정글쥬스",
    image: "thu06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=762279&weekday=thu",
  },
];
const Fri = [
  {
    id: 1,
    name: "외모지상주의",
    image: "fri01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=641253&weekday=fri",
  },
  {
    id: 2,
    name: "갓오브하이스쿨",
    image: "fri02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=318995&weekday=fri",
  },
  {
    id: 3,
    name: "데드퀸",
    image: "fri03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=753478&weekday=fri",
  },
  {
    id: 4,
    name: "재혼황후",
    image: "fri04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=735661&weekday=fri",
  },
  {
    id: 5,
    name: "1초",
    image: "fri05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=725586&weekday=fri",
  },
  {
    id: 6,
    name: "개를 낳았다",
    image: "fri06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=712362&weekday=fri",
  },
];
const Sat = [
  {
    id: 1,
    name: "호랑이형님",
    image: "sat01",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=650305&weekday=sat",
  },
  {
    id: 2,
    name: "프리드로우",
    image: "sat02",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=597447&weekday=sat",
  },
  {
    id: 3,
    name: "취사병전설이되다",
    image: "sat03",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=727188&weekday=sat",
  },
  {
    id: 4,
    name: "광장",
    image: "sat04",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=753509&weekday=sat",
  },
  {
    id: 5,
    name: "욕망일기",
    image: "sat05",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=762071&weekday=sat",
  },
  {
    id: 6,
    name: "니나의 마법서랍",
    image: "sat06",
    link: "https://comic.naver.com/webtoon/list.nhn?titleId=772401&weekday=sat",
  },
];
const ItemList = () => {
  return (
    <div className="container">
      <div className="Sunday">
        <h4>일요일</h4>
        {Sun.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
      <div className="Monday">
        <h4>월요일</h4>
        {Mon.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
      <div className="Tuesday">
        <h4>화요일</h4>
        {Tue.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
      <div className="Wednesday">
        <h4>수요일</h4>
        {Wed.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
      <div className="Thursday">
        <h4>목요일</h4>
        {Thu.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
      <div className="Friday">
        <h4>금요일</h4>
        {Fri.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
      <div className="Saturday">
        <h4>토요일</h4>
        {Sat.map((day) => (
          <List
            key={day.id}
            name={day.name}
            picture={day.image}
            link={day.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
