import ListTitle from "./ListHeader";
import ListItems from "./ListItems";
function List() {
  return (
    <div className="list-wrap">
      <ListTitle />
      <ol className="fact-list">
        <ListItems />
      </ol>
    </div>
  );
}

export default List;
