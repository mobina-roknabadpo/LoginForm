import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="18"
      viewBox="0 0 50 18"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.3594 0.955374H18.4823H18.4031C18.2448 0.955374 18.0951 1.03408 18.0048 1.16567C17.9504 1.24807 17.9231 1.34646 17.9244 1.44607C17.9244 3.07559 17.9244 4.7051 17.9244 6.33585C17.9244 8.61348 17.9244 10.8911 17.9244 13.1687C17.9244 14.0235 17.9108 14.8733 18.5256 15.5546C19.5326 16.6701 21.5466 16.7598 22.9594 16.8594C24.9029 16.996 27.1111 16.9086 28.9198 16.124C29.0039 16.1609 29.093 16.1941 29.1845 16.2273C31.9333 17.2075 35 17.4447 37.8145 16.4561C38.0162 16.4118 38.725 16.0638 38.8673 16.1228C39.1939 16.2568 39.5304 16.3626 39.8743 16.4401C41.3254 16.7402 42.8062 16.8631 44.2871 16.8041H44.3081C45.1827 16.8041 46.0648 16.7008 46.9208 16.5335C47.6569 16.3897 48.4549 16.2335 49.0499 15.7501C50.0891 14.9065 49.8689 13.4762 49.8689 12.2882C49.8689 11.0559 49.8689 9.82363 49.8689 8.59258C49.8689 8.32079 49.8689 8.049 49.8689 7.7772C49.8652 7.50664 49.6474 7.29019 49.3814 7.29142H48.4264C47.8697 7.29019 47.3625 7.6161 47.1237 8.1277C47.0322 8.32079 46.9839 8.53232 46.9839 8.74753C46.9839 9.50879 46.9839 10.2713 46.9839 11.0325C46.9839 11.5995 46.9839 12.1664 46.9839 12.7334C46.9839 13.1282 47.125 13.9214 46.8095 14.1957C46.6586 14.326 46.4594 14.385 46.2652 14.433C44.6458 14.8364 42.9399 14.8155 41.2945 14.5363C40.1155 14.3359 40.3172 13.5537 40.3172 12.6006C40.3172 12.041 40.3172 11.4827 40.3172 10.9231C40.3172 10.0388 40.4421 9.04884 40.2281 8.18551C39.6727 5.94354 36.2249 5.94969 34.4038 5.90295C33.3869 5.8759 32.3676 5.93862 31.3606 6.08866C30.1915 6.26329 28.7342 6.37644 27.9511 7.37997C27.1396 8.4204 27.4649 9.89742 27.4649 11.1137C27.4649 11.6856 27.4649 12.2575 27.4649 12.8293C27.4649 13.598 27.5429 14.2645 26.6917 14.5941C26.3911 14.7109 26.0645 14.7466 25.7429 14.77C24.6419 14.8524 23.5309 14.8167 22.4373 14.6642C21.4563 14.5277 20.6868 14.1932 20.7153 13.0839C20.7512 11.6536 20.8031 10.2282 20.8031 8.79304C20.8031 7.57551 20.8031 6.35676 20.8031 5.13923C20.8031 4.32755 20.8031 3.5171 20.8031 2.70541C20.8031 2.60703 20.8031 2.50987 20.8031 2.41148C20.8019 2.18643 20.7487 1.96506 20.6485 1.76337C20.4048 1.26652 19.905 0.954144 19.3594 0.955374ZM0.488656 0.955374H1.4437C1.82596 0.955374 2.19091 1.1091 2.46184 1.38335L2.49276 1.41656C2.56575 1.49404 2.63008 1.58012 2.68328 1.67113C2.81565 1.89496 2.88616 2.15076 2.88616 2.41148V16.3319C2.88616 16.4622 2.83544 16.5864 2.74389 16.6787C2.65235 16.7697 2.52988 16.8201 2.40122 16.8189H1.44617C1.24576 16.8189 1.04906 16.7734 0.868446 16.686C0.701438 16.6061 0.551748 16.4967 0.424326 16.3614C0.158349 16.0797 0.00618552 15.7071 0 15.3173V1.44607C0.0111339 1.17797 0.225153 0.965213 0.488656 0.960293V0.955374ZM11.8057 11.5946C12.2906 11.5442 12.7731 11.4864 13.2518 11.4322C13.3694 11.4187 13.4857 11.4052 13.6044 11.4052H13.6094V14.0579C13.6131 14.2067 13.5624 14.3506 13.4659 14.4625C12.8919 15.0602 11.5657 14.9495 10.8073 14.9766C10.0391 15.0036 9.26838 14.984 8.50261 14.9176C7.96447 14.8708 7.20613 14.6249 6.81149 15.1291C6.73355 15.2299 6.67293 15.3418 6.63087 15.4636C6.57768 15.6124 6.53809 15.7649 6.51087 15.9199C6.45273 16.1584 6.5752 16.4056 6.79912 16.4991C6.87582 16.5286 6.95994 16.5557 7.05272 16.5815C9.25106 16.932 11.63 17.0255 13.816 16.5532C14.2885 16.4511 14.7611 16.3171 15.1755 16.0711C15.6914 15.7649 16.0601 15.2816 16.2023 14.7011C16.2531 14.4896 16.2778 14.2719 16.2766 14.0542V3.8061C16.2766 3.58351 16.2469 3.36214 16.1887 3.14815C15.7013 1.33785 13.1912 1.14723 11.6325 1.0058C10.4931 0.901262 9.3426 0.930778 8.20942 1.09434C7.20984 1.23823 5.89851 1.38581 5.13274 2.10526L5.10058 2.13723C4.93233 2.32048 4.79254 2.52832 4.68367 2.75338C4.62429 2.87759 4.57481 3.00672 4.53522 3.13954C4.44615 3.45561 4.40161 3.78274 4.40038 4.1111V4.2181V9.07713C4.39666 9.11279 4.39666 9.14969 4.40038 9.18535C4.42017 9.32801 4.44739 9.46821 4.48574 9.60718C4.59089 10.0204 4.79996 10.3967 5.09439 10.7005C5.15625 10.7644 5.22181 10.8247 5.28985 10.88C5.60284 11.126 5.96036 11.3056 6.34263 11.4089C8.12777 11.886 9.98095 11.7852 11.8057 11.5946ZM13.6057 3.96844V9.30095C11.6585 9.5297 9.73848 9.82486 7.7789 9.54815C7.7121 9.53708 7.64653 9.52109 7.5822 9.50019C7.54757 9.49035 7.51416 9.48051 7.482 9.46698C7.40901 9.43869 7.33973 9.39688 7.28035 9.34523C7.22344 9.29603 7.17767 9.23454 7.14551 9.1669C7.10097 9.07344 7.07252 8.97259 7.05891 8.86929V8.34784V7.17336V5.98535V4.77029V4.58335C7.04035 4.11233 7.16778 3.5958 7.64901 3.4101C7.82097 3.34369 8.00529 3.31909 8.18839 3.29573C9.09271 3.18012 10.0032 3.08174 10.9162 3.09773C11.7735 3.11248 12.7075 3.18381 13.4646 3.61917C13.5129 3.66836 13.55 3.72617 13.576 3.79012C13.5958 3.84669 13.6069 3.90695 13.6057 3.96844ZM32.4319 14.6704C32.8909 14.7097 33.3869 14.7294 33.8954 14.7294H34.0711C34.6525 14.7269 35.2327 14.6913 35.8104 14.6236C36.3251 14.6027 36.8273 14.4588 37.2764 14.203L37.2974 14.1797C37.342 14.1366 37.3778 14.0837 37.4026 14.0272C37.4236 13.9694 37.4335 13.9091 37.431 13.8476V8.92586C37.431 8.86437 37.4199 8.80411 37.3964 8.74753C37.3717 8.68973 37.3358 8.63808 37.2912 8.59504L37.2789 8.58274C37.217 8.52986 37.149 8.48681 37.076 8.45361C36.043 8.13262 34.9642 7.99488 33.8867 8.04654C33.1594 8.0814 31.5709 8.13016 30.4995 8.57905L30.4835 8.5975C30.4612 8.61963 30.4414 8.643 30.4241 8.66883C30.4068 8.69465 30.3919 8.72171 30.3795 8.74999C30.356 8.80657 30.3449 8.86683 30.3449 8.92832V13.8501C30.3449 13.9116 30.356 13.9718 30.3795 14.0284C30.4006 14.0776 30.429 14.1231 30.4637 14.1624L30.4835 14.1809L30.5057 14.2055C30.5602 14.251 30.6208 14.2891 30.6851 14.3186C31.2418 14.5289 31.8282 14.6482 32.422 14.6716L32.4319 14.6704ZM48.9819 2.65745H47.9254C47.365 2.65622 46.9097 3.11617 46.906 3.68558V4.49481C46.9097 5.06421 47.3662 5.52417 47.9254 5.52417H48.9819C49.5423 5.5254 49.9975 5.06544 50.0012 4.49481V3.68681C49.9975 3.11617 49.5423 2.65622 48.9819 2.65745Z"
        fill="white"
      />
    </svg>
  );
}

export default Logo;
