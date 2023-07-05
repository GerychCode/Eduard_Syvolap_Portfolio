window.addEventListener('DOMContentLoaded', () => {
    const TubsButton = document.querySelectorAll(".work_experience__company_item");
    const TubsFilling = document.querySelectorAll(".work_experience_info_item");

    TubsButton.forEach(tub => {
        tub.addEventListener("click", () => {
            TubsButton.forEach(button => {
                button.classList.remove('company_item_select');
            });
            TubsFilling.forEach(filling => {
                filling.classList.add('hidden');
            });
            const filling = document.querySelector(`#${tub.dataset.tab}`);
            tub.classList.add('company_item_select');
            filling.classList.remove("hidden");
        })
    })
});
