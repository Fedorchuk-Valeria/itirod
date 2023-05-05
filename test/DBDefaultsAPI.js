export const AddDefaultModules = (database, set, ref) => {
    set(ref(database, "modules/" + "0"), {
        name: "Scratch JR",
        themes: [
            "Introduction", "Character Management", "Kolobok"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "modules/" + "1"), {
        name: "Codemonkey",
        themes: [
            "Introduction", "Cycles"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "modules/" + "2"), {
        name: "CoduGameLab",
        themes: [
            "Introduction", "Fishing", "Racing"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "modules/" + "3"), {
        name: "Scratch",
        themes: [
            "Football", "Maze", "Mage Battle",
            "Google Dinosaur", "Flappy Bird", "Space Battle"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "modules/" + "4"), {
        name: "Construct 2",
        themes: [
            "Animation", "Events", "Global",
            "Variables", "Local variables"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "modules/" + "5"), {
        name: "Python",
        themes: [
            "Variables", "Loops and conditions", "Functions", "Classes and objects"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "modules/" + "6"), {
        name: "C#",
        themes: [
            "Introduction", "Classes and objects", "OOP principles"
        ]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))
}

export const AddDefaultUsers = (database, set, ref) => {
    set(ref(database, "users/" + "1"), {
        email: "lera@gmail.com",
        password: "lera1234"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "users/" + "2"), {
        email: "vasia@gmail.com",
        password: "vasia1234"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))
}


export const AddDefaultAges = (database, set, ref) => {
    set(ref(database, "ages/" + "0"), {
        name: "Young group",
        moduleIds: ["0", "1", "2"]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "ages/" + "1"), {
        name: "Middle group",
        moduleIds: ["3", "4"]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "ages/" + "2"), {
        name: "Senior group",
        moduleIds: ["5", "6"]
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))
}

export const AddDefaultLessons = (database, set, ref) => {
    set(ref(database, "lessons/" + "0"), {
        age: "Young group",
        startModule: "CoduGameLab",
        startTheme: "Fishing",
        startDate: "2023-05-01T20:22:20.834Z",
        lessonType: "regular",
        userId: "1"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "lessons/" + "1"), {
        age: "Senior group",
        startModule: "Python",
        startTheme: "Variables",
        startDate: "2023-05-02T20:22:20.834Z",
        lessonType: "regular",
        userId: "1"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "lessons/" + "2"), {
        age: "Young group",
        startModule: "Codemonkey",
        startTheme: "Cycles",
        startDate: "2023-05-04T20:22:20.834Z",
        lessonType: "regular",
        userId: "1"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "lessons/" + "3"), {
        age: "Middle group",
        startModule: "Scratch",
        startTheme: "Google Dinosaur",
        startDate: "2023-05-04T20:22:20.834Z",
        lessonType: "regular",
        userId: "1"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))

    set(ref(database, "lessons/" + "4"), {
        age: "Senior group",
        startModule: "Python",
        startTheme: "Functions",
        startDate: "2023-05-05T20:22:20.834Z",
        lessonType: "additional",
        userId: "1"
    }).then(() => console.log("ok"))
    .catch(error => console.log(error))
}