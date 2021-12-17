import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const script = ` var switchFunctionality1 = {

    setDefaults: function() {

        if (Cookies.getCookie('dark_mode') != "") {
            var loaderElement = document.querySelector('#load_screen');
            setTimeout( function() {
                loaderElement.style.display = "none";
                console.log('Inside app.js me')
            }, 3000);
            window.scrollTo(0, 0);
        } else {
            console.log('no needs of else;');
        }
    }

}


switchFunctionality1.setDefaults();
`;
function Error503() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate(null);
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
      <link
        href="assets/css/pages/error/style-503.css"
        rel="stylesheet"
        type="text/css"
      />
      <div className="error503 text-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 mr-auto mt-5 text-md-left text-center"></div>
          </div>
        </div>

        <div class="container-fluid error-content">
          <div
            class=""
            style={{
              paddingTop: "50px",
            }}
          >
            <h1
              class="error-number"
              style={{
                color: "#4361ee",
              }}
            >
              503
            </h1>
            <p class="mini-text">Ooops!</p>
            <p class="error-text">Service Unavailable!</p>
            <a onClick={handleGoBack} class="btn btn-secondary mt-5">
              Go Back
            </a>
          </div>
        </div>
      </div>

      {/* <!-- BEGIN GLOBAL MANDATORY SCRIPTS --> */}
      <script src="/assets/js/libs/jquery-3.1.1.min.js"></script>
      <script src="/bootstrap/js/popper.min.js"></script>
      <script src="/bootstrap/js/bootstrap.min.js"></script>
      {/* <!-- END GLOBAL MANDATORY SCRIPTS --> */}

      <script dangerouslySetInnerHTML={{ __html: script }}></script>
    </>
  );
}

export default Error503;
