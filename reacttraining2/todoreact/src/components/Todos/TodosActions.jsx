import { Button } from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

export function TodosActions({
  resetTodosHandler,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button onClick={() => resetTodosHandler()} title="Reset todos">
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!completedTodosExist}
        onClick={() => deleteCompletedTodos()}
        title="Clear all todos"
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}
