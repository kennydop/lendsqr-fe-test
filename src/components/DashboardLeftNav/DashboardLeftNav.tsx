import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import DashboardNavItem from "../DashboardNavItem/DashboardNavItem";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const customerNavLinks = [
  { name: "Users", icon: solid("user-group"), active: true },
  { name: "Gurantors", icon: solid("users") },
  { name: "Loans", icon: solid("sack-dollar") },
  { name: "Descision Models", icon: solid("handshake") },
  { name: "Savings", icon: solid("piggy-bank") },
  { name: "Loan Requests", icon: solid("hand-holding-dollar") },
  { name: "Whitelist", icon: solid("user-check") },
  { name: "Karma", icon: solid("user-xmark") },
];

const businessNavLinks = [
  { name: "Organization", icon: solid("briefcase"), active: false },
  { name: "Loan Products", icon: solid("hand-holding-dollar") },
  { name: "Savings Products", icon: solid("building-columns") },
  { name: "Fees and Charges", icon: solid("coins") },
  { name: "Transactions", icon: solid("arrow-right-arrow-left") },
  { name: "Services", icon: solid("fan") },
  { name: "Service Account", icon: solid("user-gear") },
  { name: "Settlements", icon: solid("scroll") },
  { name: "Reports", icon: solid("chart-column") },
];

const settingsNavLinks = [
  { name: "Preferences", icon: solid("sliders"), active: false },
  { name: "Fees and Pricing", icon: solid("percent") },
  { name: "Audit Logs", icon: solid("list-check") },
];

function DashboardLeftNav() {
  return (
    <div className="dashboard-left-nav">
      <div className="org">
        <FontAwesomeIcon icon={solid("briefcase")} />
        <p>Switch Organization</p>
        <FontAwesomeIcon icon={solid("chevron-down")} className="chevdown" />
      </div>
      <DashboardNavItem name="Dashboard" icon={solid("house-chimney")} />
      <div className="nav-group">
        <p className="nav-group-name">Customers</p>
        <div className="navItems">
          {customerNavLinks.map((navLink) => (
            <DashboardNavItem
              key={navLink.name}
              name={navLink.name}
              icon={navLink.icon}
              active={navLink?.active ?? false}
            />
          ))}
        </div>
      </div>
      <div className="nav-group">
        <p className="nav-group-name">Business</p>
        <div className="navItems">
          {businessNavLinks.map((navLink) => (
            <DashboardNavItem
              key={navLink.name}
              name={navLink.name}
              icon={navLink.icon}
              active={navLink?.active ?? false}
            />
          ))}
        </div>
      </div>
      <div className="nav-group">
        <p className="nav-group-name">Settings</p>
        <div className="navItems">
          {settingsNavLinks.map((navLink) => (
            <DashboardNavItem
              key={navLink.name}
              name={navLink.name}
              icon={navLink.icon}
              active={navLink?.active ?? false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLeftNav;