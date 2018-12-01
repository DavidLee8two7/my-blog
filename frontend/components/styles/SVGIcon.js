import React from "react";

const getPath = (name, props) => {
  switch (name) {
    case "react":
      return (
        <path
          {...props}
          fill="#61dafb"
          d="M18.852 16c0 1.575-1.277 2.852-2.852 2.852s-2.852-1.277-2.852-2.852c0-1.575 1.277-2.852 2.852-2.852s2.852 1.277 2.852 2.852z
          M8.011 21.673l-0.629-0.16c-4.691-1.185-7.381-3.197-7.381-5.519s2.691-4.333 7.381-5.519l0.629-0.159 0.177 0.624c0.545 1.86 1.163 3.443 1.899 4.957l-0.082-0.186 0.135 0.284-0.135 0.284c-0.656 1.329-1.275 2.912-1.761 4.551l-0.056 0.22-0.177 0.623zM7.089 11.933c-3.565 1.001-5.753 2.533-5.753 4.061 0 1.527 2.188 3.059 5.753 4.061 0.512-1.62 1.046-2.965 1.662-4.263l-0.086 0.202c-0.531-1.098-1.066-2.443-1.511-3.828l-0.065-0.234zM23.989 21.673l-0.177-0.625c-0.544-1.859-1.162-3.441-1.9-4.954l0.081 0.184-0.135-0.284 0.135-0.284c0.656-1.329 1.275-2.911 1.762-4.55l0.056-0.221 0.177-0.624 0.631 0.159c4.689 1.185 7.38 3.197 7.38 5.52s-2.691 4.333-7.38 5.519l-0.631 0.16zM23.335 15.995c0.64 1.385 1.169 2.747 1.576 4.061 3.567-1.003 5.753-2.535 5.753-4.061 0-1.528-2.188-3.059-5.753-4.061-0.511 1.619-1.045 2.963-1.662 4.262l0.086-0.2z
          M7.080 11.927l-0.177-0.623c-1.319-4.648-0.919-7.979 1.097-9.141 1.977-1.141 5.152 0.207 8.479 3.621l0.453 0.465-0.453 0.465c-1.146 1.19-2.207 2.482-3.162 3.853l-0.068 0.103-0.18 0.257-0.313 0.027c-1.875 0.151-3.596 0.439-5.264 0.86l0.218-0.047-0.629 0.159zM9.608 3.087c-0.357 0-0.673 0.077-0.94 0.231-1.325 0.764-1.56 3.42-0.647 7.004 1.21-0.285 2.681-0.521 4.18-0.658l0.131-0.010c0.894-1.264 1.792-2.37 2.756-3.414l-0.020 0.022c-2.080-2.025-4.049-3.175-5.46-3.175zM22.393 30.236c-0.001 0-0.001 0 0 0-1.9 0-4.34-1.431-6.872-4.031l-0.453-0.465 0.453-0.465c1.146-1.19 2.206-2.482 3.16-3.854l0.068-0.103 0.18-0.257 0.312-0.027c1.875-0.15 3.597-0.438 5.267-0.858l-0.218 0.046 0.629-0.159 0.179 0.624c1.316 4.645 0.917 7.977-1.099 9.139-0.449 0.259-0.988 0.411-1.562 0.411-0.016 0-0.031-0-0.047-0l0.002 0zM16.932 25.728c2.080 2.025 4.049 3.175 5.46 3.175h0.001c0.356 0 0.673-0.077 0.939-0.231 1.325-0.764 1.561-3.421 0.647-7.005-1.212 0.286-2.682 0.522-4.182 0.658l-0.13 0.010c-0.893 1.265-1.791 2.371-2.755 3.416l0.020-0.022z
          M24.92 11.927l-0.629-0.159c-1.453-0.376-3.175-0.664-4.939-0.806l-0.111-0.007-0.312-0.027-0.18-0.257c-1.021-1.474-2.082-2.766-3.237-3.966l0.009 0.010-0.453-0.465 0.453-0.465c3.325-3.413 6.499-4.761 8.479-3.621 2.016 1.163 2.416 4.493 1.099 9.14l-0.179 0.624zM19.667 9.653c1.523 0.139 2.969 0.364 4.312 0.668 0.915-3.584 0.679-6.24-0.647-7.004-1.317-0.761-3.793 0.405-6.4 2.944 0.943 1.022 1.841 2.128 2.666 3.289l0.069 0.103zM9.608 30.236c-0.014 0-0.030 0-0.046 0-0.574 0-1.113-0.152-1.577-0.419l0.015 0.008c-2.016-1.161-2.416-4.492-1.097-9.139l0.176-0.624 0.629 0.159c1.54 0.388 3.239 0.661 5.047 0.812l0.313 0.027 0.179 0.257c1.022 1.475 2.083 2.767 3.239 3.967l-0.010-0.010 0.453 0.465-0.453 0.465c-2.531 2.6-4.971 4.031-6.868 4.031zM8.021 21.667c-0.915 3.584-0.679 6.241 0.647 7.005 1.316 0.751 3.791-0.407 6.4-2.944-0.943-1.022-1.841-2.129-2.667-3.29l-0.069-0.103c-1.629-0.146-3.099-0.382-4.534-0.711l0.224 0.043z
          M16 22.504c-1.097 0-2.225-0.048-3.355-0.141l-0.313-0.027-0.18-0.257c-0.544-0.768-1.139-1.691-1.697-2.639l-0.103-0.19c-0.452-0.758-0.971-1.732-1.45-2.728l-0.105-0.243-0.133-0.284 0.133-0.284c0.584-1.239 1.102-2.212 1.658-3.161l-0.103 0.191c0.552-0.955 1.159-1.907 1.8-2.829l0.18-0.257 0.313-0.027c1.005-0.090 2.174-0.142 3.355-0.142s2.35 0.052 3.505 0.153l-0.15-0.011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 3.567 3.252 5.56l0.104 0.24 0.135 0.284-0.135 0.284c-1.058 2.232-2.176 4.133-3.439 5.925l0.083-0.125-0.179 0.257-0.312 0.027c-1.129 0.093-2.259 0.141-3.356 0.141zM13.071 21.059c1.973 0.148 3.885 0.148 5.86 0 1.004-1.445 1.978-3.104 2.827-4.836l0.101-0.228c-0.947-1.958-1.922-3.617-3.012-5.19l0.083 0.126c-0.877-0.071-1.898-0.111-2.929-0.111s-2.052 0.040-3.063 0.119l0.134-0.008c-1.008 1.447-1.983 3.106-2.83 4.84l-0.099 0.224c0.951 1.96 1.926 3.619 3.014 5.193l-0.085-0.13z"
        />
      );
    case "apollo":
      return (
        <path
          {...props}
          d="-284.735,51.4 -309.046,51.4 -344.147,-39.697 -322.157,-39.697 -316.421,-24.266
          -283.255,-24.266 -289.259,-7.191 -311.095,-7.191 -296.89,32.006 -271.622,-39.697 -249.634,-39.697 M84.567-39.697V51.4h19.531v-74.025h38.514v-17.072H84.567z "
        />
      );
    case "graphql":
      return (
        <path
          {...props}
          fill="#e535ab"
          d="M18.735 3.668l6.58 3.8c1.088-1.145 2.897-1.191 4.043-0.103 0.197 0.187 0.365 0.401 0.503 0.636 0.785 1.371 0.309 3.119-1.061 3.904-0.232 0.133-0.481 0.233-0.744 0.297v7.599c1.528 0.364 2.472 1.897 2.107 3.425-0.064 0.272-0.169 0.533-0.309 0.775-0.789 1.364-2.535 1.832-3.903 1.043-0.261-0.151-0.5-0.345-0.701-0.572l-6.54 3.776c0.496 1.499-0.317 3.113-1.815 3.608-0.289 0.095-0.589 0.144-0.893 0.144-1.575 0.001-2.852-1.273-2.853-2.848 0-0.273 0.039-0.547 0.117-0.812l-6.581-3.796c-1.088 1.139-2.895 1.183-4.035 0.093-1.139-1.088-1.181-2.895-0.093-4.035 0.377-0.396 0.861-0.675 1.392-0.804l0.001-7.599c-1.533-0.368-2.477-1.911-2.108-3.445 0.063-0.264 0.164-0.519 0.299-0.755 0.789-1.365 2.536-1.832 3.903-1.043 0.236 0.135 0.452 0.304 0.64 0.503l6.584-3.8c-0.448-1.511 0.415-3.096 1.921-3.543 0.263-0.079 0.539-0.117 0.813-0.117 1.575-0.001 2.852 1.272 2.853 2.845 0.001 0.279-0.040 0.557-0.119 0.823zM18.048 4.837c-0.025 0.028-0.049 0.052-0.077 0.077l8.615 14.92c0.035-0.012 0.075-0.021 0.109-0.031v-7.609c-1.527-0.377-2.456-1.923-2.077-3.451 0.008-0.032 0.016-0.065 0.025-0.096l-6.595-3.811zM14.028 4.916l-0.080-0.080-6.595 3.803c0.436 1.513-0.436 3.091-1.948 3.527-0.035 0.011-0.068 0.019-0.101 0.028v7.611l0.112 0.031 8.612-14.919zM16.796 5.592c-0.52 0.149-1.071 0.149-1.589 0l-8.613 14.919c0.392 0.377 0.669 0.86 0.8 1.388h17.215c0.129-0.531 0.409-1.015 0.804-1.392l-8.616-14.915zM18.111 27.228l6.551-3.784c-0.020-0.063-0.036-0.125-0.051-0.189h-17.221l-0.028 0.111 6.585 3.803c0.517-0.539 1.245-0.871 2.053-0.871 0.836 0 1.587 0.359 2.111 0.931z"
        />
      );
    case "prisma":
      return (
        <path
          {...props}
          d="M99.082 22.213l-1.044.035c-.785.024-1.369.166-1.753.425-.383.26-.575.655-.575 1.186 0 .761.437 1.142 1.31 1.142.625 0 1.125-.18 1.5-.54.375-.36.562-.838.562-1.434v-.814zm.796 4.584l-.523-1.345h-.07c-.455.572-.922.969-1.403 1.19-.48.221-1.108.332-1.88.332-.95 0-1.698-.271-2.244-.814-.546-.543-.819-1.316-.819-2.319 0-1.05.367-1.824 1.102-2.323.735-.498 1.842-.774 3.323-.827l1.717-.054v-.433c0-1.003-.513-1.505-1.54-1.505-.79 0-1.72.239-2.788.717l-.894-1.823c1.14-.596 2.402-.894 3.788-.894 1.328 0 2.346.29 3.054.867.708.578 1.062 1.458 1.062 2.638v6.593h-1.885zm-14.82 0h-2.7v-5.779c0-.714-.12-1.25-.358-1.606-.24-.357-.615-.536-1.129-.536-.69 0-1.191.254-1.504.761-.313.508-.47 1.343-.47 2.505v4.655H76.2v-9.894h2.062l.363 1.265h.15c.265-.454.65-.81 1.15-1.066.502-.257 1.077-.385 1.726-.385 1.481 0 2.484.484 3.01 1.451h.238c.266-.46.657-.817 1.173-1.07.516-.254 1.099-.381 1.748-.381 1.12 0 1.97.288 2.544.863.575.575.863 1.497.863 2.765v6.452h-2.708v-5.779c0-.714-.12-1.25-.358-1.606-.24-.357-.615-.536-1.129-.536-.66 0-1.155.236-1.482.708-.328.472-.492 1.222-.492 2.248v4.965zM74.364 23.86c0 1.015-.353 1.788-1.058 2.32-.705.53-1.76.796-3.164.796-.72 0-1.333-.049-1.84-.146a6.953 6.953 0 0 1-1.425-.43v-2.23a9.398 9.398 0 0 0 1.695.593c.628.16 1.181.239 1.659.239.98 0 1.47-.283 1.47-.85a.71.71 0 0 0-.195-.517c-.13-.133-.355-.283-.673-.452a17.096 17.096 0 0 0-1.275-.588c-.76-.319-1.32-.614-1.677-.885a2.482 2.482 0 0 1-.778-.934c-.163-.351-.244-.783-.244-1.297 0-.879.34-1.558 1.022-2.04.682-.48 1.648-.72 2.898-.72 1.193 0 2.352.26 3.479.778l-.814 1.947a15.04 15.04 0 0 0-1.39-.522 4.365 4.365 0 0 0-1.319-.203c-.796 0-1.194.215-1.194.646 0 .242.128.451.385.628.256.177.818.44 1.686.788.773.313 1.34.604 1.699.876.36.271.625.584.796.938.172.354.257.776.257 1.265m-12.202 2.938h2.7v-9.894h-2.7v9.894zm-.115-12.452c0-.879.49-1.318 1.469-1.318.979 0 1.469.439 1.469 1.318 0 .42-.122.745-.367.978-.245.233-.612.35-1.102.35-.98 0-1.47-.443-1.47-1.328zm-2.229 2.372c.366 0 .67.026.911.08l-.203 2.53a3.101 3.101 0 0 0-.797-.088c-.861 0-1.532.221-2.013.664-.48.442-.721 1.062-.721 1.858v5.036h-2.7v-9.894h2.045l.398 1.663h.133a3.722 3.722 0 0 1 1.244-1.34 3.066 3.066 0 0 1 1.703-.51M46.35 19.949h.902c.844 0 1.475-.167 1.894-.5.42-.334.629-.82.629-1.456 0-.643-.176-1.118-.527-1.425-.351-.307-.901-.46-1.65-.46H46.35v3.84zm6.195-2.054c0 1.392-.435 2.457-1.305 3.195-.87.737-2.108 1.106-3.713 1.106H46.35v4.602h-2.743V13.858h4.133c1.57 0 2.763.338 3.58 1.013.817.676 1.226 1.684 1.226 3.023zm-19.637 12.58L19.151 1.263a2.208 2.208 0 0 0-1.88-1.258 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.254L11.864 37.04c-.548.163-1.074-.312-.96-.866l6.418-30.73c.12-.575.914-.667 1.165-.134l11.881 25.23a.858.858 0 0 1-.542 1.188z"
        />
      );
    case "sass":
      return (
        <path
          {...props}
          d="M27.263 27.269h-4.739v-7.425c0-1.771-0.036-4.049-2.469-4.049-2.471 0-2.848 1.927-2.848 3.919v7.556h-4.739v-15.269h4.552v2.081h0.061c0.636-1.2 2.183-2.467 4.493-2.467 4.801 0 5.689 3.16 5.689 7.273v8.381zM7.116 9.911c-1.525 0-2.751-1.235-2.751-2.753 0-1.517 1.227-2.751 2.751-2.751 1.52 0 2.752 1.233 2.752 2.751 0 1.519-1.233 2.753-2.752 2.753zM9.492 27.269h-4.752v-15.269h4.752v15.269zM29.633 0h-27.272c-1.305 0-2.361 1.032-2.361 2.305v27.389c0 1.275 1.056 2.305 2.361 2.305h27.268c1.304 0 2.371-1.031 2.371-2.305v-27.389c0-1.273-1.067-2.305-2.371-2.305h0.004z"
        />
      );
    case "bootsrap":
      return (
        <path
          {...props}
          d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z"
        />
      );
    case "materialize":
      return (
        <path
          {...props}
          d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  viewBox = "0 0 32 32",
  width = "100%",
  height = "100%"
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name)}
  </svg>
);

export default SVGIcon;
