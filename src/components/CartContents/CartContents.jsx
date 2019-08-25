/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { formatPrice, totalPrice } from "../../helpers/price";

const CartContents = props => {
  const { items, remove } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Qty</th>
          <th
            scope="col"
            css={css`
              @media (max-width: 575px) {
                width: 50%;
              }
            `}
          >
            Name
          </th>
          <th scope="col" className="d-none d-sm-table-cell">
            Description
          </th>
          <th scope="col">Unit Price</th>
          <th scope="col" className="d-none d-sm-table-cell">
            Line Total
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.qty}</td>
              <td>{item.name}</td>
              <td className="d-none d-sm-table-cell">{item.description}</td>
              <td>{formatPrice(item.price)}</td>
              <td className="d-none d-sm-table-cell">
                {formatPrice(item.price * item.qty)}
              </td>
              <td>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={remove}
                >
                  <span aria-hidden="true" data-id={item.name}>
                    &times;
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th className="d-none d-sm-table-cell"></th>
          <th className="d-none d-sm-table-cell"></th>
          <th className="text-right">TOTAL</th>
          <th>{totalPrice(items)}</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartContents;
