import React from "react";
import Nav from "../components/DictTopSearchNav";
import Dictionary from "../components/Dictionary";

const DictionaryPage = () => {
  const dict = [
    {
      id: 1,
      title: "어쩔티비1",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유빈",
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 2,
      title: "어쩔티비2",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유민",
      date: "2023-02-29",
      like: 3,
    },
    {
      id: 3,
      title: "어쩔티비3",
      description:
        "주로 다른 사람의 말을 비아냥거릴 때 많이 쓰이는 신조어.'어쩌라고'와 '티비(텔레비전)'을 합친 합성어. 2021년 하반기경에 유명세를 탄 신조어다. 기원은 불분명하나, 여러 커뮤니티에서 다방면으로 쓰이고 있다.",
      author: "유진",
      date: "2023-02-29",
      like: 3,
    },
  ];
  return (
    <>
      <div className="container">
        <Nav />
        <Dictionary dict={dict} />
      </div>
    </>
  );
};

export default DictionaryPage;
