lightbox.option({
    'resizeDuration': 200,
    'fadeDuration' : 300,
    'wrapAround' : true
});


/* Career Search in career.html*/

const careerSearch = document.getElementById("careerSearch");
const searchButton = document.getElementById("searchButton");

if (careerSearch && searchButton) {

    searchButton.addEventListener("click", function () {
        const searchValue = careerSearch.value.toLowerCase().trim();
        const rows = document.querySelectorAll("table tr");
        for (let i = 1; i < rows.length; i++) {
            const careerName = rows[i].cells[0].textContent.toLowerCase();
            if (searchValue===""||careerName.includes(searchValue)) {
              rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
}

/* Career Sorting in career.html*/
const sortButton=document.getElementById("sortCareers");
const careerTable=document.getElementById("career_Table");

if (sortButton && careerTable) {
    sortButton.addEventListener("click", function () {
        const rows = Array.from(careerTable.rows).slice(1);
        rows.sort(function (row1, row2) {
            const career1=row1.cells[0].textContent;
            const career2=row2.cells[0].textContent;
            return career1.localeCompare(career2);
        });
        rows.forEach(function (row) {
            careerTable.appendChild(row);
        });
    });
}

/* Universities Search and form validation in universities.html*/
const universityForm=document.getElementById("universityForm");
if (universityForm) {
    universityForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchValue=document.getElementById("search").value.toLowerCase().trim();
        const provinceValue=document.getElementById("province").value;
        const careerValue=document.getElementById("career").value;
        const result=document.getElementById("universityMessage");
        const universities=document.querySelectorAll(".university_card");
      
         /* Validate university name */
        if (searchValue!=="" && searchValue.length<2) {
            result.textContent = "Please enter at least 2 characters for the university name to appear.";
            return;
        }
        /* Check if at least one search option was selected */
        if (searchValue===""&& provinceValue==="9"&&careerValue==="7") {
            result.textContent ="Please enter a university name or select a province or career that you want.";
            return;
        }
        let foundUniversity=false;
        for(let i = 0; i<universities.length;i++) {
            const universityInformation =universities[i].textContent.toLowerCase();
            let matchesSearch=true;
            let matchesProvince=true;
            let matchesCareer=true;
            /* University name search */
            if (searchValue !=="") {
                const universityName=universities[i].querySelector("h3").textContent.toLowerCase();
                matchesSearch = universityName.includes(searchValue);

            }
            /* Province search */
            if (provinceValue !== "9") {
                if (provinceValue === "1") {
                    matchesProvince =universityInformation.includes("gauteng");
                } else if (provinceValue ==="2") {
                    matchesProvince =universityInformation.includes("western cape");
                } else if (provinceValue ==="3") {
                    matchesProvince =universityInformation.includes("eastern cape");
                } else if (provinceValue ==="4") {
                    matchesProvince =universityInformation.includes("kwazulu-natal");
                } else if (provinceValue ==="5") {
                    matchesProvince =universityInformation.includes("free state");
                } else if (provinceValue ==="6") {
                    matchesProvince =universityInformation.includes("limpopo");
                } else if (provinceValue ==="7") {
                    matchesProvince =universityInformation.includes("mpumalanga");
                } else if (provinceValue ==="8") {
                    matchesProvince =universityInformation.includes("northern cape");
                } else if (provinceValue ==="10") {
                    matchesProvince=universityInformation.includes("north-west");
                }
            }

            /* Career search */
            if (careerValue !=="7") {
                if (careerValue==="1") {
                    matchesCareer=universityInformation.includes("commerce");
                } else if (careerValue==="2") {
                    matchesCareer=universityInformation.includes("law");
                } else if (careerValue==="3") {
                    matchesCareer=universityInformation.includes("education");
                } else if (careerValue==="4") {
                    matchesCareer=universityInformation.includes("sciences");
                } else if (careerValue==="5") {
                    matchesCareer=universityInformation.includes("arts");
                } else if (careerValue==="6") {
                    matchesCareer=universityInformation.includes("health sciences");
                } else if (careerValue==="8") {
                    matchesCareer=universityInformation.includes("engineering");
                }
            }

            /* Display University found*/

            if (matchesSearch && matchesProvince && matchesCareer) {
                universities[i].style.display="";
                foundUniversity=true;
            } else {
                universities[i].style.display="none";
            }
        }
        /* Display search result message for the message found */ 
        if (foundUniversity) {
            result.textContent="Universities matching your search have been displayed below.";
        } else {
            result.textContent="No universities were found matching your search.";
        }
    });
}
/* About Page Welcome Message */

const aboutButton=document.getElementById("aboutButton");
const welcomingMessage=document.getElementById("welcomingMessage");

if (aboutButton && welcomingMessage) {
    aboutButton.addEventListener("click", function() {
        welcomingMessage.textContent="Welcome to CareerBridge SA,Explore careers and discover opportunities for your future.";

    });

}
/* Career Expo Event Information */
const eventButton=document.getElementById("eventButton");
const eventResult=document.getElementById("eventResult");
if (eventButton && eventResult) {
    eventButton.addEventListener("click",function() {
        if (eventResult.style.display==="none") {
            eventResult.style.display="block";
            eventButton.textContent="Hide Event Information";
        } else {
            eventResult.style.display="none";
            eventButton.textContent="Show Event Information";
        }

    });

}
/* Back to Top Button for index.html*/
const backToTop=document.getElementById("backToTop");
if (backToTop) {
    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });
    });
}
/*Link to get more information from the expo.hmtl in the index.html*/
const registerLink=document.getElementById("registerLink");
const registerResult=document.getElementById("registerResult");
if (registerLink && registerResult) {
    registerLink.addEventListener("click", function(event) {
        if (registerLink.textContent==="Register now") {
        event.preventDefault();
        registerResult.textContent="Thank you for your interest! Career Expo registration dates will be announced soon.";
        registerLink.textContent="Visit Career Expo Page";
        }
    });
}
/* Social Media Icons */
const socialMedia = document.getElementById("socialMedia");
if (socialMedia) {
    socialMedia.innerHTML = `
        <a href="https://www.facebook.com/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Facebook">
            <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="YouTube">
            <i class="fa-brands fa-youtube"></i>
        </a>
    `;
}