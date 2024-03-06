import { useDispatch, useSelector } from "react-redux";
import { setDescription, setTitle } from "../../state/state";
import Input from "../../components/Input";
const ModalContent = () => {
  const title = useSelector((state) => state.todo.value.title);
  const description = useSelector((state) => state.todo.value.description);
  const dispatch = useDispatch();
  const validTitle = useSelector((state) => state.todo.value.validTitle);
  const validDescription = useSelector(
    (state) => state.todo.value.validDescription
  );
  const statusTitle = useSelector((state) => state.todo.value.statusTitle);
  const statusDescription = useSelector(
    (state) => state.todo.value.statusDescription
  );
  return (
    <>
      <Input
        label={"Todo Title"}
        className={`form-control ${validTitle} required`}
        onChange={(e) => dispatch(setTitle(e.target.value))}
        value={title}
        name={title}
        status={statusTitle}
      />
      <Input
        label={"Todo Description"}
        className={`form-control ${validDescription}`}
        onChange={(e) => dispatch(setDescription(e.target.value))}
        value={description}
        name={description}
        status={statusDescription}
      />
    </>
  );
};

export default ModalContent;
