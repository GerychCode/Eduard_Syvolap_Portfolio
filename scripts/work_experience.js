document.addEventListener("DOMContentLoaded", function() {
    const workExperience = [
        {
            logo: "sourse/img/company_logo/fiverr.png",
            name: "Fiverr",
            role: "Node.js Freelancer",
            date: "2022 - Present",
            description: [
                "Development of high-performance web applications on the Node.js platform using the Express.js framework.",
                "Create and configure a RESTful API to interact with client applications and provide flexibility and scalability of the system.",
                "Develop modern and responsive user interfaces using React.js and HTML/CSS.",
                "Integrate chat-bots on popular platforms such as Telegram and Discord to automate communication with users and provide intelligent solutions.",
                ]
        },
        {
            logo: "sourse/img/company_logo/parvenu.png",
            name: "Parvenu RP",
            role: "Node.js Back-End Developer",
            date: "01.2021 - 05.2021",
            description: [
                "Developing and configuring the server side of applications based on the RAGE MP Launcher, including query processing, database management, and interaction with client applications.",
                "Creating user interfaces for the client side of applications using HTML, CSS and JavaScript, providing usability and aesthetic design.",
                "Implementing the logic of game functions, such as character control, interacting with the game world and completing tasks, using the JavaScript programming language.",
                "Support and updates to existing applications, including bug fixes, changes, and compatibility with new versions of the RAGE MP Launcher."
            ]
        },
    ];

    const workExperienceContainer = document.querySelector('.work_experience__company__info');

    const companyList = document.createElement('ul');
    companyList.classList.add('work_experience__company_list');

    workExperience.forEach((item, index) => {
        const companyItem = document.createElement('li');
        companyItem.dataset.tab = `tab_${index + 1}`;
        companyItem.classList.add('work_experience__company_item');
        if (index === 0) {
            companyItem.classList.add('company_item_select');
        }

        const logoImg = document.createElement('img');
        logoImg.src = item.logo;
        logoImg.alt = '+';
        companyItem.appendChild(logoImg);

        const companyTitle = document.createElement('div');
        companyTitle.classList.add('company_title');

        const companyName = document.createElement('h2');
        companyName.textContent = item.name;
        companyTitle.appendChild(companyName);

        const companyRole = document.createElement('h3');
        companyRole.textContent = item.role;
        companyTitle.appendChild(companyRole);

        companyItem.appendChild(companyTitle);
        companyList.appendChild(companyItem);
    });

    workExperienceContainer.appendChild(companyList);

    // Генерация информации о компаниях
    workExperience.forEach((item, index) => {
        const companyInfo = document.createElement('div');
        companyInfo.id = `tab_${index + 1}`;
        companyInfo.classList.add('work_experience_info_item');
        if (index !== 0) {
            companyInfo.classList.add('hidden');
        }

        const companyTitle = document.createElement('h1');
        companyTitle.classList.add('title');
        companyTitle.textContent = `${item.role} at @${item.name}`;
        companyInfo.appendChild(companyTitle);

        const companyDate = document.createElement('h2');
        companyDate.classList.add('date');
        companyDate.textContent = item.date;
        companyInfo.appendChild(companyDate);

        const descriptionList = document.createElement('ul');
        item.description.forEach((desc) => {
            const descriptionItem = document.createElement('li');
            descriptionItem.textContent = desc;
            descriptionList.appendChild(descriptionItem);
        });

        companyInfo.appendChild(descriptionList);
        workExperienceContainer.appendChild(companyInfo);
    });
})

