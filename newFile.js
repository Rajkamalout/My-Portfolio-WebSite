const { navlinks, tabs } = require("./script");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlinks.forEach((l) => {
      if (l === link) {
        link.classList.add("active");
      } else {
        l.classList.remove("active");
      }
    });
    // console.log(link.dataset.tab)
    const tabName = link.dataset.tab;
    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (tabName === "services") {
      const serviceList = [
        {
          id: 1,
          icon: "fa-code",
          text: "Website Development",
          para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and MERN stack.",
        },
        {
          id: 2,
          icon: "fa-code",
          text: "UX/UI Design",
          para: "Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX and performance.",
        },
        {
          id: 3,
          icon: "fa-code",
          text: "SEO Optimization",
          para: "I improve website visibility on search engines with optimized structure, keywords, and performance best practices.",
        },
        {
          id: 4,
          icon: "fa-code",
          text: "AI Chatbot Development",
          para: "I boost website visibility and search engine rankings by optimizing site structure, implementing effective keyword strategies, and following performance and technical SEO best practices. This ensures better traffic, faster load times, and improved user experience across all devices.",
        },
        {
          id: 5,
          icon: "fa-code",
          text: "Custom Website Development",
          para: "I build tailored web solutions using modern technologies like React, Next.js, and TypeScript. These websites are fully responsive, SEO-optimized, and designed for fast performance. With a focus on clean code and modern UI/UX, the result is a high-quality, user-friendly digital experience that works seamlessly across all devices.",
        },
        {
          id: 6,
          icon: "fa-code",
          text: "Custom Website Development",
          para: "I provide comprehensive digital marketing strategies designed to grow your online presence and connect with your target audience. From social media marketing and content creation to email campaigns and in-depth analytics, each approach is tailored to maximize engagement, drive traffic, and boost conversions for your brand.",
        },
      ];
      const services = document.getElementsByClassName("service-list");
      const innerContent = serviceList.map((l) => {
        return `
           <div class="box" key=${l?.id}>
          <div class="head-icons">
            <i class="fa-solid ${l?.icon}"></i>
            <span><i class="fa-solid fa-arrow-right"></i></span>
          </div>
          <h3>${l?.text}
          </h3>
          <span class="spacer"></span>
          <p>${l?.para}</p>
        </div>
          `;
      });
      join();

      // console.log(services)
      Array.from(services).forEach((ele) => {
        ele.innerHTML = innerContent;
      });
    }
  });
});
