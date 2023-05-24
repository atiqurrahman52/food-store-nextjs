
const ContactUs = () => {
    return (
        <section id="contact">
    <div className="container">
      <div className="py-20">
        <div className="flex flex-col justify-center items-center mb-6 md:mb-8">
          <div className="relative">
            <img src="/assets/images/share/leaf.png" alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
              Get in touch!
            </h3>
            <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
              Contact us for a quote or anything
            </h6>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-5 md:space-y-8">
            <div>
              <h3 className="font-Montserrat font-semibold text-sm md:text-xl text-text_color mb-2">Contact Details</h3>
              <p className="font-Montserrat text-xs md:text-base text-p_text">Lorem ipsum dolor sit amet consectetur adipisc
                elit tortor eu egestas morbi sem vulputate.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <a className="flex flex-col items-center rounded-2xl border border-[#EBEBEE]w-full h-[86px] pt-4 px-5"
                href="mailto:example@example.com">
                <span className="mb-3">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.625 7.49981V8.25481C18.625 8.59335 18.5334 8.92557 18.3598 9.21622C18.1862 9.50687 17.9372 9.74511 17.6392 9.90565L12.2408 12.8123M2.375 7.49981V8.25481C2.37499 8.59335 2.46663 8.92557 2.6402 9.21622C2.81377 9.50687 3.06279 9.74511 3.36083 9.90565L8.75917 12.8123M8.75917 12.8123L9.61083 12.354C9.88409 12.2068 10.1896 12.1297 10.5 12.1297C10.8104 12.1297 11.1159 12.2068 11.3892 12.354L12.2417 12.8123L16.125 14.904M8.75917 12.8123L4.875 14.904M18.625 16.2498C18.625 16.7471 18.4275 17.224 18.0758 17.5756C17.7242 17.9273 17.2473 18.1248 16.75 18.1248H4.25C3.75272 18.1248 3.27581 17.9273 2.92417 17.5756C2.57254 17.224 2.375 16.7471 2.375 16.2498V7.36981C2.37514 7.03142 2.46685 6.69937 2.64041 6.40888C2.81397 6.11839 3.06291 5.88029 3.36083 5.71981L9.61083 2.35315C9.88409 2.20596 10.1896 2.12891 10.5 2.12891C10.8104 2.12891 11.1159 2.20596 11.3892 2.35315L17.6392 5.71981C17.9371 5.88029 18.186 6.11839 18.3596 6.40888C18.5332 6.69937 18.6249 7.03142 18.625 7.36981V16.2498Z"
                      stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </span>
                <span className="font-Montserrat text-base text-p_text">example@example.com</span>
              </a>
              <a className="flex flex-col items-center rounded-2xl border border-[#EBEBEE] w-full h-[86px] pt-4"
                href="tel:+0123-456789">
                <span className="mb-3">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.375 5.625C2.375 12.5283 7.97167 18.125 14.875 18.125H16.75C17.2473 18.125 17.7242 17.9275 18.0758 17.5758C18.4275 17.2242 18.625 16.7473 18.625 16.25V15.1067C18.625 14.6767 18.3325 14.3017 17.915 14.1975L14.2292 13.2758C13.8625 13.1842 13.4775 13.3217 13.2517 13.6233L12.4433 14.7008C12.2083 15.0142 11.8025 15.1525 11.435 15.0175C10.0707 14.5159 8.83179 13.7238 7.80398 12.696C6.77618 11.6682 5.98406 10.4293 5.4825 9.065C5.3475 8.6975 5.48583 8.29167 5.79917 8.05667L6.87667 7.24833C7.17917 7.0225 7.31583 6.63667 7.22417 6.27083L6.3025 2.585C6.25178 2.38225 6.13477 2.20225 5.97004 2.07361C5.80532 1.94498 5.60234 1.87507 5.39333 1.875H4.25C3.75272 1.875 3.27581 2.07254 2.92417 2.42417C2.57254 2.77581 2.375 3.25272 2.375 3.75V5.625Z"
                      stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-Montserrat text-base text-p_text">+0123-456789</span>
              </a>
            </div>

            <div className="border">
            </div>
            <h3 className="font-Montserrat font-semibold text-sm md:text-xl text-text_color">Follow us on social media</h3>
            <div className="flex items-center gap-5">
              <span>
                <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.1482 11.165L12.8219 7.57282H8.60732V5.24272C8.60732 4.25973 9.19497 3.30097 11.0827 3.30097H13V0.242718C13 0.242718 11.2607 0 9.59862 0C6.12608 0 3.85847 1.72085 3.85847 4.83495V7.57282H0V11.165H3.85847V19.8495C4.6331 19.949 5.42559 20 6.23289 20C7.0402 20 7.83268 19.949 8.60732 19.8495V11.165H12.1482Z"
                    fill="#606060" />
                </svg>

              </span>
              <span>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.90544 20C4.36365 20 1.99428 19.1818 0 17.7701C1.69321 17.8914 4.68134 17.601 6.53995 15.6389C3.74399 15.497 2.48306 13.1237 2.31859 12.1095C2.55616 12.211 3.68917 12.3327 4.32877 12.0487C1.11249 11.1562 0.619086 8.03245 0.728732 7.07911C1.33178 7.54564 2.35514 7.70791 2.75718 7.66734C-0.239806 5.29412 0.838378 1.72414 1.36833 0.953347C3.51908 4.25101 6.74237 6.1031 10.73 6.20612C10.6548 5.84118 10.6151 5.46124 10.6151 5.07099C10.6151 2.27036 12.6605 0 15.1837 0C16.502 0 17.6899 0.619786 18.5238 1.61116C19.4047 1.3827 20.7305 0.847885 21.3787 0.385396C21.052 1.68357 20.0349 2.76651 19.4196 3.16789C19.4146 3.15418 19.4247 3.18155 19.4196 3.16789C19.9601 3.07742 21.4223 2.76641 22 2.33266C21.7143 3.06196 20.636 4.27455 19.7511 4.95341C19.9157 12.9896 14.3601 20 6.90544 20Z"
                    fill="#606060" />
                </svg>

              </span>

              <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_596_17668)">
                    <path
                      d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                      fill="#606060" />
                    <path
                      d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                      fill="#606060" />
                    <path
                      d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                      fill="#606060" />
                  </g>
                  <defs>
                    <clipPath id="clip0_596_17668">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>


              </span>

              <span>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.30722 2.41736C5.30722 3.75242 4.11916 4.83471 2.65361 4.83471C1.18806 4.83471 0 3.75242 0 2.41736C0 1.08229 1.18806 0 2.65361 0C4.11916 0 5.30722 1.08229 5.30722 2.41736Z"
                    fill="#606060" />
                  <path d="M0.362887 6.61157H4.89897V20H0.362887V6.61157Z" fill="#606060" />
                  <path
                    d="M12.2021 6.61157H7.66598V20H12.2021C12.2021 20 12.2021 15.7851 12.2021 13.1498C12.2021 11.568 12.7566 9.97934 14.9691 9.97934C17.4695 9.97934 17.4544 12.0493 17.4428 13.653C17.4275 15.7492 17.4639 17.8884 17.4639 20H22V12.9339C21.9616 8.42197 20.7545 6.34298 16.7835 6.34298C14.4253 6.34298 12.9634 7.3858 12.2021 8.32927V6.61157Z"
                    fill="#606060" />
                </svg>

              </span>
            </div>


          </div>
          <div className="border border-[#EBEBEE] rounded-[22px] px-4 py-6 md:p-6">
            <form className="space-y-6">
              <div>
                <label className="font-Montserrat text-base text-p_text mb-4 block">Name</label>
                <input type="text" className="bg-[#F5F5F5] rounded-xl h-12 w-full focus:outline-none px-4 text-text_color" />
              </div>

              <div>
                <label className="font-Montserrat text-base text-p_text mb-4 block">Email</label>
                <input type="email" className="bg-[#F5F5F5] rounded-xl h-12 w-full focus:outline-none px-4 text-text_color" />
              </div>

              <div>
                <label className="font-Montserrat text-base text-p_text mb-4 block">Message</label>
                <textarea
                  className="bg-[#F5F5F5] rounded-xl h-[132px] w-full focus:outline-none px-4 py-2 text-text_color"></textarea>
              </div>

              <button
                className="font-Montserrat font-medium text-sm md:text-base text-white bg-primary_3 text-center w-full h-10 md:h-[56px] rounded-xl">
                Send Message</button>



            </form>

          </div>

        </div>

      </div>

    </div>

  </section>
    );
};

export default ContactUs;