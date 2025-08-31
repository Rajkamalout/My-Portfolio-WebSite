const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => {
      a.classList.remove("active");
    });

    tab.classList.add("active");

    aboutContent.forEach((c) => {
      c.classList.remove("active");
    });

    const activeTab = tab.dataset.section;

    document.getElementById(activeTab).classList.add("active");

    if (activeTab === "experience") {
      const experience = document.querySelector(".experience-list");

      const experienceList = [
        {
          id: 1,
          date: "2024-2025",
          position: "Frontend Developer",
          company: "Prodigy InfoTech",
          details:
            "Built responsive and optimized UIs using React.js And Tailwind CSS",
        },

        {
          id: 2,
          date: "2024-2025",
          position: "Frontend Developer",
          company: "Mindstay Technology",
          details:
            "Built responsive and optimized UIs using React.js And Tailwind CSS",
        },
      ];
      const experienceContent = experienceList
        .map((ele) => {
          return `<div class="experience-box" key=${ele?.id}>
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>
              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>
              <p>
                ${ele?.details}
              </p>
            </div>`;
        })
        .join("");
      if (experience) {
        experience.innerHTML = experienceContent;
      }
    } else if (activeTab === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          data: "2021 - 2024",
          degree: "Bachelor of Science in Computer Science",
          institution: "Nirmala Memorial Foundation College Mumbai University",
          details:"Studied core subjects like Data Structures, Web Development, App Development and Operating Systems. Built multiple academic projects using JavaScript and MERN Stack also Use Java and xml",
        },
        {
          id: 2,
          data: "2020 - 2021",
          degree: "Higher Secondary Education (HSC - Science)",
          institution: "Vidya Varidhi Vidyalaya & Junior College",
          details:"Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
        },
        {
          id: 3,
          data: "2018 - 2019",
          degree: "Higher Secondary Education (HSC - Science)",
          institution: "Vidya Varidhi Vidyalaya & Junior College",
          details:"Completed basic schooling with distinction. Actively participated in computer clubs and tech-related events.",
        },
      ];
      const educationContent = educationList
        .map((ele) => {
          return `<div class="experience-box" key=${ele?.id}>
              <h4>${ele?.data}</h4>
              <h3>${ele?.degree}</h3>
              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>
              <p>
                ${ele?.details}
              </p>
            </div>
        `;
        })
        .join(" ");
      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (activeTab === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/html.png",
        },
        {
          id: 2,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/css.png",
        },
        {
          id: 3,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/Javascript.webp",
        },
        {
          id: 4,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/Bootstrap.png",
        },
        {
          id: 5,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/reactjs.png",
        },
        {
          id: 6,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/Databases.png",
        },
        {
          id: 7,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/nodejs.png",
        },
      ];
      const skillContent = skillList
        .map((ele) => {
          // return `<div class ="skill-box" key=${ele?.id}>
          // <h1>${ele?.name}<h1>
          // <h2>${ele?.icon}<h2>`

          // <img src="assets/skills/Bootstrap_logo.svg.png" dyanamic banana hai

          return `
       <div class="skill-box" key=${ele?.id}>
               <img src="${ele?.icon}" alt="${ele?.name}" title="${ele?.name}" loading="lazy" />
            </div>`;
        })
        .join("");
      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (activeTab === "about-me") {
      const aboutinfo = document.querySelector(".about-info");

      const aboutList = [
        {
          id: 1,
          key: "Name:",
          value: "Rajkamal",
        },
        {
          id: 2,
          key: "Conutry:",
          value: "India",
        },
        {
          id: 3,
          key: "Industry:",
          value: "Software $ CS",
        },
        {
          id: 4,
          key: "Experience",
          value: "6 month",
        },
        {
          id: 5,
          key: "Address:",
          value: "Nalasopara(East)",
        },
      ];

      const infoContent = aboutList
        .map((ele) => {
          return `
        <div class="info-box" key="${ele?.id}">
        <span> ${ele?.key}</span>
        <span> ${ele?.value}</span>
        </div>`;
        })
        .join("");
      if (aboutinfo) {
        aboutinfo.innerHTML = infoContent;
      }
    }
  });
});
