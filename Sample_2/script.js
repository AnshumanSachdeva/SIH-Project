// Sample data for monasteries (in a real application, this would come from a database)
        const monasteries = [
            { name: "Rumtek Monastery", year: "1740", location: "Near Gangtok", description: "One of the largest and most important monasteries in Sikkim." },
            { name: "Pemayangtse Monastery", year: "1705", location: "West Sikkim", description: "Famous for ancient scriptures and intricate wood carvings." },
            { name: "Tashiding Monastery", year: "1641", location: "Western Sikkim", description: "Considered one of the holiest monasteries in Sikkim." },
            { name: "Enchey Monastery", year: "1840", location: "Gangtok", description: "Nyingma order monastery with beautiful views of Gangtok." },
            { name: "Phodong Monastery", year: "1740", location: "North Sikkim", description: "Known for its ancient murals and religious artifacts." },
            { name: "Ralang Monastery", year: "1768", location: "Southern Sikkim", description: "Famous for its sacred burning ceremony." },
            { name: "Lingdum Monastery", year: "1990s", location: "East Sikkim", description: "A modern monastery with traditional architecture." },
            { name: "Dubdi Monastery", year: "1701", location: "Yuksom", description: "The first monastery established in Sikkim." },
            { name: "Kartok Monastery", year: "1840s", location: "Yuksam", description: "Known for its peaceful surroundings." },
            { name: "Tolung Monastery", year: "19th Century", location: "North Sikkim", description: "A remote monastery with traditional practices." },
            { name: "Labrang Monastery", year: "18th Century", location: "Western Sikkim", description: "Known for its annual mask dance festival." },
            { name: "Sanga Choeling Monastery", year: "1697", location: "Pemayangtse", description: "One of the oldest monasteries in Sikkim." },
            // Additional monasteries would be listed here in a real implementation
        ];

        // DOM elements
        const exploreMoreBtn = document.getElementById('exploreMoreBtn');
        const allMonasteriesModal = document.getElementById('allMonasteriesModal');
        const closeModal = document.getElementById('closeModal');
        const monasteriesContainer = document.getElementById('monasteriesContainer');
        const monasterySearch = document.getElementById('monasterySearch');
        const searchBtn = document.getElementById('searchBtn');

        // Open modal when "Explore More" button is clicked
        exploreMoreBtn.addEventListener('click', function() {
            allMonasteriesModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            renderMonasteries(monasteries);
        });

        // Close modal
        closeModal.addEventListener('click', function() {
            allMonasteriesModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });

        // Close modal if clicked outside content
        window.addEventListener('click', function(event) {
            if (event.target === allMonasteriesModal) {
                allMonasteriesModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Search functionality
        searchBtn.addEventListener('click', searchMonasteries);
        monasterySearch.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                searchMonasteries();
            }
        });

        function searchMonasteries() {
            const searchTerm = monasterySearch.value.toLowerCase();
            const filteredMonasteries = monasteries.filter(monastery => 
                monastery.name.toLowerCase().includes(searchTerm) ||
                monastery.location.toLowerCase().includes(searchTerm) ||
                monastery.description.toLowerCase().includes(searchTerm)
            );
            renderMonasteries(filteredMonasteries);
        }

        // Render monasteries to the container
        function renderMonasteries(monasteriesArray) {
            monasteriesContainer.innerHTML = '';
            
            if (monasteriesArray.length === 0) {
                monasteriesContainer.innerHTML = '<p class="no-results">No monasteries found matching your search.</p>';
                return;
            }
            
            monasteriesArray.forEach(monastery => {
                const card = document.createElement('div');
                card.className = 'monastery-card';
                card.innerHTML = `
                    <div class="card-img">
                        <i class="fas temple-icon">🏯</i>
                    </div>
                    <div class="card-content">
                        <h3>${monastery.name}</h3>
                        <p><strong>Established:</strong> ${monastery.year}</p>
                        <p><strong>Location:</strong> ${monastery.location}</p>
                        <p>${monastery.description}</p>
                        <a href="#" class="btn">Learn More</a>
                    </div>
                `;
                monasteriesContainer.appendChild(card);
            });
        }

        // Generate more monasteries for demonstration (in a real app, this would come from a database)
        for (let i = 13; i <= 30; i++) {
            monasteries.push({
                name: `Monastery ${i}`,
                year: `${1700 + Math.floor(Math.random() * 300)}`,
                location: ["East", "West", "North", "South"][Math.floor(Math.random() * 4)] + " Sikkim",
                description: `A beautiful monastery with rich cultural heritage and spiritual significance.`
            });
        }