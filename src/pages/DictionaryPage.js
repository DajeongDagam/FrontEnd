import React, { useState } from "react";
import Nav from "../components/DictTopSearchNav";
import Dictionary from "../components/Dictionary";
import { useLocation, useSearchParams } from "react-router-dom";
import DictionaryItemEdit from "../components/DictionaryItemEdit";
import { useNavigate } from "react-router-dom";

const DictionaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  // dict -> 추후 API 처리할 파일로 옮기기
  const dict = [
    {
      id: 1,
      title: "어쩔티비1",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유빈",
      participants: 10,
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 2,
      title: "어쩔티비2",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유민",
      participants: 8,
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 3,
      title: "어쩔티비3",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유진",
      participants: 2,
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 4,
      title: "어쩔티비4",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유진",
      participants: 2,
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 5,
      title: "어쩔티비5",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유진",
      participants: 2,
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 6,
      title: "어쩔티비6",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유진",
      participants: 2,
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 7,
      title: "어쩔티비7",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유진",
      participants: 2,
      date: "2023-02-29",
      like: 3,
    },
  ];

  const [result, setResult] = useState(dict);

  const search = (keyword) => {
    navigate({
      pathname: "/dictionary/search",
      search: `?keyword=${keyword}`,
    });

    // 검색 API 사용해서 결과 얻어오기
    const res = dict.filter((word) => word.title === keyword);
    setResult(res);
  };

  return location.pathname === "/dictionary/edit" ? (
    <>
      <div className="container">
        <Nav hideCategory={true} />
        <DictionaryItemEdit dict={dict} keyword={keyword} />
      </div>
    </>
  ) : (
    <>
      <div className="container">
        <Nav hideCategory={false} search={search} />
        <Dictionary dict={result} />
      </div>
    </>
  );
};

export default DictionaryPage;
