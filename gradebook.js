function getAverage(scores) {
    // Obtains the average score of group of students
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    // Clasifies a score
    if (score === 100) {
        return "A++";
    } 
    else if (score >= 90) {
        return "A";
    } 
    else if (score >= 80) {
        return "B";
    } 
    else if (score >= 70) {
        return "C";
    } 
    else if (score >= 60) {
        return "D";
    } 
    else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    // Creates a personal message for a student based on his score
    // and the group's score
    let message = "Class average: " + getAverage(totalScores) + 
    ". Your grade: " + getGrade(studentScore);
    
    if (hasPassingGrade(studentScore)) {
        message += ". You passed the course.";
        return message;
    }

    message += ". You failed the course.";
        return message;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([70, 88, 59, 77, 57, 99, 67, 38, 97, 89], 70));