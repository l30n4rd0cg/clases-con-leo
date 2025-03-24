const exerciseList = {
    fracciones: "Fracciones"
}

function loadExercises() {
    let exerciseUL = document.getElementById("exercises");

    for (const exerciseName in exerciseList) {
        if (Object.prototype.hasOwnProperty.call(exerciseList, exerciseName)) {
            const exerciseDescription = exerciseList[exerciseName];

            let exerciseLI = document.createElement("li");
            let exerciseA = document.createElement("a");

            exerciseA.href = `./${exerciseName}`;
            exerciseA.textContent = exerciseDescription;

            exerciseLI.appendChild(exerciseA);
            exerciseUL.appendChild(exerciseLI);
        }
    }
}