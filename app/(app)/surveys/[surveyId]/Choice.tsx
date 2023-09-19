export default function Choice({
  name,
  number = 0,
}: {
  name: string;
  number?: number;
}) {
  return (
    <div className="text-left border-2 text-lightGrey flex justify-between rounded-xl text-sm py-4 px-4">
      <p> {name}</p>
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11.25"
          r="10"
          stroke="url(#paint0_linear_416_69)"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_416_69"
            x1="1.94118"
            y1="11.25"
            x2="21"
            y2="11.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9BE3F2" />
            <stop offset="1" stop-color="#CABDF2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
