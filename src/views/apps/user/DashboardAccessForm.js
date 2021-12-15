import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { USER_TOGGLE_DASHBOARD_ACCESS } from "../../../apiService";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashboardAccessForm({
  dashboardAccessForm,
  setDashboardAccessForm,
  setRefresh,
}) {
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setDashboardAccessForm(null);
  };

  const handleSubmit = async () => {
    const payload = { user_id: dashboardAccessForm.id };
    setLoading(true);
    const response = await USER_TOGGLE_DASHBOARD_ACCESS(payload);
    console.log(response);
    if (response?.code === "200") {
      toast(response?.msg || "Success!");
    } else {
      toast(response?.msg || "something went wrong!");
    }
    setLoading(false);
    setRefresh((state) => !state);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <>
      <ToastContainer />
      <div>
        <Dialog
          open={dashboardAccessForm}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Handle Dashboard Access"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div
                className="details__box"
                style={{
                  position: "relative",
                }}
              >
                <strong>User's Email: {dashboardAccessForm?.email}</strong>{" "}
                <br />
                <strong>Current Access Status </strong>{" "}
                {parseFloat(dashboardAccessForm?.status) ? "Grant" : "Deny"}
                <br />
                <br />
                <strong>Agree</strong>: Allow this user to access dashboard.
                <br />
                <strong>Disagree</strong>: Stop this user to access dashboard.{" "}
                <br />
                <strong>cancel</strong>: click outside the box to close.
                {loading && (
                  <CircularProgress
                    style={{
                      position: "absolute",
                      top: "45.4%",
                      left: "43%",
                    }}
                  />
                )}
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} style={{ fontWeight: "bold" }}>
              {!parseFloat(dashboardAccessForm?.status) ? "Grant" : "Deny"}{" "}
            </Button>
            <Button onClick={handleClose} autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default DashboardAccessForm;
