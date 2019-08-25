/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      css={css`
        min-height: calc(100vh - 140px);
      `}
    >
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
