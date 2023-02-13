import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="158"
    height="21"
    viewBox="0 0 178 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.163 20V1.964h7.785c1.338 0 2.51.243 3.514.73 1.004.488 1.784 1.19 2.342 2.105.558.916.837 2.014.837 3.294 0 1.292-.288 2.381-.863 3.268-.57.886-1.371 1.555-2.404 2.007-1.028.452-2.229.679-3.602.679h-4.65v-3.805h3.663c.576 0 1.066-.07 1.471-.211.41-.147.725-.379.942-.696.223-.317.335-.731.335-1.242 0-.516-.112-.936-.335-1.26-.217-.328-.531-.569-.942-.721-.405-.159-.895-.238-1.47-.238H5.058V20H.162Zm10.568-8.278L15.24 20H9.92l-4.403-8.278h5.214Zm12.294 8.525c-1.468 0-2.724-.291-3.77-.872a5.996 5.996 0 0 1-2.404-2.449c-.557-1.05-.836-2.269-.836-3.654 0-1.386.279-2.601.836-3.646a5.926 5.926 0 0 1 2.405-2.449c1.045-.587 2.301-.88 3.769-.88s2.724.293 3.77.88a5.926 5.926 0 0 1 2.404 2.449c.557 1.045.836 2.26.836 3.646 0 1.385-.279 2.604-.836 3.654a5.996 5.996 0 0 1-2.405 2.449c-1.045.581-2.301.872-3.769.872Zm.035-3.594a1.52 1.52 0 0 0 1.066-.413c.3-.276.531-.67.696-1.18.164-.511.246-1.12.246-1.824 0-.71-.082-1.318-.246-1.823-.165-.51-.397-.904-.696-1.18a1.52 1.52 0 0 0-1.066-.414c-.434 0-.807.138-1.118.414-.311.276-.55.67-.714 1.18-.164.505-.246 1.113-.246 1.823 0 .705.082 1.313.246 1.823.165.511.403.905.714 1.18.31.276.684.414 1.118.414ZM31.938 20V1.964h4.86v6.869h.071c.176-.458.435-.878.775-1.26.34-.387.764-.695 1.269-.924.504-.235 1.092-.352 1.76-.352.893 0 1.742.237 2.546.713.81.476 1.468 1.224 1.973 2.246.51 1.021.766 2.348.766 3.98 0 1.562-.244 2.857-.731 3.884-.481 1.028-1.127 1.794-1.938 2.299a4.888 4.888 0 0 1-2.65.757c-.635 0-1.201-.103-1.7-.308a3.924 3.924 0 0 1-1.268-.854 3.95 3.95 0 0 1-.802-1.233h-.105V20h-4.827Zm4.755-6.764c0 .658.085 1.227.256 1.709.176.476.422.845.74 1.11a1.79 1.79 0 0 0 1.153.387c.446 0 .825-.126 1.136-.379.317-.258.558-.625.722-1.1.17-.482.256-1.057.256-1.727 0-.669-.086-1.241-.256-1.717-.164-.481-.405-.848-.722-1.1-.311-.26-.69-.388-1.136-.388-.446 0-.83.129-1.154.387-.317.253-.563.62-.74 1.101-.17.476-.255 1.048-.255 1.717Zm17.781 7.01c-1.444 0-2.689-.275-3.734-.827a5.8 5.8 0 0 1-2.404-2.396c-.558-1.045-.837-2.295-.837-3.751 0-1.398.282-2.619.846-3.664a6.042 6.042 0 0 1 2.386-2.44c1.028-.58 2.24-.871 3.637-.871 1.022 0 1.947.158 2.775.475a5.812 5.812 0 0 1 2.122 1.383c.587.599 1.04 1.327 1.356 2.184.317.857.476 1.823.476 2.897v1.128H49.014v-2.678h7.609a1.866 1.866 0 0 0-.3-1.021 1.907 1.907 0 0 0-.766-.696 2.254 2.254 0 0 0-1.083-.255 2.32 2.32 0 0 0-1.083.255 2.046 2.046 0 0 0-.793.687 1.935 1.935 0 0 0-.308 1.03v2.889c0 .434.091.822.273 1.163.182.34.443.607.784.8.34.195.751.291 1.233.291.334 0 .64-.046.916-.14a2.06 2.06 0 0 0 .722-.405c.2-.182.346-.4.44-.652h4.439c-.153.94-.514 1.755-1.083 2.448-.57.687-1.324 1.221-2.264 1.603-.933.376-2.025.564-3.276.564ZM63.081 20V6.473h4.72v2.571h.141c.247-.95.637-1.647 1.171-2.087.54-.44 1.172-.66 1.894-.66.211 0 .42.017.625.052.211.03.414.074.608.133v4.147a4.352 4.352 0 0 0-.89-.184 7.996 7.996 0 0 0-.907-.062c-.475 0-.904.109-1.286.326-.375.211-.672.51-.89.898-.216.382-.325.83-.325 1.348V20h-4.861ZM82.458 6.473v3.522h-8.913V6.473h8.913ZM75.27 3.232h4.862v12.417c0 .188.032.347.097.476a.636.636 0 0 0 .3.282c.134.058.307.088.519.088.146 0 .317-.018.51-.053.2-.035.347-.064.44-.088l.705 3.417c-.217.065-.528.144-.933.238-.4.094-.875.155-1.427.185-1.115.059-2.052-.056-2.81-.344-.757-.293-1.326-.754-1.708-1.382-.381-.629-.566-1.415-.555-2.36V3.231Zm18.937-1.268V20h-4.896V1.964h4.896Zm7.253 10.427V20h-4.862V6.473h4.615v2.571h.141c.294-.857.81-1.53 1.55-2.016.746-.488 1.615-.731 2.607-.731.957 0 1.788.22 2.492.66a4.381 4.381 0 0 1 1.647 1.797c.393.763.587 1.635.581 2.615V20h-4.861v-7.61c.006-.668-.164-1.194-.511-1.575-.34-.382-.816-.573-1.427-.573a2.03 2.03 0 0 0-1.048.264 1.7 1.7 0 0 0-.678.74c-.158.317-.24.699-.246 1.145Zm24.32-5.918L121.236 20H115.6l-4.544-13.527h5.108l2.184 8.948h.141l2.184-8.948h5.108Zm7.488 13.774c-1.468 0-2.724-.291-3.77-.872a5.997 5.997 0 0 1-2.404-2.449c-.558-1.05-.836-2.269-.836-3.654 0-1.386.278-2.601.836-3.646a5.927 5.927 0 0 1 2.404-2.449c1.046-.587 2.302-.88 3.77-.88s2.724.293 3.769.88a5.921 5.921 0 0 1 2.404 2.449c.558 1.045.837 2.26.837 3.646 0 1.385-.279 2.604-.837 3.654a5.99 5.99 0 0 1-2.404 2.449c-1.045.581-2.301.872-3.769.872Zm.035-3.594c.411 0 .766-.138 1.066-.413.299-.276.531-.67.695-1.18.165-.511.247-1.12.247-1.824 0-.71-.082-1.318-.247-1.823-.164-.51-.396-.904-.695-1.18a1.522 1.522 0 0 0-1.066-.414c-.434 0-.807.138-1.118.414-.312.276-.549.67-.714 1.18-.164.505-.246 1.113-.246 1.823 0 .705.082 1.313.246 1.823.165.511.402.905.714 1.18.311.276.684.414 1.118.414ZM142.252 20V6.473h4.861V20h-4.861Zm2.43-14.936a2.405 2.405 0 0 1-1.691-.652c-.469-.435-.704-.957-.704-1.568 0-.61.235-1.133.704-1.567a2.405 2.405 0 0 1 1.691-.652c.664 0 1.227.217 1.691.652.47.434.705.957.705 1.567s-.235 1.133-.705 1.568c-.464.434-1.027.652-1.691.652Zm11.425 15.183c-1.468 0-2.724-.291-3.769-.872a6 6 0 0 1-2.405-2.449c-.557-1.05-.836-2.269-.836-3.654 0-1.386.279-2.601.836-3.646a5.93 5.93 0 0 1 2.405-2.449c1.045-.587 2.301-.88 3.769-.88 1.327 0 2.475.24 3.443.722.975.475 1.73 1.15 2.264 2.025.534.87.804 1.89.81 3.065h-4.509c-.065-.71-.27-1.25-.616-1.62-.341-.376-.781-.564-1.322-.564-.422 0-.792.123-1.109.37-.317.24-.564.608-.74 1.1-.176.488-.264 1.102-.264 1.841 0 .74.088 1.357.264 1.85.176.487.423.854.74 1.1.317.241.687.362 1.109.362.359 0 .676-.082.952-.247.276-.17.499-.417.669-.74.176-.328.282-.728.317-1.197h4.509c-.018 1.191-.291 2.23-.819 3.117-.528.88-1.277 1.562-2.246 2.043-.963.482-2.113.723-3.452.723Zm15.005 0c-1.445 0-2.689-.276-3.734-.828a5.8 5.8 0 0 1-2.405-2.396c-.557-1.045-.836-2.295-.836-3.751 0-1.398.281-2.619.845-3.664a6.042 6.042 0 0 1 2.387-2.44c1.027-.58 2.24-.871 3.637-.871 1.022 0 1.946.158 2.774.475a5.82 5.82 0 0 1 2.123 1.383c.587.599 1.039 1.327 1.356 2.184.317.857.475 1.823.475 2.897v1.128h-12.083v-2.678h7.61a1.864 1.864 0 0 0-.3-1.021 1.907 1.907 0 0 0-.766-.696 2.253 2.253 0 0 0-1.083-.255c-.394 0-.755.085-1.084.255a2.046 2.046 0 0 0-.792.687 1.927 1.927 0 0 0-.308 1.03v2.889c0 .434.091.822.273 1.163.182.34.443.607.783.8.341.195.752.291 1.233.291.335 0 .64-.046.916-.14.282-.094.523-.23.722-.405.2-.182.347-.4.441-.652h4.438c-.152.94-.513 1.755-1.083 2.448-.569.687-1.324 1.221-2.263 1.603-.934.376-2.026.564-3.276.564Z"
      fill="#1E1E1E"
    />
  </svg>
);

export default SvgComponent;
