const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "bxs-phone-call", 
    name: "Phone",
    value: "+91 9969260380",
    href: "tel:+919969260380",
  },
  {
    id: 2,
    icon: "bx-envelope-open",
    name: "Email",
    value: "yadavrajkamal700@gmail.com",
    href: "mailto:yadavrajkamal700@gmail.com",
  },
  {
    id: 3,
    icon: "bxs-map",
    name: "Country",
    value: "India",
    href: "#",
  },
];

const contactContect = contactList
  .map((ele) => {
    return `
      <div class="media" key="${ele.id}">
        <span class="icon"><i class='bx ${ele.icon}'></i></span>
        <div class="contact-val">
          <p class="title">${ele.name}</p>
          <a href="${ele.href}" target="_blank">${ele.value}</a>
        </div>
      </div>
    `;
  })
  .join("");

if (media) media.innerHTML = contactContect;
