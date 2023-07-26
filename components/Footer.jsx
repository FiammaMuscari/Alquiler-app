import Link from "next/link";

export default function Footer() {
  const phoneNumber = "+542236156046";
  return (
    <footer className="bg-white p-4  border-gray-300 footer-mobile">
      <section>
        <div className="flex justify-around">
          <div>
            <h4 className="text-[#a09999] font-bold mt-[1.5em] my-[0.4em]">
              Secciones
            </h4>
            <div className="flex flex-col gap-2">
              <Link className="text-[#444444] font-bold" href="/">
                Inicio
              </Link>
              <Link className="text-[#444444] font-bold" href="/about-us">
                Sobre nosotros
              </Link>
            </div>
          </div>
          <div className="extra-info my-4 flex justify-center">
            <ul className="space-y-2">
              <li className="flex items-center gap-4">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.05025 2.45162C4.78392 -0.28205 9.21608 -0.282051 11.9497 2.45162C14.6834 5.18529 14.6834 9.61744 11.9497 12.3511L7 17.3009L2.05025 12.3511C-0.683418 9.61744 -0.683418 5.18529 2.05025 2.45162ZM7 9.40137C8.10457 9.40137 9 8.50594 9 7.40137C9 6.2968 8.10457 5.40137 7 5.40137C5.89543 5.40137 5 6.2968 5 7.40137C5 8.50594 5.89543 9.40137 7 9.40137Z"
                    fill="#444444"
                  />
                </svg>

                <span className="text-[#a09999] font-medium">
                  B. Marítimo 4233, Mar del plata
                </span>
              </li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${phoneNumber}`}
              >
                <li className="flex items-center gap-4">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.40137C0 0.849082 0.447715 0.401367 1 0.401367H3.15287C3.64171 0.401367 4.0589 0.75478 4.13927 1.23697L4.87858 5.67284C4.95075 6.10587 4.73206 6.53534 4.3394 6.73167L2.79126 7.50574C3.90756 10.2797 6.12168 12.4938 8.89563 13.6101L9.6697 12.062C9.86603 11.6693 10.2955 11.4506 10.7285 11.5228L15.1644 12.2621C15.6466 12.3425 16 12.7597 16 13.2485V15.4014C16 15.9537 15.5523 16.4014 15 16.4014H13C5.8203 16.4014 0 10.5811 0 3.40137V1.40137Z"
                      fill="#444444"
                    />
                  </svg>

                  <span className="text-[#a09999] font-medium">
                    +54 223 615 6046
                  </span>
                </li>
              </a>
              <li className="flex items-center gap-4">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00300002 2.28537L8 6.28337L15.997 2.28537C15.9674 1.77581 15.7441 1.29686 15.3728 0.946594C15.0016 0.596333 14.5104 0.401274 14 0.401367H2C1.48958 0.401274 0.998447 0.596333 0.627178 0.946594C0.255908 1.29686 0.0326041 1.77581 0.00300002 2.28537Z"
                    fill="#444444"
                  />
                  <path
                    d="M16 4.51937L8 8.51937L0 4.51937V10.4014C0 10.9318 0.210714 11.4405 0.585786 11.8156C0.960859 12.1907 1.46957 12.4014 2 12.4014H14C14.5304 12.4014 15.0391 12.1907 15.4142 11.8156C15.7893 11.4405 16 10.9318 16 10.4014V4.51937Z"
                    fill="#444444"
                  />
                </svg>

                <span className="text-[#a09999] font-medium">
                  karymdp2@gmail.com.ar
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr />

      <section className="mt-4"></section>
    </footer>
  );
}
