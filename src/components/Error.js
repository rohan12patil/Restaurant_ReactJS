import { useRouteError } from 'react-router-dom';

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>
        {err.status}: {err.statusText} - {err.data}
      </h1>
    </div>
  );
};
