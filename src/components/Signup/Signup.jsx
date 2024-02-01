import semiCircles from "../../assets/patterns/semi-circles.svg";

const Signup = () => {
  return (
    <section className="signup-container" id="signup">
      {/* Background Pattern */}
      <img src={semiCircles} alt="pattern" aria-hidden="true" />

      {/* Heading */}
      <h2 style={{ color: "#ffffff" }}>
        Sign up and <br /> Scoot off today
      </h2>

      {/* Apple store link */}
      <div className="appstore-btns-wrapper">
        <a
          href="https://www.apple.com/app-store"
          aria-label="apple app store"
          target="_blank"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="159" height="56">
            <g fill="none" fillRule="evenodd">
              <rect width="159" height="56" fill="#E5ECF4" rx="4" />
              <g
                fill="#495567"
                fontFamily="SpaceMono-Bold, Space Mono"
                fontWeight="bold"
              >
                <text
                  fontSize="20"
                  letterSpacing="-.893"
                  transform="translate(52 8)"
                >
                  <tspan x="0" y="37">
                    AppStore
                  </tspan>
                </text>
                <text
                  fontSize="10"
                  letterSpacing="-.446"
                  transform="translate(52 8)"
                >
                  <tspan x="0" y="11">
                    Available on the
                  </tspan>
                </text>
              </g>
              <path
                fill="#495567"
                fillRule="nonzero"
                d="M34.017 20.533c1.93 0 3.973 1.044 5.428 2.843-4.768 2.594-3.996 9.352.822 11.162-.663 1.457-.98 2.107-1.835 3.398-1.191 1.8-2.869 4.045-4.952 4.06-1.848.02-2.324-1.194-4.833-1.18-2.509.012-3.03 1.201-4.883 1.184-2.08-.018-3.672-2.043-4.863-3.843-3.33-5.033-3.681-10.941-1.627-14.084 1.462-2.231 3.766-3.536 5.93-3.536 2.204 0 3.591 1.2 5.416 1.2 1.77 0 2.848-1.204 5.397-1.204zM33.683 14c.243 1.649-.428 3.264-1.316 4.406-.948 1.226-2.586 2.175-4.17 2.126-.29-1.58.452-3.205 1.353-4.3.988-1.206 2.683-2.132 4.133-2.232z"
              />
            </g>
          </svg>
        </a>

        {/* Google play store link */}
        <a
          href="https://play.google.com/store"
          aria-label="google play store"
          target="_blank"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="56">
            <g fill="none" fillRule="evenodd">
              <rect width="182" height="56" fill="#E5ECF4" rx="4" />
              <g
                fill="#495567"
                fontFamily="SpaceMono-Bold, Space Mono"
                fontWeight="bold"
              >
                <text
                  fontSize="20"
                  letterSpacing="-.893"
                  transform="translate(52 8)"
                >
                  <tspan x="0" y="37">
                    GooglePlay
                  </tspan>
                </text>
                <text
                  fontSize="10"
                  letterSpacing="-.446"
                  transform="translate(52 8)"
                >
                  <tspan x="0" y="11">
                    Get it on
                  </tspan>
                </text>
              </g>
              <path
                fill="#495567"
                fillRule="nonzero"
                d="M19.605 14.345a2.348 2.348 0 00-2.253-.108l12.152 12.178 3.973-3.992-13.872-8.078zm-3.37 1.02A2.476 2.476 0 0016 16.42v22.276c0 .373.083.729.238 1.047l12.147-12.205-12.15-12.175zm13.27 13.297l-12.132 12.19c.322.149.665.214 1.007.214.422 0 .844-.101 1.225-.33l13.875-8.09-3.974-3.984zM38.76 25.5a.221.221 0 00-.014-.01l-3.852-2.242-4.27 4.29 4.273 4.28 3.863-2.252a2.362 2.362 0 001.144-2.033A2.36 2.36 0 0038.76 25.5z"
              />
            </g>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Signup;
