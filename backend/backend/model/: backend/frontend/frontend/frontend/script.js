async function addStudent() {
    const student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    };

    await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(student)
    });

    alert("Student Added");
    loadStudents();
}

async function loadStudents() {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();

    document.getElementById("output").innerHTML =
        data.map(s => `
            <p><b>${s.name}</b> — Age: ${s.age}, Course: ${s.course}</p>
        `).join("");
}

loadStudents();
