document.addEventListener("DOMContentLoaded", function() {
    const jsonData = [
        {
            "status": "development",
            "title": "TinyLink",
            "date": "2023",
            "previewImage": "sourse/img/last_work/TinyLink.png",
            "tags": ["JavaScript", "ReactJS", "Redux Toolkit", "Express", "MongoDB"],
            "githubLink": "https://github.com/GerychCode/TinyLink-LinkShortener",
            "websiteLink": "",
            "description": "Full-Stack application, link shortener. Pat project, which is currently under development"
        },
        {
            "status": "Done",
            "title": "BlockNFT UI",
            "date": "2023",
            "previewImage": "sourse/img/last_work/BlockNft.jpg",
            "tags": ["HTML", "Css", "JavaScript", "ReactJS"],
            "githubLink": "https://github.com/GerychCode/BlockNFT_UI/",
            "websiteLink": "https://gerychcode.github.io/BlockNFT_UI/",
            "description": "A project created as part of the restoration of react js skills. The layout for the layout was taken from Figma community resources"
        },
    ];

    const parentClass = document.querySelector('.latest_work_list');

    jsonData.forEach(function(project) {
        let item = document.createElement('div');
        item.className = 'latest_work_item';

        let titleRow = document.createElement('div');
        titleRow.className = 'latest_work_item_title_row';

        let titleText = document.createElement('div');
        titleText.className = 'latest_work_item_title_text';
        titleText.textContent = project.title;

        let titleDate = document.createElement('div');
        titleDate.className = 'latest_work_item_title_date';
        titleDate.textContent = project.date;

        titleRow.appendChild(titleText);
        titleRow.appendChild(titleDate);

        let previewImage = document.createElement('img');
        previewImage.className = 'latest_work_item_preview';
        previewImage.src = project.previewImage;
        previewImage.alt = 'preview';

        let tagsAndLinks = document.createElement('div');
        tagsAndLinks.className = 'latest_work_item_tags_and_links';

        let tagsList = document.createElement('ul');
        tagsList.className = 'latest_work_item_tags';

        project.tags.forEach(function(tag) {
            let tagItem = document.createElement('li');
            tagItem.textContent = tag;
            tagsList.appendChild(tagItem);
        });

        let linksList = document.createElement('ul');
        linksList.className = 'latest_work_item_links';

        let githubLinkItem = document.createElement('li');
        let githubLink = document.createElement('a');
        githubLink.href = project.githubLink;
        githubLink.target = '_blank';
        let githubIcon = document.createElement('div');
        githubIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M9 0C4.0275 0 0 4.13206 0 9.22851C0 13.3067 2.5785 16.7651 6.15375 17.9841C6.60375 18.071 6.76875 17.7856 6.76875 17.5403C6.76875 17.3211 6.76125 16.7405 6.7575 15.9715C4.254 16.5283 3.726 14.7333 3.726 14.7333C3.3165 13.6682 2.72475 13.3836 2.72475 13.3836C1.9095 12.8115 2.78775 12.823 2.78775 12.823C3.6915 12.8876 4.16625 13.7735 4.16625 13.7735C4.96875 15.1847 6.273 14.7771 6.7875 14.5411C6.8685 13.9443 7.10025 13.5375 7.3575 13.3067C5.35875 13.076 3.258 12.2824 3.258 8.74632C3.258 7.73887 3.60675 6.916 4.18425 6.27C4.083 6.03698 3.77925 5.09875 4.263 3.82752C4.263 3.82752 5.01675 3.57989 6.738 4.77345C7.458 4.56811 8.223 4.4666 8.988 4.46198C9.753 4.4666 10.518 4.56811 11.238 4.77345C12.948 3.57989 13.7017 3.82752 13.7017 3.82752C14.1855 5.09875 13.8817 6.03698 13.7917 6.27C14.3655 6.916 14.7142 7.73887 14.7142 8.74632C14.7142 12.2916 12.6105 13.0722 10.608 13.299C10.923 13.5759 11.2155 14.1419 11.2155 15.0063C11.2155 16.2414 11.2043 17.2335 11.2043 17.5334C11.2043 17.7756 11.3617 18.064 11.823 17.9718C15.4238 16.7613 18 13.3006 18 9.22851C18 4.13206 13.9702 0 9 0Z" style="fill: var(--secondar);"/></svg>`;
        githubIcon.className = 'github-icon';
        githubLink.appendChild(githubIcon);
        githubLinkItem.appendChild(githubLink);

        let websiteLinkItem = document.createElement('li');
        let websiteLink = document.createElement('a');
        websiteLink.href = project.websiteLink;
        websiteLink.target = '_blank';
        let websiteIcon = document.createElement('div');
        websiteIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M9.5 4.5H4.5C3.83696 4.5 3.20107 4.76339 2.73223 5.23223C2.26339 5.70107 2 6.33696 2 7V19.5C2 20.163 2.26339 20.7989 2.73223 21.2678C3.20107 21.7366 3.83696 22 4.5 22H17C17.663 22 18.2989 21.7366 18.7678 21.2678C19.2366 20.7989 19.5 20.163 19.5 19.5V14.5M14.5 2H22M22 2V9.5M22 2L9.5 14.5" stroke="#111827" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        websiteIcon.className = 'website-icon';
        websiteLink.appendChild(websiteIcon);
        websiteLinkItem.appendChild(websiteLink);

        linksList.appendChild(githubLinkItem);
        linksList.appendChild(websiteLinkItem);

        tagsAndLinks.appendChild(tagsList);
        tagsAndLinks.appendChild(linksList);

        let description = document.createElement('p');
        description.className = 'latest_work_item_description';
        description.textContent = project.description;

        item.appendChild(titleRow);
        item.appendChild(previewImage);
        item.appendChild(tagsAndLinks);
        item.appendChild(description);

        parentClass.appendChild(item);
    });
})