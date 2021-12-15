import NavBar from "../components/NavBar";

function Dashboard({ children }) {
  return (
    <>
      {/* <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES --> */}
      <link
        href="plugins/apex/apexcharts.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="assets/css/dashboard/dash_1.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* <style class="dark-theme">
        #chart-2 path {
            stroke: #0e1726;
        }
    </style> */}
      {/*     
    <!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES --> */}

      {/* <!-- BEGIN LOADER --> */}
      <div id="load_screen" style={{ display: "none" }}>
        <div class="loader">
          <div class="loader-content">
            <div class="spinner-grow align-self-center"></div>
          </div>
        </div>
      </div>
      {/* <!--  END LOADER --> */}

      {/* <!--  BEGIN NAVBAR  --> */}
      <NavBar />
      {/* <!--  END NAVBAR  --> */}

      {/* <!--  BEGIN MAIN CONTAINER  --> */}
      <div class="main-container" id="container">
        <div class="overlay"></div>
        <div class="search-overlay"></div>

        {/* <!--  BEGIN CONTENT PART  --> */}
        {children}
        {/* <!--  END CONTENT PART  --> */}
      </div>
      {/* <!-- END MAIN CONTAINER -->    */}

      {/* <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS --> */}
      <script src="plugins/apex/apexcharts.min.js"></script>
      <script src="assets/js/dashboard/dash_1.js"></script>
      {/* <!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS --> */}
    </>
  );
}

export default Dashboard;
