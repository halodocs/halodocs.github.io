// Data for the menu
const menuItems = [
    { title: "Mining", image: "https://dam.mediacorp.sg/image/upload/s--MY-3poxm--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/one-cms/core/2024-01-24t032917z_2_lynxmpek0m0hs_rtroptp_3_fintech-crypto-crime.jpg?itok=9N0QLgee", link: "https://trusting-axolotl-1b8.notion.site/Mining-1c0b51647594811fb50ce4f10ad856d3" },
    { title: "Pomokit", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg", link: "pomokit.html" },
    { title: "Software Quality", image: "https://asset.kompas.com/crops/HEuQAw_YrU1VbMJDjsXaItfhvkc=/0x0:2160x1440/1200x800/data/photo/2023/01/16/63c4bf0783f1d.png", link: "software-quality.html" },
    { title: "Artificial Intelligence", image: "https://blob.cloudcomputing.id/images/6c9c34df-1ecb-4fee-b7ec-cc0cf88a3d26/ilustrasi-agi-l-min.jpg", link: "ai.html" },
    { title: "Cloud Computing", image: "https://jagoancloud.com/blog/wp-content/uploads/2022/11/2.-4-Jenis-Cloud-Computing-bagi-Perusahaan-Anda-scaled.jpeg", link: "cloud.html" },
    { title: "Data Mining", image: "https://bgan.es/wp-content/uploads/2024/11/img108.jpg", link: "data-mining.html" },
    { title: "Probability Statistics", image: "https://bigpro1.com/wp-content/uploads/2024/12/statistic-1-1.webp", link: "stats.html" },
    { title: "General English", image: "https://www.getours.com/media/q5we0bbr/england-london-elizabeth-tower-with-flags.jpg", link: "english.html" }
];

// Function to generate menu items
function generateMenu() {
    const container = document.getElementById("menu-container");
    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "col-span-1 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer";

        card.innerHTML = `
            <a href="${item.link}">
                <div class="w-full h-64 bg-gray-200 rounded-lg flex justify-center items-center bg-cover bg-center relative overflow-hidden shadow-lg hover:shadow-2xl"
                     style="background-image: url('${item.image}');">
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-purpdocs opacity-75"></div>
                    <p class="text-2xl font-bold text-white relative">
                        ${item.title}
                    </p>
                </div>
            </a>
        `;

        container.appendChild(card);
    });
}

// Run the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", generateMenu);
