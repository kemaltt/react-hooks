import "./App.css";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Search from "./components/Search";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  //return <Accordion items = { items }/>;
  //return <Search />;
  // return <Counter / > ;
  // return <UseEffect />;
  return <UseRef />;
};
