const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    // Sab tabs se active class hatana
    aboutTabs.forEach((a) => {
      a.classList.remove("active");
    });
    // Clicked tab ko active karna
    tab.classList.add("active");

    // Sab content se active class hatana
    aboutContent.forEach((c) => {
      c.classList.remove("active");
    });

    // Data attribute se section lena
    const activeTab = tab.dataset.section;

    // Us section ko active karna
    document.getElementById(activeTab).classList.add("active");

    if (activeTab === "experience") {
      // Yaha selector galat hai, '#' lagana padega
      const experience = document.querySelector("#experience");

      const experienceList = [
        {
          id: 1,
          date: "2024-2025",
          position: "Frontend Developer",
          company: "Mindstay Technology",
          details: "Built responsive and optimized UIs using React.js And Tailwind CSS",
        },
        {
          id: 2,
          date: "2024-2025",
          position: "Frontend Developer",
          company: "Mindstay Technology",
          details: "Built responsive and optimized UIs using React.js And Tailwind CSS",
        }
      ];

  //    List ko HTML me convert karke inject karna
      // experience.innerHTML = `
      //   <h2>My <span>Experience</span></h2>
      //   ${experienceList.map(ele => `
      //     <div class="exp-item">
      //       <strong>${ele.date}</strong> - ${ele.position} at ${ele.company}
      //       <p>${ele.details}</p>
      //     </div>
      //   `).join('')}
      // `;
    }
  });
 });
