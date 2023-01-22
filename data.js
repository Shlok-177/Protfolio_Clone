const jobs = {
    "google" : [
        "Sr. Software Engineer",
        "July 2018 - Present",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas quasi repudiandae minima voluptate veritatis ad quidem consequatur perspiciatis perferendis."
    ],
    "microsoft" : [
        "Jr. Software Engineer",
        "July 2017 - july 2018",
        "Job 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas quasi repudiandae minima voluptate veritatis ad quidem consequatur perspiciatis perferendis."
    ],
    "fb" : [
        "Software Engineer Intern",
        "July 2016 - July 2017",
        "3rd hob Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas quasi repudiandae minima voluptate veritatis ad quidem consequatur perspiciatis perferendis."
    ],
    "netflix" : [
        "UI Designer", //0th element
        "July 2015 - July 2016", //1st element
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas quasi repudiandae minima voluptate veritatis ad quidem consequatur perspiciatis perferendis." //2nd element
    ],
}

function updateWork(id) {
    document.getElementById("role").innerHTML = jobs[id][0];
    document.getElementById("timeline").innerHTML = jobs[id][1];
    document.getElementById("desc").innerHTML = jobs[id][2];
}