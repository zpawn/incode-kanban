import { LoadBoard } from './load-board';
import { Board } from './board';

const Kanban = () => {
  return (
    <>
      <LoadBoard />
      <Board />
    </>
  );
};

export { Kanban };
