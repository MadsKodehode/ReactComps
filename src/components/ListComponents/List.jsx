import ListTitle from "./ListHeader";

function List() {
  return (
    <div className="list-wrap">
      <ListTitle />
      <ol className="fact-list">
        <li>React is not a Framework it's a library</li>
        <li>Has a big and good community</li>
        <li>It's a declarative programming language</li>
        <li>It was released in 2013</li>
        <li>It uses Virtual DOM which is faster</li>
      </ol>
    </div>
  );
}
export default List;
