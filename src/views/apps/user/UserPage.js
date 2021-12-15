import { useEffect, useState } from "react";
import { GET_USERS } from "../../../apiService";
import Table from "./MuiTable";
import UserLi from "./UserLi";

function UserPage() {
  const [userList, setUserList] = useState(null);

  const getUserData = async () => {
    const response = await GET_USERS();
    console.log(response);
    if (response.code === "200") {
      setUserList(response?.users);
    } else {
      alert(response.msg || "something went wrong!!");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // console.log(userList, ":LIST");
  return (
    <>
      {/* <!-- BEGIN PAGE LEVEL STYLES --> */}
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/forms/theme-checkbox-radio.css"
      />
      <link
        href="plugins/jquery-ui/jquery-ui.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="assets/css/apps/contacts.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* <!-- END PAGE LEVEL STYLES -->     */}
      {/* <!--  BEGIN CONTENT AREA  --> */}
      <div id="content" class="main-content">
        <div class="layout-px-spacing">
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <div class="title">
                <h3>Users</h3>
              </div>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0);">Apps</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <a href="javascript:void(0);">Users</a>
                </li>
              </ol>
            </nav>

            {/* <div class="toggle-switch">
              <label class="switch s-icons s-outline  s-outline-secondary">
                <input type="checkbox" checked="" class="theme-shifter" />
                <span class="slider round">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-sun"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-moon"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </span>
              </label>
            </div> */}
          </div>

          <div class="row layout-spacing layout-top-spacing" id="cancel-row">
            <div class="col-lg-12">
              <div class="widget-content searchable-container list">
                <div class="row">
                  {/* <div class="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                    <form class="form-inline my-2 my-lg-0">
                      <div class="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-search"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input
                          type="text"
                          class="form-control product-search"
                          id="input-search"
                          placeholder="Search Users..."
                        />
                      </div>
                    </form>
                  </div> */}

                  <div class="col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-right text-center layout-spacing align-self-center">
                    {/* <div class="d-flex justify-content-sm-end justify-content-center">
                      <svg
                        id="btn-add-contact"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-user-plus"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>

                      <div class="switch align-self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-list view-list active-view"
                        >
                          <line x1="8" y1="6" x2="21" y2="6"></line>
                          <line x1="8" y1="12" x2="21" y2="12"></line>
                          <line x1="8" y1="18" x2="21" y2="18"></line>
                          <line x1="3" y1="6" x2="3" y2="6"></line>
                          <line x1="3" y1="12" x2="3" y2="12"></line>
                          <line x1="3" y1="18" x2="3" y2="18"></line>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-grid view-grid"
                        >
                          <rect x="3" y="3" width="7" height="7"></rect>
                          <rect x="14" y="3" width="7" height="7"></rect>
                          <rect x="14" y="14" width="7" height="7"></rect>
                          <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                      </div>
                    </div> */}

                    {/* <!-- Modal --> */}
                    {/* <div
                      class="modal fade"
                      id="addContactModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="addContactModalTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-body">
                            <i
                              class="flaticon-cancel-12 close"
                              data-dismiss="modal"
                            ></i>
                            <div class="add-contact-box">
                              <div class="add-contact-content">
                                <form id="addContactModalTitle">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="contact-name">
                                        <i class="flaticon-user-11"></i>
                                        <input
                                          type="text"
                                          id="c-name"
                                          class="form-control"
                                          placeholder="Name"
                                        />
                                        <span class="validation-text"></span>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="contact-email">
                                        <i class="flaticon-mail-26"></i>
                                        <input
                                          type="text"
                                          id="c-email"
                                          class="form-control"
                                          placeholder="Email"
                                        />
                                        <span class="validation-text"></span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="contact-occupation">
                                        <i class="flaticon-fill-area"></i>
                                        <input
                                          type="text"
                                          id="c-occupation"
                                          class="form-control"
                                          placeholder="Occupation"
                                        />
                                      </div>
                                    </div>

                                    <div class="col-md-6">
                                      <div class="contact-phone">
                                        <i class="flaticon-telephone"></i>
                                        <input
                                          type="text"
                                          id="c-phone"
                                          class="form-control"
                                          placeholder="Phone"
                                        />
                                        <span class="validation-text"></span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="contact-location">
                                        <i class="flaticon-location-1"></i>
                                        <input
                                          type="text"
                                          id="c-location"
                                          class="form-control"
                                          placeholder="Location"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button id="btn-edit" class="float-left btn">
                              Save
                            </button>

                            <button class="btn" data-dismiss="modal">
                              <i class="flaticon-delete-1"></i> Discard
                            </button>

                            <button id="btn-add" class="btn">
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div class="searchable-items list">
                  <div class="items items-header-section">
                    {/* <div class="item-content">
                      <div class="">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input"
                              id="contact-check-all"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <h4>Name</h4>
                      </div>
                      <div class="user-email">
                        <h4>Email</h4>
                      </div>
                      <div class="user-location">
                        <h4
                          // style="margin-left: 0;"
                          style={{ marginLeft: 0 }}
                        >
                          DB Access
                        </h4>
                      </div>
                      <div class="user-phone">
                        <h4
                          // style="margin-left: 3px;"
                          style={{ marginLeft: "3px" }}
                        >
                          Phone
                        </h4>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-trash-2  delete-multiple"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </div>
                    </div> */}
                  </div>
                  {/*  ------------ item start--------------- */}
                  {/* 
                  {userList &&
                    userList.map((user) => (
                      <UserLi key={user.id} user={user} />
                    ))} */}
                  <Table />

                  {/*  ------------ item end--------------- */}
                  {/* <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Alan Green">
                            Alan Green
                          </p>
                          <p class="user-work" data-occupation="Web Developer">
                            Web Developer
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="alan@mail.com">
                          alan@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="Boston, USA">
                          Boston, USA
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Linda Nelson">
                            Linda Nelson
                          </p>
                          <p class="user-work" data-occupation="Web Designer">
                            Web Designer
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="linda@mail.com">
                          linda@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p
                          class="usr-location"
                          data-location="Sydney, Australia"
                        >
                          Sydney, Australia
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Lila Perry">
                            Lila Perry
                          </p>
                          <p class="user-work" data-occupation="UX/UI Designer">
                            UX/UI Designer
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="lila@mail.com">
                          lila@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="Miami, USA">
                          Miami, USA
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Andy King">
                            Andy King
                          </p>
                          <p class="user-work" data-occupation="Web Developer">
                            Project Lead
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="andy@mail.com">
                          andy@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="Tokyo, Japan">
                          Tokyo, Japan
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Jesse Cory">
                            Jesse Cory
                          </p>
                          <p class="user-work" data-occupation="Web Developer">
                            Web Developer
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="jesse@mail.com">
                          jesse@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="Edinburgh, UK">
                          Edinburgh, UK
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Xavier">
                            Xavier
                          </p>
                          <p class="user-work" data-occupation="UX/UI Designer">
                            UX/UI Designer
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="xavier@mail.com">
                          xavier@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="New York, USA">
                          New York, USA
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Susan">
                            Susan
                          </p>
                          <p
                            class="user-work"
                            data-occupation="Project Manager"
                          >
                            Project Manager
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="susan@mail.com">
                          susan@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="Miami, USA">
                          Miami, USA
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="items">
                    <div class="item-content">
                      <div class="user-profile">
                        <div class="n-chk align-self-center text-center">
                          <label class="new-control new-checkbox checkbox-primary">
                            <input
                              type="checkbox"
                              class="new-control-input contact-chkbox"
                            />
                            <span class="new-control-indicator"></span>
                          </label>
                        </div>
                        <img src="assets/img/90x90.jpg" alt="avatar" />
                        <div class="user-meta-info">
                          <p class="user-name" data-name="Traci Lopez">
                            Traci Lopez
                          </p>
                          <p class="user-work" data-occupation="Web Developer">
                            Web Developer
                          </p>
                        </div>
                      </div>
                      <div class="user-email">
                        <p class="info-title">Email: </p>
                        <p class="usr-email-addr" data-email="traci@mail.com">
                          traci@mail.com
                        </p>
                      </div>
                      <div class="user-location">
                        <p class="info-title">Location: </p>
                        <p class="usr-location" data-location="Edinburgh, UK">
                          Edinburgh, UK
                        </p>
                      </div>
                      <div class="user-phone">
                        <p class="info-title">Phone: </p>
                        <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
                          +1 (070) 123-4567
                        </p>
                      </div>
                      <div class="action-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-edit-2 edit"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user-minus delete"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-wrapper">
          <div class="footer-section f-section-1">
            <p class="">
              Copyright © 2021
              <a target="_blank" href="https://designreset.com">
                DesignReset
              </a>
              , All rights reserved.
            </p>
          </div>
          <div class="footer-section f-section-2">
            <p class="">
              Coded with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
      {/* <!--  END CONTENT AREA  -->    */}
      {/* <!--  script  -->    */}
      <script src="plugins/jquery-ui/jquery-ui.min.js"></script>
      <script src="assets/js/apps/contact.js"></script>
      {/* <!--  script  -->    */}
    </>
  );
}

export default UserPage;
