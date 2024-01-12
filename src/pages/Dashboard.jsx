import React from 'react'

function Dashboard() {
  return (
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          {/* Dashboard Analytics Start */}
          <section id="dashboard-analytics">
            <div className="row match-height">
              {/* Greetings Card starts */}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card card-congratulations">
                  <div className="card-body text-center">
                    <img
                      src="/app-assets/images/elements/decore-left.png"
                      className="congratulations-img-left"
                      alt="card-img-left"
                    />
                    <img
                      src="/app-assets/images/elements/decore-right.png"
                      className="congratulations-img-right"
                      alt="card-img-right"
                    />
                    <div className="avatar avatar-xl bg-primary shadow">
                      <div className="avatar-content">
                        <i data-feather="award" className="font-large-1" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h1 className="mb-1 text-white">Congratulations John,</h1>
                      <p className="card-text m-auto w-75">
                        You have done <strong>57.6%</strong> more sales today. Check
                        your new badge in your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Greetings Card ends */}
              {/* Subscribers Chart Card starts */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header flex-column align-items-start pb-0">
                    <div className="avatar bg-light-primary p-50 m-0">
                      <div className="avatar-content">
                        <i data-feather="users" className="font-medium-5" />
                      </div>
                    </div>
                    <h2 className="fw-bolder mt-1">92.6k</h2>
                    <p className="card-text">Subscribers Gained</p>
                  </div>
                  <div id="gained-chart" />
                </div>
              </div>
              {/* Subscribers Chart Card ends */}
              {/* Orders Chart Card starts */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header flex-column align-items-start pb-0">
                    <div className="avatar bg-light-warning p-50 m-0">
                      <div className="avatar-content">
                        <i data-feather="package" className="font-medium-5" />
                      </div>
                    </div>
                    <h2 className="fw-bolder mt-1">38.4K</h2>
                    <p className="card-text">Orders Received</p>
                  </div>
                  <div id="order-chart" />
                </div>
              </div>
              {/* Orders Chart Card ends */}
            </div>
            <div className="row match-height">
              {/* Avg Sessions Chart Card starts */}
              <div className="col-lg-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row pb-50">
                      <div className="col-sm-6 col-12 d-flex justify-content-between flex-column order-sm-1 order-2 mt-1 mt-sm-0">
                        <div className="mb-1 mb-sm-0">
                          <h2 className="fw-bolder mb-25">2.7K</h2>
                          <p className="card-text fw-bold mb-2">Avg Sessions</p>
                          <div className="font-medium-2">
                            <span className="text-success me-25">+5.2%</span>
                            <span>vs last 7 days</span>
                          </div>
                        </div>
                        <button type="button" className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                      <div className="col-sm-6 col-12 d-flex justify-content-between flex-column text-end order-sm-2 order-1">
                        <div className="dropdown chart-dropdown">
                          <button
                            className="btn btn-sm border-0 dropdown-toggle p-50"
                            type="button"
                            id="dropdownItem5"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 Days
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownItem5"
                          >
                            <a className="dropdown-item" href="#">
                              Last 28 Days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Year
                            </a>
                          </div>
                        </div>
                        <div id="avg-sessions-chart" />
                      </div>
                    </div>
                    <hr />
                    <div className="row avg-sessions pt-50">
                      <div className="col-6 mb-2">
                        <p className="mb-50">Goal: $100000</p>
                        <div
                          className="progress progress-bar-primary"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={50}
                            aria-valuemax={100}
                            style={{ width: "50%" }}
                          />
                        </div>
                      </div>
                      <div className="col-6 mb-2">
                        <p className="mb-50">Users: 100K</p>
                        <div
                          className="progress progress-bar-warning"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={60}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <p className="mb-50">Retention: 90%</p>
                        <div
                          className="progress progress-bar-danger"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={70}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <p className="mb-50">Duration: 1yr</p>
                        <div
                          className="progress progress-bar-success"
                          style={{ height: 6 }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={90}
                            aria-valuemax={100}
                            style={{ width: "90%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Avg Sessions Chart Card ends */}
              {/* Support Tracker Chart Card starts */}
              <div className="col-lg-6 col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between pb-0">
                    <h4 className="card-title">Support Tracker</h4>
                    <div className="dropdown chart-dropdown">
                      <button
                        className="btn btn-sm border-0 dropdown-toggle p-50"
                        type="button"
                        id="dropdownItem4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Last 7 Days
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownItem4"
                      >
                        <a className="dropdown-item" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-2 col-12 d-flex flex-column flex-wrap text-center">
                        <h1 className="font-large-2 fw-bolder mt-2 mb-0">163</h1>
                        <p className="card-text">Tickets</p>
                      </div>
                      <div className="col-sm-10 col-12 d-flex justify-content-center">
                        <div id="support-trackers-chart" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                      <div className="text-center">
                        <p className="card-text mb-50">New Tickets</p>
                        <span className="font-large-1 fw-bold">29</span>
                      </div>
                      <div className="text-center">
                        <p className="card-text mb-50">Open Tickets</p>
                        <span className="font-large-1 fw-bold">63</span>
                      </div>
                      <div className="text-center">
                        <p className="card-text mb-50">Response Time</p>
                        <span className="font-large-1 fw-bold">1d</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Support Tracker Chart Card ends */}
            </div>
            <div className="row match-height">
              {/* Timeline Card */}
              <div className="col-lg-4 col-12">
                <div className="card card-user-timeline">
                  <div className="card-header">
                    <div className="d-flex align-items-center">
                      <i data-feather="list" className="user-timeline-title-icon" />
                      <h4 className="card-title">User Timeline</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="timeline ms-50">
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-indicator" />
                        <div className="timeline-event">
                          <h6>12 Invoices have been paid</h6>
                          <p>Invoices are paid to the company</p>
                          <div className="d-flex align-items-center">
                            <img
                              className="me-1"
                              src="/app-assets/images/icons/json.png"
                              alt="data.json"
                              height={23}
                            />
                            <h6 className="more-info mb-0">data.json</h6>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-warning timeline-point-indicator" />
                        <div className="timeline-event">
                          <h6>Client Meeting</h6>
                          <p>Project meeting with Carl</p>
                          <div className="d-flex align-items-center">
                            <div className="avatar me-50">
                              <img
                                src="/app-assets/images/portrait/small/avatar-s-9.jpg"
                                alt="Avatar"
                                width={38}
                                height={38}
                              />
                            </div>
                            <div className="more-info">
                              <h6 className="mb-0">Carl Roy (Client)</h6>
                              <p className="mb-0">CEO of Infibeam</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-info timeline-point-indicator" />
                        <div className="timeline-event">
                          <h6>Create a new project</h6>
                          <p>Add files to new design folder</p>
                          <div className="avatar-group">
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="bottom"
                              title="Billy Hopkins"
                              className="avatar pull-up"
                            >
                              <img
                                src="/app-assets/images/portrait/small/avatar-s-9.jpg"
                                alt="Avatar"
                                width={33}
                                height={33}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="bottom"
                              title="Amy Carson"
                              className="avatar pull-up"
                            >
                              <img
                                src="/app-assets/images/portrait/small/avatar-s-6.jpg"
                                alt="Avatar"
                                width={33}
                                height={33}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="bottom"
                              title="Brandon Miles"
                              className="avatar pull-up"
                            >
                              <img
                                src="/app-assets/images/portrait/small/avatar-s-8.jpg"
                                alt="Avatar"
                                width={33}
                                height={33}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="bottom"
                              title="Daisy Weber"
                              className="avatar pull-up"
                            >
                              <img
                                src="/app-assets/images/portrait/small/avatar-s-7.jpg"
                                alt="Avatar"
                                width={33}
                                height={33}
                              />
                            </div>
                            <div
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="bottom"
                              title="Jenny Looper"
                              className="avatar pull-up"
                            >
                              <img
                                src="/app-assets/images/portrait/small/avatar-s-20.jpg"
                                alt="Avatar"
                                width={33}
                                height={33}
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-item">
                        <span className="timeline-point timeline-point-danger timeline-point-indicator" />
                        <div className="timeline-event">
                          <h6>Update project for client</h6>
                          <p className="mb-0">Update files as per new design</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Timeline Card */}
              {/* Sales Stats Chart Card starts */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-start pb-1">
                    <div>
                      <h4 className="card-title mb-25">Sales</h4>
                      <p className="card-text">Last 6 months</p>
                    </div>
                    <div className="dropdown chart-dropdown">
                      <i
                        data-feather="more-vertical"
                        className="font-medium-3 cursor-pointer"
                        data-bs-toggle="dropdown"
                      />
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Last 28 Days
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Year
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-inline-block me-1">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="circle"
                          className="font-small-3 text-primary me-50"
                        />
                        <h6 className="mb-0">Sales</h6>
                      </div>
                    </div>
                    <div className="d-inline-block">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="circle"
                          className="font-small-3 text-info me-50"
                        />
                        <h6 className="mb-0">Visits</h6>
                      </div>
                    </div>
                    <div id="sales-visit-chart" className="mt-50" />
                  </div>
                </div>
              </div>
              {/* Sales Stats Chart Card ends */}
              {/* App Design Card */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card card-app-design">
                  <div className="card-body">
                    <span className="badge badge-light-primary">03 Sep, 20</span>
                    <h4 className="card-title mt-1 mb-75 pt-25">App design</h4>
                    <p className="card-text font-small-2 mb-2">
                      You can Find Only Post and Quotes Related to IOS like ipad app
                      design, iphone app design
                    </p>
                    <div className="design-group mb-2 pt-50">
                      <h6 className="section-label">Team</h6>
                      <span className="badge badge-light-warning me-1">Figma</span>
                      <span className="badge badge-light-primary">Wireframe</span>
                    </div>
                    <div className="design-group pt-25">
                      <h6 className="section-label">Members</h6>
                      <div className="avatar">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-9.jpg"
                          width={34}
                          height={34}
                          alt="Avatar"
                        />
                      </div>
                      <div className="avatar bg-light-danger">
                        <div className="avatar-content">PI</div>
                      </div>
                      <div className="avatar">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-14.jpg"
                          width={34}
                          height={34}
                          alt="Avatar"
                        />
                      </div>
                      <div className="avatar">
                        <img
                          src="/app-assets/images/portrait/small/avatar-s-7.jpg"
                          width={34}
                          height={34}
                          alt="Avatar"
                        />
                      </div>
                      <div className="avatar bg-light-secondary">
                        <div className="avatar-content">AL</div>
                      </div>
                    </div>
                    <div className="design-planning-wrapper mb-2 py-75">
                      <div className="design-planning">
                        <p className="card-text mb-25">Due Date</p>
                        <h6 className="mb-0">12 Apr, 21</h6>
                      </div>
                      <div className="design-planning">
                        <p className="card-text mb-25">Budget</p>
                        <h6 className="mb-0">$49251.91</h6>
                      </div>
                      <div className="design-planning">
                        <p className="card-text mb-25">Cost</p>
                        <h6 className="mb-0">$840.99</h6>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary w-100">
                      Join Team
                    </button>
                  </div>
                </div>
              </div>
              {/*/ App Design Card */}
            </div>
            {/* List DataTable */}
            <div className="row">
              <div className="col-12">
                <div className="card invoice-list-wrapper">
                  <div className="card-datatable table-responsive">
                    <table className="invoice-list-table table">
                      <thead>
                        <tr>
                          <th />
                          <th>#</th>
                          <th>
                            <i data-feather="trending-up" />
                          </th>
                          <th>Client</th>
                          <th>Total</th>
                          <th className="text-truncate">Issued Date</th>
                          <th>Balance</th>
                          <th>Invoice Status</th>
                          <th className="cell-fit">Actions</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*/ List DataTable */}
          </section>
          {/* Dashboard Analytics end */}
        </div>
      </div>
    </div>

  )
}

export default Dashboard