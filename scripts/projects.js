const projectList = [
  {
    id: 1,
    Number: "01",
    title: "FullStack Smart Canteen Web Application (Jan 2024 – Apr 2024) ",
    description:
      "Created an online food ordering system using React, Node.js, Express, and Stripe for secure payment integration.",

    techStack: ["MongoDB", "Express", "React", "Node"],
    image: "assets/skills/Smart_canteen.jpg",
    liveLink: "#",
    githubLink: "https://github.com/Rajkamalout/Complete_React_and_Redux",
  },
  {
    id: 2,
    Number: "02",
    title: "Gemini_Ai (May 2025)",
    description:
      "Created an online food ordering system using React, Node.js, Express, and Stripe for secure payment integration.",

    techStack: ["HTML", "CSS", "JavaScript", "Gemini API", "Node.js"],
    image:"assets/skills/Smart_canteen.jpg",
    liveLink: "#",
    githubLink: "https://github.com/Rajkamalout/Gemini_Ai",
  },
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;

  const nextDisabled = currentIndex === projectList.length - 1;

  projects.innerHTML = ` 
  <div class="project-info">
          <h3>${projectContent?.Number}</h3>
          <h4>${projectContent?.title}</h4>
          <p>${projectContent?.description}
          </p>
          <div class="tech-stack">
            <span>${projectContent?.techStack
              ?.map((tech, i) => {
                return `
              <span key=${i}>${tech}</span>`;
              })
              .join(",")}
          </div>
          <hr>
          <div class="links">
            <a href=${
              projectContent?.liveLink
            }><i class="fa-solid fa-arrow-right"></i></a>
            <a href =${
              projectContent?.githubLink
            } class="fa-brands fa-square-github git"></a>
          </div>
  </div> 
  <div class="carousel">
          <img src="${projectContent?.image}" alt="${projectContent?.title}">
          <div class="arrows">
            <a href="#" id="previous" class=${
              previousDisabled ? "disabled-btn" : ""
            }>
              <i class="fa-solid fa-arrow-left"></i>
            </a>
            <a href="#" id="next" class=${
              nextDisabled ? "disabled-btn" : ""
            }> <i class="fa-solid fa-arrow-right"></i></a>
          </div>
    </div>`;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });
  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);
