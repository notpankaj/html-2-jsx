function UserLi({ user }) {
  const { name, bio, email, phone_no, status } = user;
  console.log(user);

  return (
    <>
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
              <p class="user-name" data-name="Alan Green">
                {name || "n/a"}
              </p>
              {/* <p class="user-work" data-occupation="Web Developer">
                            {bio || ""}
                          </p> */}
            </div>
          </div>
          <div class="user-email">
            <p class="info-title">Email: </p>
            <p class="usr-email-addr" data-email="alan@mail.com">
              {/* alan@mail.com */}
              {email || "n/a"}
            </p>
          </div>
          <div class="user-location">
            <p class="info-title">Location: </p>
            <p class="usr-location" data-location="Boston, USA">
              {/* Boston, USA */}
              {parseFloat(status) ? "Grant" : "Deny"}
            </p>
          </div>
          <div class="user-phone">
            <p class="info-title">Phone: </p>
            <p class="usr-ph-no" data-phone="+1 (070) 123-4567">
              {/* +1 (070) 123-4567 */}
              {phone_no || "n/a"}
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
    </>
  );
}

export default UserLi;
