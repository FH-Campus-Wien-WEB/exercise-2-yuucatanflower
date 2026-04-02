window.onload = function () {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        const bodyElement = document.querySelector("body");

        if (xhr.status === 200) {
            const movies = JSON.parse(xhr.responseText);

            const createNode = (tag, className = "", text = "") => {
                const el = document.createElement(tag);
                if (className) el.className = className;
                if (text) el.textContent = text;
                return el;
            };

            movies.forEach(movie => {
                const article = document.createElement("article");
                article.id = movie.imdbID; // Task 1.3 requirement

                // --- THE SIDEBAR ---
                const sidebar = createNode("div", "poster-sidebar");

                const img = document.createElement("img");
                img.src = movie.Poster;
                img.alt = `${movie.Title} poster`;
                sidebar.appendChild(img);

                const ratingsContainer = createNode("div", "ratings-container");

                const metaBox = createNode("div", "rating-box");
                metaBox.append(
                    createNode("span", "rating-label", "Metascore"),
                    createNode("span", "rating-score", movie.Metascore)
                );

                const imdbBox = createNode("div", "rating-box");
                imdbBox.append(
                    createNode("span", "rating-label", "IMDb"),
                    createNode("span", "rating-score", movie.imdbRating)
                );

                ratingsContainer.append(metaBox, imdbBox);
                sidebar.appendChild(ratingsContainer);

                // --- MOVIE CONTENT ---
                const content = createNode("div", "movie-content");

                const title = createNode("h2", "", movie.Title);
                const plot = createNode("p", "plot-text", movie.Plot);
                const stats = createNode("p", "stats", `Runtime ${movie.Runtime}m • Released on ${movie.Released}`);

                const genresP = document.createElement("p");
                movie.Genres.forEach(genre => {
                    genresP.appendChild(createNode("span", "genre", genre));
                });

                content.append(title, plot, stats, genresP);

                const appendListSection = (headingText, itemsArray) => {
                    content.appendChild(createNode("h3", "", headingText));
                    const ul = document.createElement("ul");
                    itemsArray.forEach(item => {
                        ul.appendChild(createNode("li", "", item));
                    });
                    content.appendChild(ul);
                };

                appendListSection("Director", movie.Directors);
                appendListSection("Writers", movie.Writers);
                appendListSection("Actors", movie.Actors);

                // EDIT BUTTON
                const editButton = createNode("button", "", "Edit Movie");
                editButton.onclick = function() {
                    location.href = `edit.html?imdbID=${movie.imdbID}`;
                };
                content.appendChild(editButton);

                article.append(sidebar, content);
                bodyElement.appendChild(article);
            });

        } else {
            bodyElement.textContent = "Data could not be loaded, Status " + xhr.status;
        }
    };

    xhr.open("GET", "/movies");
    xhr.send();
};