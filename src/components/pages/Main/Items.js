import Item from "./Item";

function Items({linkData}) {
  const { data, loading, error } = linkData;

  if (error) console.log(error);

  return (
    <>
      {(!loading && error === null) && data.folder.links.map(item =>
         <Item
          key={item.id}
          createdAt={item.createdAt}
          url={item.url}
          title={item.title}
          description={item.description}
          imageSource={item.imageSource}
        />)}
    </>
  );
}

export default Items;