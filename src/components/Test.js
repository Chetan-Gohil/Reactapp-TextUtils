import React from "react";

function Test() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <aside
          id="layout-menu"
          className="layout-menu menu-vertical menu bg-menu-theme"
        >
          <div className="app-brand demo">
            <a href="index" className="app-brand-link">
              <span className="app-brand-logo demo me-1">
                <span style={{ color: "var(--bs-primary)" }}>
                  <img
                    src="../assets/img/tender-logo.png"
                    alt=""
                    width="30"
                    height="24"
                  />
                </span>
              </span>
              <span className="app-brand-text demo menu-text fw-semibold ms-2">
                CPWD
              </span>
            </a>
            <a
              href="javascript:void(0);"
              className="layout-menu-toggle menu-link text-large ms-auto"
            >
              <i className="mdi menu-toggle-icon d-xl-block align-middle mdi-20px"></i>
            </a>
          </div>
          <div className="menu-inner-shadow"></div>
          <ul className="menu-inner py-1">
            <li className="menu-item active">
              <a href="index" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-home-outline"></i>
                <div data-i18n="Email">My NIT</div>
              </a>
            </li>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Tender Configuration</span>
            </li>
            <li className="menu-item" style="">
              <a
                href="javascript:void(0);"
                className="menu-link menu-toggle waves-effect"
              >
                <i className="menu-icon mdi mdi-account-cog-outline mdi-20px"></i>
                <div
                  data-i18n="Form Wizard"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="0HDD2024/56/ABCR/2024"
                >
                  0HDD2024/56/ABCR/2024
                </div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="tender-config" className="menu-link">
                    <div data-i18n="Numbered">Tender config</div>
                  </a>
                </li>
                <li className="menu-item d-none">
                  <a href="sap-data" className="menu-link">
                    <div data-i18n="Icons">SAP Data</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Section Pages</span>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-view-list"></i>
                <div data-i18n="Email">Section Layout</div>
              </a>
            </li>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Reports</span>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-file-account-outline"></i>
                <div data-i18n="Email">Reports</div>
              </a>
            </li>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Logout</span>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                <i className="menu-icon tf-icons mdi mdi-logout text-danger"></i>
                <div data-i18n="Email">Logout</div>
              </a>
            </li>
          </ul>
        </aside>
        <div className="layout-page">
          <nav
            className="layout-navbar d-xxl-none d-xl-none d-lg-block d-md-block d-sm-block d-block p-0 h-auto container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a
                className="nav-item nav-link px-0 me-xl-4"
                href="javascript:void(0)"
              >
                <i className="mdi mdi-menu mdi-24px"></i>
              </a>
            </div>
          </nav>
          <div className="content-wrapper">
            <div className="container-fluid flex-grow-1 container-p-y pt-xxl-4 pt-xl-4 pt-lg-0 pt-md-0 pt-sm-0 pt-0">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title m-0 me-2">NIT List</h5>
                        <div className="dropdown">
                          <a href="tender-config" target="_self">
                            <button
                              className="dt-button create-new btn btn-primary waves-effect waves-light"
                              tabIndex="0"
                              aria-controls="DataTables_Table_0"
                              type="button"
                            >
                              <span>
                                <i className="mdi mdi-plus me-sm-1"></i>
                                <span className="d-none d-sm-inline-block">
                                  Add
                                </span>
                              </span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="table-responsive text-nowrap">
                            <table
                              className="table table-sm"
                              id="example"
                              style={{ width: "100%" }}
                            >
                              <thead className="table-light">
                                <tr>
                                  <th
                                    className="text-truncate text-center"
                                    width="5%"
                                    align="center"
                                  >
                                    No
                                  </th>
                                  <th className="text-truncate">NIT/RFP No</th>
                                  <th className="text-truncate">Project ID</th>
                                  <th className="text-truncate">Package ID</th>
                                  <th className="text-truncate">
                                    Name of Work
                                  </th>
                                  <th className="text-truncate text-end">
                                    A/A & E/S Amount
                                  </th>
                                  <th className="text-truncate">Status</th>
                                  <th className="text-truncate">Created On</th>
                                  <th className="text-truncate">Created By</th>
                                  <th className="text-truncate">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-center">1</td>
                                  <td className="text-truncate">
                                    <a href="tender-config">0HDD2024</a>
                                  </td>
                                  <td className="text-truncate">A-2200041</td>
                                  <td className="text-truncate">
                                    C-MHA-2024-02
                                  </td>
                                  <td className="text-truncate">
                                    c/o 120 beded Girls hostel electrical work,
                                    srinagar
                                  </td>
                                  <td className="text-truncate text-end">
                                    <strong>₹30,000,00</strong>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-warning rounded-pill">
                                      In-Progress
                                    </span>
                                  </td>
                                  <td>17 Feb 2024</td>
                                  <td className="text-truncate text-center">
                                    User 1
                                  </td>
                                  <td className="text-center">
                                    <div className="dropdown">
                                      <button
                                        type="button"
                                        className="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-vertical"></i>
                                      </button>
                                      <div className="dropdown-menu" style={{}}>
                                        <a
                                          className="dropdown-item waves-effect"
                                          href="javascript:void(0);"
                                        >
                                          <i className="mdi mdi-pencil-outline me-1"></i>
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item waves-effect"
                                          href="javascript:void(0);"
                                        >
                                          <i className="mdi mdi-trash-can-outline me-1"></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-center">2</td>
                                  <td className="text-truncate">
                                    <a href="tender-config">0HDD2024</a>
                                  </td>
                                  <td className="text-truncate">A-2200041</td>
                                  <td className="text-truncate">
                                    C-MHA-2024-02
                                  </td>
                                  <td className="text-truncate">
                                    c/o 120 beded Girls hostel electrical work,
                                    srinagar
                                  </td>
                                  <td className="text-truncate text-end">
                                    <strong>₹30,000,00</strong>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-success rounded-pill">
                                      Closed
                                    </span>
                                  </td>
                                  <td>17 Feb 2024</td>
                                  <td className="text-truncate text-center">
                                    User 1
                                  </td>
                                  <td className="text-center">
                                    <div className="dropdown">
                                      <button
                                        type="button"
                                        className="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-vertical"></i>
                                      </button>
                                      <div className="dropdown-menu" style={{}}>
                                        <a
                                          className="dropdown-item waves-effect"
                                          href="javascript:void(0);"
                                        >
                                          <i className="mdi mdi-pencil-outline me-1"></i>
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item waves-effect"
                                          href="javascript:void(0);"
                                        >
                                          <i className="mdi mdi-trash-can-outline me-1"></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-center">3</td>
                                  <td className="text-truncate">
                                    <a href="tender-config">0HDD2024</a>
                                  </td>
                                  <td className="text-truncate">A-2200041</td>
                                  <td className="text-truncate">
                                    C-MHA-2024-02
                                  </td>
                                  <td className="text-truncate">
                                    c/o 120 beded Girls hostel electrical work,
                                    srinagar
                                  </td>
                                  <td className="text-truncate text-end">
                                    <strong>₹30,000,00</strong>
                                  </td>
                                  <td>
                                    <span className="badge bg-label-danger rounded-pill">
                                      Pending
                                    </span>
                                  </td>
                                  <td>17 Feb 2024</td>
                                  <td className="text-truncate text-center">
                                    User 1
                                  </td>
                                  <td className="text-center">
                                    <div className="dropdown">
                                      <button
                                        type="button"
                                        className="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-vertical"></i>
                                      </button>
                                      <div className="dropdown-menu" style={{}}>
                                        <a
                                          className="dropdown-item waves-effect"
                                          href="javascript:void(0);"
                                        >
                                          <i className="mdi mdi-pencil-outline me-1"></i>
                                          Edit
                                        </a>
                                        <a
                                          className="dropdown-item waves-effect"
                                          href="javascript:void(0);"
                                        >
                                          <i className="mdi mdi-trash-can-outline me-1"></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default Test;
