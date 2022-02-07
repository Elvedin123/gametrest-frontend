// need to call for api?

export default function DeleteComment() {
  const handleDelete = async () => {
    await deletePost(props._id);
    props.handleToggle()
  };

  return <button onClick={handleDelete}>Delete Comment</button>;
}
