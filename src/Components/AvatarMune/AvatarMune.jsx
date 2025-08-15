
const AvatarMune = () => {
  return (
    <>
      <div className="absolute top-18  -right-30  rounded-lg py-2 z-50">
        <div className="text-sm w-56 p-4 bg-white border border-gray-300/30 text-gray-500 rounded-md font-medium">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-300/40 transition">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.75V14.25C12 13.4544 11.6839 12.6913 11.1213 12.1287C10.5587 11.5661 9.79565 11.25 9 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75M15 6V10.5M17.25 8.25H12.75M9.375 5.25C9.375 6.90685 8.03185 8.25 6.375 8.25C4.71815 8.25 3.375 6.90685 3.375 5.25C3.375 3.59315 4.71815 2.25 6.375 2.25C8.03185 2.25 9.375 3.59315 9.375 5.25Z"
                  stroke="currentColor"
                  strokeOpacity="0.9"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="#">الملف الشخصي</a>
            </li>
            <div className="w-full h-px bg-gray-300/50 my-2"></div>
            <li className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded hover:bg-red-300/40 hover:text-red-500 transition">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 13.75q-.62 0-1.06-.44a1.45 1.45 0 0 1-.44-1.06V2.5H0V1h3.75V.25h4.5V1H12v1.5h-.75v9.75q0 .619-.44 1.06-.442.44-1.06.44zM9.75 2.5h-7.5v9.75h7.5zm-6 8.25h1.5V4h-1.5zm3 0h1.5V4h-1.5z"
                  fill="currentColor"
                  fillOpacity=".9"
                />
              </svg>
              <a href="#">تسجيل الخروج</a>
            </li>
            <div className="w-full h-px bg-gray-300/50 my-2"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AvatarMune;
