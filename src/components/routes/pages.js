import { Link , Outlet} from "react-router-dom";

import data from "../../data";

export default function Pages() {
  let invoices = data();
  console.log( "Dasd ", invoices)
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/pages/${invoice.nr}`}
            key={invoice.nr}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
      
    </div>
  );
}